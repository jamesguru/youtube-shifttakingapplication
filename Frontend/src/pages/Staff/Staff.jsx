import { FaUser } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./staff.css";
import moment from "moment";
import { useState, useEffect } from "react";
import { publicRequest } from "../../requestMethods";

const Staff = () => {
  const [profile, setProfile] = useState(false);
  const [data, setData] = useState([]);
  const [unassignedShifts, setUnassignedShifts] = useState([]);

  const handleProfile = () => {
    setProfile(!profile);
  };

  useEffect(() => {
    const getShifts = async () => {
      try {
        const res = await publicRequest.post("/shifts/me", {
          email: "alokmondala199@gmail.com",
        });
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getShifts();
  }, []);

  useEffect(() => {
    const getShifts = async () => {
      try {
        const res = await publicRequest.get("/shifts/unassign");
        setUnassignedShifts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getShifts();
  }, []);

  const formatDate = (date) => {
    let parsedDate = moment(date);

    // Format the parsed date to "Fri 23"
    let formattedDate = parsedDate.format("ddd DD");

    return formattedDate;
  };

  return (
    <div className="staff">
      <div className="stafftop">
        <span className="staff_shifts">All Shifts</span>

        <div className="staff_profile">
          <FaUser className="profile_icon" />
          <span className="staff_name" onClick={handleProfile}>
            Alok Mondala
          </span>

          {profile && (
            <div className="staff_account">
              <Link to="/myaccount">
                <span>My Account</span>
              </Link>
              <span>My Statements</span>
              <Link to="/myshifts">
                <span>My Shifts</span>
              </Link>
              <span>Report Incidence</span>
              <span>Logout</span>
            </div>
          )}
        </div>
      </div>

      <div className="staff_main">
        <h3 className="shift_header">My Shifts</h3>

        {data.map((shift, index) => (
          <div className={shift.status === "Pending" ? "staff_main_card" : "none"} key={index}>
            <div className="staff_main_card_date">
              <span>{formatDate(shift.date)}</span>
            </div>

            <div className="staff_main_card_info">
              <span className="shift-location-time">
                {shift.location}, {shift.time}
              </span>
              <span>Duration:{shift.duration}</span>
            </div>

            <div className="shift_status">
              <span>{shift.status}</span>
            </div>

            <div className="staff_main_card_options">
             <Link to={`/shift/${shift._id}`}>
             <AiOutlineEye size={25} className="view" />
             </Link>
            </div>
          </div>
        ))}

        <h3 className="shift_header">Bid Shifts</h3>
        {unassignedShifts.map((shift, index) => (
          <div className={shift.status === "Pending" ? "staff_main_card_unassigned" : "none"} key={index}>
            <div className="staff_main_card_date">
              <span>{formatDate(shift.date)}</span>
            </div>

            <div className="staff_main_card_info">
              <span className="shift-location-time">
                {shift.location}, {shift.time}
              </span>
              <span>Duration: {shift.duration}</span>
            </div>

            <div className="shift_status">
              <span>{shift.status}</span>
            </div>

            <div className="staff_main_card_options">
            <Link to={`/shift/${shift._id}`}>
             <AiOutlineEye size={25} className="view" />
             </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
