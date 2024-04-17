import "./newProduct.css";
import Select from "react-select";
import moment from "moment";
import {useEffect,useState} from 'react';
import { publicRequest } from "../../requestMethods";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [clients, setClients] = useState([]);
  const [staffs, setStaffs] = useState([]);
  const [selectedStaff, setSelectedStaff]=useState(null)
  const handleStaffChange = (selectOption) =>{
    setSelectedStaff(selectOption);
    setInputs((prev) => {
      return {...prev, staffEmail: selectOption.value}
    })
  }
  const handleChange = (e) => {
    setInputs((prev) => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  useEffect(() => {
    const getClients = async () => {
      try {
        const res = await publicRequest.get("/clients");
        setClients(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getClients();
  }, []);

  useEffect(() => {
    const getStaffs = async () => {
      try {
        const res = await publicRequest.get("/users");
        setStaffs(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getStaffs();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await publicRequest.post("/shifts", {inputs});
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Shift</h1>
      <form className="addProductForm"> 
        <div className="addProductItem">
          <label>Location</label>
          <Select options={clients.map(client => ({value: client.address, label:client.address}))}
          onChange={(selectOption) => handleChange({target:{name:"location", value: selectOption.value}})}
          />
        </div>
        <div className="addProductItem">
          <label>Date And Time</label>
          <input name="date" type="text" placeholder="date" onChange={handleChange} />
          <input name="time" type="text" placeholder="10:00 AM - 12:00 PM" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Type</label>
          <input name="type" type="text" placeholder="AM/PM" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Client</label>
          <Select options={clients.map(client => ({value: client.fullname, label:client.fullname}))}
          onChange={(selectOption) => handleChange({target:{name:"client", value: selectOption.value}})}
          />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input name="duration" type="text" placeholder="3 hours" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Notes</label>
       <textarea name="notes" id="" cols="30" rows="10" onChange={handleChange}></textarea>
        </div>

        <div className="addProductItem">
          <label>Assign Shift</label>
          <Select options={staffs.map(staff => ({value: staff.email, label:staff.fullname}))}
          onChange={handleStaffChange}
          value={selectedStaff}
          placeholder="Select Staff"
          />
        </div>

        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton" onClick={handleClick}>Create</button>
      </form>
    </div>
  );
}
