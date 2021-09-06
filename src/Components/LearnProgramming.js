import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import CourseCard from "./CourseCard";
import Navbar from "./Navbar";
import SearchData from "./Data";
import Header from "./Header";

// const baseUrl = "http://localhost:8080/api/lp/courses";

const baseUrl = "https://learnprogramming-backend.herokuapp.com/api/lp/courses";

const LearnProgramming = () => {
  const [Courses, setListData] = useState([]);

  const fetchCourses = () => {
    axios.get(baseUrl).then((res) => {
      console.log("got data", res);
      setListData(res.data);
    });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const uniqueList = [
    ...new Set(
      Courses.map((curElem) => {
        return curElem.parentSubject;
      })
    ),
    "All",
  ];

  const [courseData, setCourseData] = useState(Courses);
  const [courseList] = useState(uniqueList);

  //
  const filterItem = (search, category) => {
    if (category === "All") {
      setCourseData(Courses);
      return;
    } else {
      if (search === "") {
        const updatedList = Courses.filter((curElem) => {
          return curElem.parentSubject === category;
        });
        setCourseData(updatedList);
      } else {
        const updatedList = Courses.filter((curElem) => {
          return curElem.coursName.toLowerCase().includes(search.toLowerCase());
        });
        setCourseData(updatedList);
      }
    }
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={uniqueList} />
      <SearchData filterItem={filterItem} menuList={courseList} />
      <CourseCard courseData={courseData} />
    </>
  );
};

export default LearnProgramming;
