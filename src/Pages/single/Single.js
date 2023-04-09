import "./Single.scss";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import Chart from "../../Components/chart/Chart";
import List from "../../Components/table/Table";

function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="sigleContainer">
        <Navbar />
        <h2>User Details</h2>
        <div className="top">
          <div className="topLeft">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itmeTitle">Raj</h1>
                <div className="detailItem">
                  <span className="itemKey">Gender:</span>
                  <span className="ItemValue">Male</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="ItemValue">Raj.raj@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Mobile No:</span>
                  <span className="ItemValue">+91 9345698502</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="ItemValue">#34,3rd cross,XY nagar.</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="ItemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="topRight">
            <Chart aspect={3 / 1} title="Users Last 6 Months (Revenue)" />
          </div>
        </div>
        <div className="botton">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
}

export default Single;
