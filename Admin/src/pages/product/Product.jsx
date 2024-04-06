import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useState } from "react";
import {GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api'

const mapContainerStyle = {
    width: '70vw',
    height: '60vh'
  };

  const libraries=['places']

export default function Product() {
    

      const coords = {
        lat: -3.745,
        lng: -38.523
      };

    const [open, setOpen] = useState(false);

const handleCloseMap = () =>{
    setOpen(!open);
}


const { isLoaded, loadError } = useJsApiLoader({
    
    googleMapsApiKey: "AIzaSyCeQ-SAYDNxH277bfJbNjed0Mqkik8bofo",
    libraries
  });

  if(loadError){
    return <div>Error Loading map</div>
  }

  if(!isLoaded){
    return <div>Loading maps ...</div>
  }

  return (
    <div className="product">
     
        <div>
          <div className="productTitleContainer">
            <h3 className="productTitle">Shift: 728282919</h3>
            <Link to="/newshift">
              <button className="productAddButton">Create</button>
            </Link>
          </div>
          <div className="productTop">
            <div className="productTopLeft">
              <ul>
                <li>
                  <strong>ID:</strong>
                  123
                </li>
                <li>
                  <strong>Location: </strong>
                  <input
                    
                    name="location"
                    type="text"
                    className="input-edit"
                    placeholder="SYDNEY"
                  />
                </li>
                <li>
                  <strong>Date and Time: </strong>
                  <input
                   
                    name="date"
                    type="text"
                    className="input-edit"
                    placeholder="6/4/2024"
                  />
                  <input
                   
                    name="time"
                    type="text"
                    className="input-edit"
                    placeholder="08:00 AM"
                  />
                </li>
                <li>
                  <strong>Type:</strong>
                  <input
                  
                    name="type"
                    type="text"
                    className="input-edit"
                    placeholder="AM/PM"
                  />
                </li>
                <li>
                  <strong>Duration:</strong>
                  <input
                   
                    name="duration"
                    type="text"
                    className="input-edit"
                    placeholder="12 km"
                  />
                </li>
                <li>
                  <strong>Client:</strong>
                  <input
                  
                    name="client"
                    type="text"
                    className="input-edit"
                    placeholder="John doe"
                  />
                </li>
                <li>
                  <strong>Assigned To:</strong>
                 jameskagunga2023@gmail.com
                </li>
                <li>
                  <strong>Notes:</strong>
                  <textarea
                    className="shift-textarea"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="No breaks"
                  ></textarea>
                </li>

                <li>
                  <strong>Clock In:</strong>
                 
                    <div >
                      <span>Time:08:00 AM</span> |
                      <span>Accuracy:20 Metres</span> |
                      <button
                        className="showmap-btn"
                        onClick={handleCloseMap}
                      >
                        Show Map
                      </button>
                    </div>
                
                </li>
                <li>
                  <strong>Clock Out:</strong>
                  
                    <div >
                      <span>Time:08:00 AM</span> |
                      <span>Accuracy:20 Metres</span> |
                      <button
                        className="showmap-btn"
                        onClick={handleCloseMap}
                      >
                        Show Map
                      </button>
                    </div>
               
                </li>

                <button className="update-shift" >
                  Update
                </button>
              </ul>
            </div>
            <div className="productTopRight">   
            <strong>Distance covered(km): 12</strong>
              <div className="productInfoBottom">
              
              
                <strong>Filter</strong>
                <div className="date-range">
                  <strong>From</strong>
                  <input
                    type="date"
                  
                    placeholder="25/01/2024"
                    
                  />
                  <strong>to</strong>
                  <input
                    type="date"
                    placeholder="25/01/2025"
                   
                    
                  />
                  <button>Download PDF</button>
                </div>
                <table>
                  <tr>
                    <th>Date/Time</th>
                    <th>Case</th>
                    <th>Notes</th>
                  </tr>
                  <tr>
                      <td>08:00 Am</td>
                      <td>No event</td>
                      <td>N/A</td>
                    </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="productBottom">
            <form className="productForm">
              <div className="productFormLeft">
                <ul>
                  <li>
                    <strong>Shift Date:</strong>
                    6/4/2024
                  </li>
                  <li>
                    <strong>Shift Time:</strong>
                    08:00
                  </li>
                </ul>

                
                <br />
                <button
                  className="productAddButton"
                  
                >
                  Assign to Staff
                </button>
                
                  <button
                    className="cancel-shift"
                    
                  >
                    Cancel Shift
                  </button>
                
              </div>
            </form>
          </div>
          {open && (
            <div className="popup">
              <button className="popup-map-btn" onClick={handleCloseMap}>
                close
              </button>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={coords}
              >
                <Marker position={coords} />
              </GoogleMap>
            </div>
          )}
        </div>
   
    </div>

  );
}
