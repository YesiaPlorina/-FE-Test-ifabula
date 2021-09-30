import "./nextFuction.css";

import React, { useState } from "react";

import { history } from "../../helpers";
import logo from "../../logo.svg";

var listMember = [
  {
    name: "Lisa",
    group: "Blackpink",
  },
  {
    name: "Irene",
    group: "RedVelved",
  },
  {
    name: "Yena",
    group: "Izone",
  },
  {
    name: "Jennie",
    group: "Blackpink",
  },
];
const NextFunction = () => {
  const [name, setName] = useState(listMember[0]);

  const next = () => {
    for (const key in listMember) {
      if (listMember[key].name === name.name) {
        let number = Number(key) + 1;
        if (listMember[number]) {
          setName(listMember[number]);
        } else {
          setName(listMember[0]);
        }
      }
    }
  };
  return (
    <div
      style={{
        justifyContent: "center",
      }}
    >
      <div
        onClick={() => history.push("./dashboard")}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <img src={logo} style={{ height: 70 }} alt="logo" />
        <h3>Dashboard</h3>
      </div>
      <div
        style={{
          textAlign: "center",
          margin: 100,
        }}
      >
        <text style={{ fontSize: 20 }}>
          {name ? name.name + " " + name.group : "hello"}
        </text>
      </div>

      <div
        style={{
          textAlign: "center",
          margin: 100,
        }}
        onClick={next}
      >
        <button>Next</button>
      </div>
    </div>
  );
};

export default NextFunction;
