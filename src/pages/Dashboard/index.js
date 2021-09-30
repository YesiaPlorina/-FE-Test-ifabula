import "./dashboard.css";

import React from "react";
import { history } from "../../helpers";
import logo from "../../logo.svg";

const Dashboard = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div onClick={() => history.push("/next")}>
          <p>Test 1 - 2</p>
        </div>
        <div onClick={() => history.push("/page")}>
          <p>Test 3 - 7</p>
        </div>
        <div onClick={() => history.push("/login")}>
          <p>Test 9</p>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Dashboard;
