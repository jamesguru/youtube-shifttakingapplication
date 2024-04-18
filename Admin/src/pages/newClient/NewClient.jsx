import { useState } from "react";
import { publicRequest } from "../../requestMethods";

export default function NewClient() {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [files, setFile] = useState([]);
  const [DOB, setDOB] = useState("");
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [desc, setDesc] = useState("");
  const [ndisNo, setNdisNo] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("fullname", fullname);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("gender", gender);
    formData.append("startdate", startdate);
    formData.append("enddate", enddate);
    formData.append("ndisNo", ndisNo);
    formData.append("desc", desc);
    formData.append("DOB", DOB);
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    try {
      await publicRequest.post("/clients", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Client</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input
            type="text"
            placeholder="john"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="John Smith"
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>

        <div className="newUserItem">
          <label>Phone</label>
          <input
            type="text"
            placeholder="+1 123 456 78"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input
            type="text"
            placeholder="New York | USA"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Plan Start Date</label>
          <input
            type="text"
            placeholder="25/04/2022"
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Plan End Date</label>
          <input
            type="text"
            placeholder="25/04/2028"
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="newUserItem">
          <label>NDIS NO</label>
          <input
            type="text"
            placeholder="5627923726"
            onChange={(e) => setNdisNo(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>DOB</label>
          <input
            type="text"
            placeholder="03/11/1965"
            onChange={(e) => setDOB(e.target.value)}
          />
        </div>

        <div className="newUserItem">
          <label>Notes</label>
          <textarea
            type="text"
            placeholder="A 78 old man living with eyesight disability"
            rows={10}
            cols={15}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={(e) => setGender(e.target.value)}
            />
            <label for="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={(e) => setGender(e.target.value)}
            />
            <label for="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="other"
              value="other"
              onChange={(e) => setGender(e.target.value)}
            />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Clients's Documents</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files)}
            multiple
          />
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton" onClick={handleClick}>
          Create
        </button>
      </form>
    </div>
  );
}
