import { useState } from "react";
import "./account.css";
import { FaArrowLeft } from "react-icons/fa";
const Account = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword =() =>{
        setShowPassword(!showPassword);
    }
  return (
    <div className="myaccount">
      <span className="myshifts_back">
        <FaArrowLeft /> Back
      </span>

      <h2>My account</h2>
      <hr />

      <div className="myaccount-container">
        <div className="myaccount-left">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Alok" />
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="Alok Mondala" />
          <label htmlFor="">Email</label>
          <input type="text" placeholder="alokmondala199@gmail.com" />
          <label htmlFor="">Phone</label>
          <input type="text" placeholder="+6728383890" />
          <label htmlFor="">Address</label>
          <input type="text" placeholder="123 Smith Street, Sydney" />
          <label htmlFor="">Gender</label>
          <input type="text" placeholder="Male" />
          <label htmlFor="">StaffID</label>
          <input type="text" placeholder="AP7199" />

          <button className="logout-myAccount">Logout</button>
        </div>


        <div className="myaccount-right">
        <label htmlFor="">Password</label>
        <input type="text" placeholder="***************" />
        <span
              style={{
                display: "inline",
                cursor: "pointer",
                fontSize: "20px",
              }}
              onClick={handleTogglePassword}
            >
              {showPassword ? "👁️" : "🔒"}
            </span>
        <button className="update-myaccount">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
