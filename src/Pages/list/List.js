import "./List.scss";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import Datatable from "../../Components/datatable/Datatable";

function List() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <h2>Users</h2>
        <Datatable />
      </div>
    </div>
  );
}

export default List;
