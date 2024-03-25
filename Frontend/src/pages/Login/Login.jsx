import "./login.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <form action="">
          <h2> Login</h2>

          <label htmlFor="">Staff ID: </label>

          <div className="password">
            <input type="text" id="staffID" name="staffID" />
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
            />
          </div>

          <span className="login-btn">Login</span>

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
