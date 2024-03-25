import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./updatepassword.css";

const UpdatePassword = () => {
  return (
    <div>
      <Navbar />

      <div className="login-container">
        

        <form action="">
        <h2>Reset Password</h2>
          <label htmlFor=""> Enter your staff ID:</label>

          <div className="password">
            <input type="text" id="staffID" name="staffID" />
          </div>

          <label htmlFor="">Enter your new password</label>
          <div className="password">
            <input type="password" id="password" name="password" />
          </div>
          <span className="login-btn">Submit</span>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UpdatePassword;
