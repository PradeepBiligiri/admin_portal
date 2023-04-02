import React from "react";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin Dashboard</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <span>Dashbpard</span>
          </li>
          <li>
            <span>Dashbpard</span>
          </li>
          <li>
            <span>Dashbpard</span>
          </li>
          <li>
            <span>Dashbpard</span>
          </li>
        </ul>
      </div>
      <div className="bottom">Color option</div>
    </div>
  );
}

export default Sidebar;
