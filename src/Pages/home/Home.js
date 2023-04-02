import React from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./Home.scss";
import Navbar from "../../Components/navbar/Navbar";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        Home container
      </div>
    </div>
  );
}

export default Home;
