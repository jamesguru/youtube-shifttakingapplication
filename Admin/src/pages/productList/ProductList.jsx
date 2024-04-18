import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { shiftRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import "jspdf-autotable";
import jsPDF from "jspdf";

export default function ProductList() {
  const [originaldata, setOriginalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [shiftID, setShiftID] = useState(null);

  // Filter state variables 

  const [filterStaffEmail, setFilterStaffEmail] = useState("");
  const [filterClient, setFilterClient] = useState("");
  const [filterStartDate, setFilterStartDate] = useState("");
  const [filterEndDate, setFilterEndDate] = useState("");
  const [filterLocation, setFilterLocation] = useState("");



  useEffect(() => {
    const getShifts = async () => {
      try {
        setLoading(true);
        const res = await publicRequest.get("/shifts");
        setOriginalData(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getShifts();
  }, []);

  useEffect(() => {
    // Filter the data locally based on the filter values
    const filteredData = originaldata.filter((item) => {
      const matchesStaffEmail =
        !filterStaffEmail ||
        (item.staffEmail &&
          item.staffEmail.toLowerCase().includes(filterStaffEmail.toLowerCase()));
      const matchesClient =
        !filterClient ||
        (item.client &&
          item.client.toLowerCase().includes(filterClient.toLowerCase()));
      const matchesLocation =
        !filterLocation ||
        (item.location &&
          item.location.toLowerCase().includes(filterLocation.toLowerCase()));
  
      // Check if the date is within the specified range
      const startDate = filterStartDate ? parseDate(filterStartDate) : null;
      const endDate = filterEndDate ? parseDate(filterEndDate) : null;
      const itemDate = parseDate(item.date);
      const matchesDate =
        (!startDate || itemDate >= startDate) && (!endDate || itemDate <= endDate);
  
      return matchesStaffEmail && matchesClient && matchesLocation && matchesDate;
    });
  
    setFilteredData(filteredData);
  }, [
    filterStaffEmail,
    filterClient,
    filterStartDate,
    filterEndDate,
    filterLocation,
    originaldata,
  ]);

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return `20${year}-${month}-${day}`;
  };
 
  const handleDelete = () => {
    const id = 1;
    
  };


  const generatePDF = () => {
    const pdf = new jsPDF("landscape");
    // Set the title of the document
    pdf.text("Aim Tasker Shifts Report", 15, 15);

    // Set column headers
    const headers = [
      "ID",
      "DATE",
      "TIME",
      "LOCATION",
      "CLIENT",
      "DURATION",
      "STAFF",
      "DISTANCE",
    ];

    // Set data for the table
    const tableData = filteredData.map((item) => [
      item._id,
      item.date,
      item.time,
      item.location,
      item.client,
      item.duration,
      item.staffEmail,
      item?.distance,
    ]);

    // Auto page breaks and table styling
    pdf.autoTable({
      startY: 20,
      head: [headers],
      body: tableData,
      styles: {
        fontSize: 10,
        cellWidth: "wrap",
      },
      margin: { top: 20 },
    });

    // Save the PDF with a specific name
    pdf.save("shifts_report.pdf");
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
    <h4 className="filter-header">Filters</h4>
      <div className="filters">
        <div className="filter-item">
          <label htmlFor="">Staff Email:</label>
          <input
          type="text"
          placeholder="joedoe@gmail.com"
          value={filterStaffEmail}
          onChange={(e) => setFilterStaffEmail(e.target.value)}
        />
        </div>
        <div className="filter-item">
        <label>Client:</label>
        <input
          type="text"
          placeholder="Joe"
          value={filterClient}
          onChange={(e) => setFilterClient(e.target.value)}
        />
        </div>
        <div className="filter-item">
          <label>Start Date:</label>
          <input
            type="text"
            value={filterStartDate}
            onChange={(e) => setFilterStartDate(e.target.value)}
            placeholder="25/01/2024"
          />
        </div>
        <div className="filter-item">
          <label>End Date:</label>
          <input
            type="text"
            value={filterEndDate}
            onChange={(e) => setFilterEndDate(e.target.value)}
            placeholder="25/02/2024"
          />
        </div>
        <div className="filter-item">
          <label htmlFor="">Location:</label>
        <input
          type="text"
          placeholder="Sydney"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
        />
        </div>
        <button onClick={generatePDF}>Generate Pdf</button>
      </div>
      {loading ? (
       <span>Loading ...</span>
      ) : (
        <DataGrid
        rows={filteredData}
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
