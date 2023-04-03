import "./widget.scss";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LinearProgress from "@mui/material/LinearProgress";

function Widget({ title, price, isMoney, icon, ispercent, color }) {
  return (
    <div className="widget" style={{ borderLeft: ` 3px solid ${color}` }}>
      <div className="left">
        <div className="title" style={{ color: color }}>
          {title}
        </div>
        <div className="counter" style={{ color: color }}>
          {isMoney && "$"}
          {price}
          {ispercent && "%"}
          {ispercent && (
            <LinearProgress
              variant="determinate"
              value={price}
              style={{
                color: `${color}`,
                borderRadius: `10px`,
                fontSize: `20px`,
              }}
            />
          )}
        </div>
      </div>
      <div className="right">
        <div>{icon}</div>
      </div>
    </div>
  );
}

export default Widget;
