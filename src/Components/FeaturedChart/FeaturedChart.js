import "./FeaturedChart.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function FeaturedChart() {
  return (
    <div className="Featured">
      <div className="top">
        <h1 className="title">Revenue Sources</h1>
        <MoreVertIcon fontSize="small" />
      </div>

      <div className="bottom">
        <div className="featuredBar">
          <CircularProgressbarWithChildren
            value={80}
            text={`${80}%`}
            strokeWidth={5}
          ></CircularProgressbarWithChildren>
        </div>
        <p className="title">Total Revenue</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous Transaction processing. Last Payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemtitle">Target</div>
            <div className="itemResult positive">
              <ArrowDropUpIcon fontSize="small" />
              <div className="resultAmount">$25.6K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">Last Week</div>
            <div className="itemResult negetive">
              <ArrowDropDownIcon fontSize="small" />
              <div className="resultAmount">$12.4K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">Last Month</div>
            <div className="itemResult negetive">
              <ArrowDropDownIcon fontSize="small" />
              <div className="resultAmount">$11.2K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedChart;
