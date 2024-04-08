import "./clientList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { clientsRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";

export default function ClientList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getShifts = async () => {
      try {
        setLoading(true);
        const res = await publicRequest.get("/clients");
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getShifts();
  }, []);
 

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "fullname", headerName: "Full Name", width: 150 },
    { field: "phone", headerName: "Phone No", width: 150 },
    { field: "address", headerName: "Address", width: 150 },
    { field: "gender", headerName: "Gender", width: 100 },
    { field: "startdate", headerName: "Start Contract", width: 200 },
    { field: "enddate", headerName: "End Contract", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/staff/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      {loading ? (
       <span>Loading ...</span>
      ) : (
        <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        getRowId={(row) => row._id}
        checkboxSelection
      />
      )}
    </div>
  );
}
