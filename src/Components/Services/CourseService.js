import axios from "axios";

// const baseUrl = "http://localhost:8080/api/lp/courses";
const baseUrl = "https://learnprogramming-backend.herokuapp.com/api/lp/courses";

class CourseService {
  getCourses() {
    return axios.get(baseUrl);
  }

  createCourse(course) {
    return axios.post(baseUrl, course);
  }
}

export default new CourseService();
