import SignInPage from "./SignInPage";
import HomePage from "./HomePage";
import DashboardPage from "./DashboardPage";
import GradePage from "./GradePage";
import MissingGradeForm from "./MissingGradeForm";
import ContactsOfInstructorsPage from "./ContactsOfInstructorsPage";
import AssistancePage from "./AssistancePage";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="nav">
            <div className="items">
              <Link to="/">Login</Link>
            </div>
            <div className="items">
              <Link to="/HomePage">Home page</Link>
            </div>
            <div className="items">
              <Link to="/DashboardPage">Dashboard</Link>
            </div>
            <div className="items">
              <Link to="/GradePage">Grade Page</Link>
            </div>
            <div className="items">
              {" "}
              <Link to="/MissingGradeForm">MissingGradeForm</Link>
            </div>
            <div className="items">
              {" "}
              <Link to="/ContactsOfInstructorsPage">Contact Instructor</Link>
            </div>
            <div className="items">
              {" "}
              <Link to="/AssistancePage">Assistance</Link>
            </div>
          </div>

          <Routes>
            <Route exact path="/" element={<SignInPage />}></Route>
            <Route exact path="/HomePage" element={<HomePage />}></Route>
            <Route
              exact
              path="/DashboardPage"
              element={<DashboardPage />}
            ></Route>
            <Route
              exact
              path="/GradePage"
              element={<GradePage />}
            ></Route>
            <Route
              exact
              path="/MissingGradeForm"
              element={<MissingGradeForm />}
            ></Route>
            <Route
              exact
              path="/ContactsOfInstructorsPage"
              element={<ContactsOfInstructorsPage />}
            ></Route>
            <Route
              exact
              path="/AssistancePage"
              element={<AssistancePage />}
            ></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;












