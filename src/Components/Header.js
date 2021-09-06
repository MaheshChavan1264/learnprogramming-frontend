import axios from "axios";
import React, { Component } from "react";
import CourseService from "./Services/CourseService";
import { Link } from "react-router-dom";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
    this.addCourse = this.addCourse.bind(this);
  }

  componentDidMount() {
    CourseService.getCourses().then((res) => {
      console.log("In header", res);
      this.setState({ courses: res.data });
    });
  }

  addCourse() {
    this.props.history.push("/addcourse");
  }
  render() {
    return (
      <div className="header">
        <ul>
          <li className="logo">LearnProgramming</li>
          <li>
            <ul>
              <li className="nav-link">Home</li>
              <li className="nav-link">Courses</li>
              <li className="nav-link">About</li>
              <li>
                <div className="btn-group">
                  <Link className="btn-group__item" to="/addcourse">
                    Add Course
                  </Link>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
