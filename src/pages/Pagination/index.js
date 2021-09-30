import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchDataAction } from "../../store/actions/FetchAction";
import { history } from "../../helpers";
import logo from "../../logo.svg";

const PaginationPage = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const loading = useSelector((state) => state.FetchData.loading);
  const data = useSelector((state) => state.FetchData.data);
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    dispatch(fetchDataAction());

    if (data) {
      for (const key in data) {
      }
    }
  }, []);

  const fetchData = () => {
    dispatch(fetchDataAction());
    setShow(!show);
  };
  const handlePageChange = (page) => {
    console.log(page);
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
          backgroundColor: "pink",
          width: 100,
          height: 20,
          margin: 20,
          borderRadius: 5,
          borderWidth: 5,
          borderStyle: "inset",
          textAlign: "center",
          justifyContent: "center",
          alignItem: "center",
          onFocus: "center",
        }}
        onClick={fetchData}
      >
        {loading ? "Loading ..." : "Fetch Data"}
      </div>

      {show && (
        <div style={{ display: "flex", flexDirection: "column", margin: 20 }}>
          {data && data.map((item, i) => <div>{item.title}</div>)}
          <button style={{ marginTop: 20 }}>Next</button>
        </div>
      )}
    </div>
  );
};

export default PaginationPage;
