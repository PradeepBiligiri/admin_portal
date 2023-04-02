import React from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">Container</div>
    </div>
  );
}

export default Home;
