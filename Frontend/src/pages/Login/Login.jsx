import "./login.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [staffID, setStaffID] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    if (staffID && password) {
      try {
        await login(dispatch, { staffID, password });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Navbar />

      <div className="login-container">
        <form action="">
          <h2> Login</h2>

          <label htmlFor="">Staff ID: </label>

          <div className="password">
            <input
              type="text"
              id="staffID"
              name="staffID"
              onChange={(e) => setStaffID(e.target.value)}
            />
          </div>

          <label htmlFor="password">
            {" "}
            Password:
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
          </label>

          <div className="password">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <span className="login-btn" onClick={handleLogin}>
            Login
          </span>

          <Link to="/forgot-password">
            <span className="forgot-password">Forgot password</span>
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
