import React from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./Home.scss";
import Navbar from "../../Components/navbar/Navbar";
import Widget from "../../Components/Widget/Widget";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import FeaturedChart from "../../Components/FeaturedChart/FeaturedChart";
import Chart from "../../Components/chart/Chart";
function Home() {
  let data = [
    {
      title: "Earnings (Monthly)",
      price: 40000,
      isMoney: true,
      icon: (
        <CalendarTodayIcon
          className="icon"
          style={{ fontSize: `45px`, color: `lightgray` }}
        />
      ),
      ispercent: false,
      color: "blue",
    },
    {
      title: "EARNINGS(ANNUAL)",
      price: 215000,
      isMoney: true,
      icon: (
        <AttachMoneyOutlinedIcon
          className="icon"
          style={{ fontSize: `45px`, color: `lightgray` }}
        />
      ),
      ispercent: false,
      color: "green",
    },
    {
      title: "TASKS",
      price: 50,
      isMoney: false,
      icon: (
        <ListAltOutlinedIcon
          className="icon"
          style={{ fontSize: `45px`, color: `lightgray` }}
        />
      ),
      ispercent: true,
      color: "lightseagreen",
    },
    {
      title: "PENDING REQUESTS",
      price: 18,
      isMoney: false,
      icon: (
        <QuestionAnswerRoundedIcon
          className="icon"
          style={{ fontSize: `45px`, color: `lightgray` }}
        />
      ),
      ispercent: false,
      color: "yellow",
    },
  ];
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <h2>Dashboard</h2>
        <div className="widgets">
          {data.map((data) => {
            return (
              <Widget
                title={data.title}
                price={data.price}
                isMoney={data.isMoney}
                icon={data.icon}
                ispercent={data.ispercent}
                color={data.color}
              />
            );
          })}
        </div>
        <div className="charts">
          <FeaturedChart />
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default Home;
