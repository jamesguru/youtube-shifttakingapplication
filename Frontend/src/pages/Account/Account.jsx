import { useState } from "react";
import "./account.css";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import {publicRequest} from "../../requestMethods";
const Account = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const user = useSelector((state) => state.user);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = async () => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength || !hasUppercase || !hasSpecialCharacter) {
      setError(
        "Password must be at least 8 characters long, contain an uppercase letter, and have a special character."
      );
    } else {
      await publicRequest.put(`/users/${user.currentUser._id}`,{
        email:user.currentUser.email,
        password
      });
      
      
      setPassword("")
    }
  };


  const handleSubmit = (e) => {
  e.preventDefault();
  validatePassword();
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
          <input type="text" placeholder={user.currentUser.username} />
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder={user.currentUser.fullname} />
          <label htmlFor="">Email</label>
          <input type="text" placeholder={user.currentUser.email} />
          <label htmlFor="">Phone</label>
          <input type="text" placeholder={user.currentUser.phone} />
          <label htmlFor="">Address</label>
          <input type="text" placeholder={user.currentUser.address} />
          <label htmlFor="">Gender</label>
          <input type="text" placeholder={user.currentUser.gender} />
          <label htmlFor="">StaffID</label>
          <input type="text" placeholder={user.currentUser.staffID} />

          <button className="logout-myAccount">Logout</button>
        </div>

        <div className="myaccount-right">
          <label htmlFor="">Password</label>
         {error ? <span>{error}</span> : ""}
          <input type="text" placeholder="***************" onChange={(e) => setPassword(e.target.value)}/>
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
        
          <button className="update-myaccount" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
