import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import LearnProgramming from "./Components/LearnProgramming";
import AddCourse from "./Components/AddCourse";
function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Header />
          <Switch>
            {" "}
            <Route path="/" exact component={LearnProgramming}></Route>
            <Route path="/courses" component={LearnProgramming}></Route>
            <Route path="/addcourse" component={AddCourse}></Route>
            <LearnProgramming />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
