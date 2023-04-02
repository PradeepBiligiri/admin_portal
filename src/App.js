import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import List from "./Pages/list/List";
import Single from "./Pages/single/Single";
import New from "./Pages/new/New";

function App() {
  // let DashboardData = [
  //   {
  //     Title: "EARNINGS (MONTHLY)",
  //     Price: "40,000",
  //     ICON: <CalendarTodayIcon />,
  //     color: "blue",
  //   },
  //   {
  //     Title: "EARNINGS (ANNUAL)",
  //     Price: "215,000",
  //     ICON: <CurrencyRupeeIcon />,
  //     color: "green",
  //   },
  //   {
  //     Title: "TASKS",
  //     Price: "50%",
  //     ICON: <ListAltIcon />,
  //     color: "red",
  //   },
  //   {
  //     Title: "PENDING REQUESTS",
  //     Price: "18",
  //     ICON: <QuestionAnswerRoundedIcon />,
  //     color: "Yellow",
  //   },
  // ];
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
