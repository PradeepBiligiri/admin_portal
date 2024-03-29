import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColums, userRows } from "../../Datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

function Datatable() {
  const [data, setData] = useState(userRows);
  const handleDelet = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const actionColum = [
    {
      field: "action",
      headerName: "Action",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelet(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="dataTableTitle">
        Add new Users
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={data}
        columns={userColums.concat(actionColum)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}

export default Datatable;
