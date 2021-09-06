import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import nextId from "react-id-generator";

import CourseService from "./Services/CourseService";
class AddCourse extends Component {
  constructor(props) {
    super(props);
    var newId = nextId();
    this.state = {
      id: newId,
      coursName: "",
      childSubject: "",
      imageUrl: "",
      length: "",
      nextSessionDate: "",
      parentSubject: "",
      provider: "",
      universitiesInstitutions: "",
      url: "",
      videoUrl: "",
      courses: [],
    };
    // this.changeIdHandler = this.changeIdHandler(this);

    this.changeCoursNameHandler = this.changeCoursNameHandler.bind(this);
    this.changeChildSubjectHandler = this.changeChildSubjectHandler.bind(this);
    this.changeImageUrlHandler = this.changeImageUrlHandler.bind(this);
    this.changeLengthHandler = this.changeLengthHandler.bind(this);
    this.changeNextSessionDateHandler =
      this.changeNextSessionDateHandler.bind(this);
    this.changeParentSubjectHandler =
      this.changeParentSubjectHandler.bind(this);
    this.changeProviderHandler = this.changeProviderHandler.bind(this);
    this.changeUniversitiesHandler = this.changeUniversitiesHandler.bind(this);
    this.changeUrlHandler = this.changeUrlHandler.bind(this);
    this.changeVideoUrlHandler = this.changeVideoUrlHandler.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  saveCourse = (e) => {
    e.preventDefault();
    let course = {
      // id: this.state.id,
      coursName: this.state.coursName,
      childSubject: this.state.childSubject,
      imageUrl: this.state.imageUrl,
      length: this.state.length,
      nextSessionDate: this.state.nextSessionDate,
      parentSubject: this.state.parentSubject,
      provider: this.state.provider,
      universitiesInstitutions: this.state.universitiesInstitutions,
      url: this.state.url,
      videoUrl: this.state.videoUrl,
    };

    CourseService.createCourse(course).then((res) => {
      this.props.history.push("/courses");
    });

    console.log("course =>" + JSON.stringify(course));
  };

  changeIdHandler(event) {
    this.setState({ id: event.target.value });
  }
  changeCoursNameHandler(event) {
    this.setState({ coursName: event.target.value });
  }

  changeChildSubjectHandler(event) {
    this.setState({ childSubject: event.target.value });
  }

  changeImageUrlHandler(event) {
    this.setState({ imageUrl: event.target.value });
  }

  changeLengthHandler(event) {
    this.setState({ length: event.target.value });
  }
  changeNextSessionDateHandler(event) {
    this.setState({ nextSessionDate: event.target.value });
  }
  changeParentSubjectHandler(event) {
    this.setState({ parentSubject: event.target.value });
  }

  changeProviderHandler(event) {
    this.setState({ provider: event.target.value });
  }
  changeUniversitiesHandler(event) {
    this.setState({ universitiesInstitutions: event.target.value });
  }
  changeUrlHandler(event) {
    this.setState({ url: event.target.value });
  }
  changeVideoUrlHandler(event) {
    this.setState({ videoUrl: event.target.value });
  }
  cancel() {
    this.props.history.push("/courses");
  }
  render() {
    return (
      <div className="body1">
        <div className="form">
          <div className="title">Add Course</div>
          <br />
          <form action="">
            {/* <div className="input-container">
              <input
                placeholder="Id"
                name="Id"
                className="input"
                value={this.state.id}
                onChange={this.changeIdHandler}
              />
            </div> */}
            <div className="input-container">
              <input
                placeholder="Course Name"
                name="coursename"
                className="input"
                value={this.state.coursName}
                onChange={this.changeCoursNameHandler}
              />
            </div>
            <br />
            <div className="input-container">
              <input
                placeholder="Child Subject"
                name="childsubject"
                className="input"
                value={this.state.childSubject}
                onChange={this.changeChildSubjectHandler}
              />
            </div>
            <br />
            <div className="input-container">
              <input
                placeholder="Image Url"
                name="imageUrl"
                className="input"
                value={this.state.imageUrl}
                onChange={this.changeImageUrlHandler}
              />
            </div>
            <br />
            <div className="input-container">
              <input
                placeholder="Length"
                name="length"
                className="input"
                value={this.state.length}
                onChange={this.changeLengthHandler}
              />
            </div>
            <br />
            <div className="input-container">
              <input
                placeholder="Next Session Date"
                name="nextSessionDate"
                className="input"
                value={this.state.nextSessionDate}
                onChange={this.changeNextSessionDateHandler}
              />
            </div>
            <br />
            <div className="input-container">
              <input
                placeholder="Parent Subject"
                name="parentSubject"
                className="input"
                value={this.state.parentSubject}
                onChange={this.changeParentSubjectHandler}
              />
            </div>
            <br />
            <div className="input-container">
              <input
                placeholder="Provider"
                name="provider"
                className="input"
                value={this.state.provider}
                onChange={this.changeProviderHandler}
              />
            </div>
            <br />
            <div className="input-container">
              <input
                placeholder="Universities and Institutions"
                name="provider"
                className="input"
                value={this.state.universitiesInstitutions}
                onChange={this.changeUniversitiesHandler}
              />
            </div>
            <br />
            <div className="input-container">
              <input
                placeholder="Url"
                name="url"
                className="input"
                value={this.state.url}
                onChange={this.changeUrlHandler}
              />
            </div>
            <br />
            <div className="input-container">
              <input
                placeholder="Video Url"
                name="videoUrl"
                className="input"
                value={this.state.videoUrl}
                onChange={this.changeVideoUrlHandler}
              />
            </div>
            <button className="submit" onClick={this.saveCourse}>
              Add
            </button>
            <button
              className="submit"
              onClick={this.cancel.bind(this)}
              style={{ marginLeft: "10px" }}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddCourse;
