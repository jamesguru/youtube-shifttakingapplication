import "./shift.css";
import { DataGrid } from "@mui/x-data-grid";
import { FaArrowLeft } from "react-icons/fa";
const Shifts = () => {
  const rows = [
    {
      id: 1,
      date: "2024-03-21",
      time: "09:00 AM",
      location: "Office",
      type: "Morning Shift",
      duration: "8 hours",
      notes: "Regular shift",
    },
    {
      id: 2,
      date: "2024-03-21",
      time: "01:00 PM",
      location: "Warehouse",
      type: "Afternoon Shift",
      duration: "6 hours",
      notes: "Inventory check",
    },
    {
      id: 3,
      date: "2024-03-21",
      time: "07:00 PM",
      location: "Store",
      type: "Evening Shift",
      duration: "7 hours",
      notes: "Customer service",
    },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "date", headerName: "Date", width: 120 },
    { field: "time", headerName: "Time", width: 120 },
    { field: "location", headerName: "Location", width: 150 },
    { field: "type", headerName: "Type", width: 120 },
    { field: "duration", headerName: "Duration", width: 120 },
    { field: "notes", headerName: "Notes", width: 250 },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: () => <button className="view-button">View</button>,
    },
  ];
  return (
    <div className="myshifts">
      <span className="myshifts_back">
        <FaArrowLeft />
        Back
      </span>

      <div className="myshifts_top">
        <span className="myshifts_header">Name: John Doe</span>
        <span className="myshifts_header">All/Past Shifts</span>
      </div>

      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default Shifts;
