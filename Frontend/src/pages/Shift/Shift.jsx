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
  const [time, setTime] = useState(null);
  const [event, setEvent] = useState("");
  const [notes, setNotes] = useState("");
  const [distance, setDistance] = useState("");

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
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    } else {
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
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    } else {
      console.error("Geolocation is not supported by this browser");
    }
  };

  const handleAddNotes = async () => {
    const now = new Date();
    setTime(now.toLocaleString());

    if (time && event && notes) {
      try {
        await publicRequest.put(`/shifts/casenote/${shiftId}`, {
          event,
          notes,
          time,
        });

        setEvent("");
        setNotes("");
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const showStatus = (clockIn, clockOut) => {
    if (clockIn?.length === 0 && clockOut?.length === 0) {
      return "Pending";
    } else if (clockIn?.length > 0 && clockOut?.length === 0) {
      return "Ongoing";
    } else {
      return "Completed";
    }
  };

  const handleUpdateDistance = async (e) => {
    e.preventDefault();
    try {
      await publicRequest.put(`/shifts/${shiftId}`, {
        distance,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleBid= async() => {
    try {

      await publicRequest.put(`/shifts/assign/${shiftId}`,{
        location: shift.location,
        date:shift.date,
        time:shift.time,
        type:shift.type,
        duration:shift.duration,
        staffEmail:"alokmondala199@gmail.com",
        client:shift.client,
        notes:shift.notes

      })
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="shift-container">
      <div className="shift">
        <span className="myshifts_back">
          <Link to="/staff">
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
              {showStatus(shift.clockin, shift.clockout)}
            </li>
            <li>
              <strong>Notes:</strong>
              {shift.notes}
            </li>
          </ul>


         {shift.staffEmail ? '' :  <button className="update-bid" onClick={handleBid}>Bid</button>}

          <div className="distance">
            <strong>Distance Covered</strong>
            <input
              type="Number"
              placeholder={shift.distance}
              onChange={(e) => setDistance(e.target.value)}
            />

            <div className="distance-update">
              <span>km</span>
              <button
                className="update-distance"
                onClick={handleUpdateDistance}
              >
                Update
              </button>
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
          {shift.casenotes?.map((event,index) =>{
            <tr key={index}>
            <td>{event.time}</td>
            <td>{event.event}</td>
            <td>{event.notes}</td>
          </tr>
          })}
          </table>

          <div className="add_casenotes">
            <span>Add Casenotes</span>
            <FaPlus className="add_casenotes_icon" />
          </div>

          <div className="casenotes_inputs">
            <label htmlFor="">Case</label>
            <input type="text" onChange={(e) => setEvent(e.target.value)} />
            <label htmlFor="">Notes</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
            <button onClick={handleAddNotes}>Submit</button>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="shift_report_btn">Report</button>
        <div className="clockin_clockout">
          <button className="shift_clockin_btn" onClick={handleClockIn}>
            Clock In
          </button>
          <button className="shift_clockout_btn" onClick={handleClockOut}>
            Clock Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shift;
