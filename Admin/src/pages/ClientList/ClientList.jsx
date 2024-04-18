import "./clientList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import "jspdf-autotable";
import jsPDF from "jspdf";

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

  const generatePDF = () => {
    const pdf = new jsPDF("landscape");

    // Set the title of the document
    pdf.text("AM SHIFTER Clients REPORT", 15, 15);

    // set column headers

    const headers = ["ID", "Full Name", "PHONE", "ADDRESS", "GENDER", "NOTE"];

    // set data for the table

    const tabledata = data.map((item) => [
      item._id,
      item.fullname,
      item.phone,
      item.address,
      item.gender,
      item.desc,
    ]);

    // Auto page breaks and table styling

    pdf.autoTable({
      startY: 20,
      head: [headers],
      body: tabledata,
      styles: {
        fontSize: 10,
        cellWidth: "wrap",
      },

      margin: { top: 20 },
    });

    pdf.save("clients_reports.pdf")
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
            <Link to={"/client/" + params.row._id}>
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
      <button className="generatepdf" onClick={generatePDF}>Generate Pdf</button>
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
