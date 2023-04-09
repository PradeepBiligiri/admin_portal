import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColums, userRows } from "../../Datatablesource";

function Datatable() {
  const actionColum = [
    {
      field: "action",
      headerName: "Action",
      width: 230,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <DataGrid
        rows={userRows}
        columns={userColums.concat(actionColum)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}

export default Datatable;
