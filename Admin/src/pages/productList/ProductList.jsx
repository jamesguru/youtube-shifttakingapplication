import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { shiftRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";

export default function ProductList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getShifts = async () => {
      try {
        setLoading(true);
        const res = await publicRequest.get("/shifts");
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getShifts();
  }, []);
 
  const handleDelete = () => {
    const id = 1;
    setData(data.filter((item) => item._id !== id));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "location", headerName: "Location", width: 150 },
    { field: "date", headerName: "Date", width: 150 },
    { field: "time", headerName: "Time", width: 150 },
    { field: "duration", headerName: "Duration", width: 150 },
    { field: "client", headerName: "Client", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/shift/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete()}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
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
