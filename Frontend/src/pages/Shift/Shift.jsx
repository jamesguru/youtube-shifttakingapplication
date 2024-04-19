import "./shift.css";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
const Shift = () => {
  const [shift, setShift] = useState({});
  const location = useLocation();
  const [coords, setCoords] = useState({});
  const [accuracy, setAccuracy] = useState(0);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const shiftId = location.pathname.split("/")[2];

  useEffect(() => {
    const getShift = async () => {
      try {
        const res = await publicRequest("/shifts/find/" + shiftId);

        setShift(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getShift();
  }, [shiftId]);

  const handleClockIn = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords;
          const coords = { lat: latitude, lng: longitude };
          setCoords(coords);
          setAccuracy(accuracy);
          setCurrentTime(new Date().toLocaleTimeString());
        },

        (error) => {
          console.error("Error getting location", error);
        }
      );

      try {
        if (accuracy && coords && currentTime) {
          await publicRequest.put(`/shifts/clockin/${shiftId}`, {
            time: currentTime,
            coords,
            accuracy,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }else{
      console.error("Geolocation is not supported by this browser");
    }
  };

  const handleClockOut = async () => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords;
          const coords = { lat: latitude, lng: longitude };
          setCoords(coords);
          setAccuracy(accuracy);
          setCurrentTime(new Date().toLocaleTimeString());
        },

        (error) => {
          console.error("Error getting location", error);
        }
      );

      try {
        if (accuracy && coords && currentTime) {
          await publicRequest.put(`/shifts/clockout/${shiftId}`, {
            time: currentTime,
            coords,
            accuracy,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }else{
      console.error("Geolocation is not supported by this browser");
    }
  };

  return (
    <div className="shift-container">
      <div className="shift">
        <span className="myshifts_back">
          <Link to="/staffs">
            <FaArrowLeft /> Back
          </Link>
        </span>

        <div className="shift_details">
          <ul>
            <li>
              <strong>ID:</strong>
              {shift._id}
            </li>
            <li>
              <strong>Location:</strong>
              {shift.location}
            </li>
            <li>
              <strong>Date and Time:</strong>
              {shift.date} {shift.time}
            </li>

            <li>
              <strong>Type:</strong>
              {shift.type}
            </li>
            <li>
              <strong>Duration:</strong>
              {shift.duration}
            </li>

            <li>
              <strong>Client:</strong>
              {shift.client}
            </li>
            <li>
              <strong>Status:</strong>
              {shift.status}
            </li>
            <li>
              <strong>Notes:</strong>
              {shift.notes}
            </li>
          </ul>

          <div className="distance">
            <strong>Distance Covered</strong>
            <input type="Number" placeholder={shift.distance} />

            <div className="distance-update">
              <span>km</span>
              <button className="update-distance">Update</button>
            </div>
          </div>
        </div>

        <div className="shift_casenotes">
          <table>
            <tr>
              <th>Date/Time</th>
              <th>Case</th>
              <th>Notes</th>
            </tr>
            <tr>
              <td>3/27/2024, 3:30:13 PM</td>
              <td>Violence</td>
              <td>Violence occurred between the client and the neighbours.</td>
            </tr>
          </table>

          <div className="add_casenotes">
            <span>Add Casenotes</span>
            <FaPlus className="add_casenotes_icon" />
          </div>

          <div className="casenotes_inputs">
            <label htmlFor="">Case</label>
            <input type="text" />
            <label htmlFor="">Notes</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="shift_report_btn">Report</button>
        <div className="clockin_clockout">
          <button className="shift_clockin_btn">Clock In</button>
          <button className="shift_clockout_btn">Clock Out</button>
        </div>
      </div>
    </div>
  );
};

export default Shift;
