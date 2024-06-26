import "./newUser.css";
import { useState } from "react";
import { publicRequest } from "../../requestMethods";
export default function NewUser() {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [files, setFile] = useState([]);

  const handleClick = async (e) => {
    e.preventDefault();
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numericChars = "0123456789";
    const specialChars = "!@#$%^&*()-=_+[]{}|;:,.<>?";
    // Combine all character sets
    const allChars =
      lowercaseChars + uppercaseChars + numericChars + specialChars;
    // Set the desired password length
    const passwordLength = 12; // You can adjust the length as needed
    // Generate the password
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }

    const staffid = Math.floor(Math.random() * 10000 + 1);
    const id = `AP${staffid}`;
    const formData = new FormData();
    formData.append("username", username);
    formData.append("fullname", fullname);
    formData.append("password", password);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("gender", gender);
    formData.append("staffID", id);

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    try {
      await publicRequest.post("/auth/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
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
          <label>Email</label>
          <input
            type="email"
            placeholder="john@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
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
          <label>Staff's Documents</label>
          <input
            type="file"
            multiple
            onChange={(e) => setFile(e.target.files)}
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
