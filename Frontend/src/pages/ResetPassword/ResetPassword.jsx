import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './resetpassword.css'

const ResetPassword = () => {
  return (
    <div>
        <Navbar />

        <div className="login-container">
            <form action="">
                <h2>Forgot Password</h2>
                <label htmlFor="">Email</label>
                <div className="password">
                    <input type="text" id="email" name='email'/>
                </div>
                <span className="login-btn">Submit</span>
            </form>
        </div>
        <Footer />
    </div>
  )
}

export default ResetPassword