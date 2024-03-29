import "./shift.css";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
const Shift = () => {
  return (
    <div className="shift-container">
      <div className="shift">
        <span className="myshifts_back">
          <FaArrowLeft /> Back
        </span>

        <div className="shift_details">
          <ul>
            <li>
              <strong>ID:</strong>
              65e7963376a621ce77cfe984
            </li>
            <li>
              <strong>Location:</strong>
              123 Smith Street Sydney, NSW 2000 Australia
            </li>
            <li>
              <strong>Date and Time:</strong>
              15/03/2024 08:00 AM - 11: 00 AM
            </li>
            <li>
              <strong>Date and Time:</strong>
              15/03/2024 08:00 AM - 11: 00 AM
            </li>
            <li>
              <strong>Type:</strong>
              AM
            </li>
            <li>
              <strong>Duration:</strong>3 hours
            </li>

            <li>
              <strong>Client:</strong>
              Alok Mondala
            </li>
            <li>
              <strong>Status:</strong>
              Pending
            </li>
            <li>
              <strong>Notes:</strong>
              Make sure to clean room.
            </li>
          </ul>

          <div className="distance">
            <strong>Distance Covered</strong>
            <input type="Number" placeholder="10" />

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
