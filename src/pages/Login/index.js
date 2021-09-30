import React, { useState } from "react";

import { history } from "../../helpers";
import logo from "../../logo.svg";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const username = localStorage.getItem("username");

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (data.username && data.password) {
      localStorage.setItem("username", data.username);
      localStorage.setItem("password", data.password);
      window.location.reload(false);
    } else {
      alert("Please Complete data");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(false);
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
      <div style={{ display: "flex", flexDirection: "column", width: 200 }}>
        {username ? (
          <div style={{ margin: 10 }}>Selamat Datang {username}</div>
        ) : (
          <div>
            <div style={{ margin: 10 }}>
              <input
                className="text-input"
                type="text"
                value={data.username}
                name="username"
                onChange={handleInputChange}
                placeholder="Type your Username"
              />
            </div>
            <div style={{ margin: 10 }}>
              <input
                className="text-input"
                type="password"
                value={data.password}
                name="password"
                onChange={handleInputChange}
                placeholder="Type your password"
              />
            </div>
          </div>
        )}

        {username ? (
          <button style={{ margin: 10 }} onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button style={{ margin: 10 }} onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
