import './navbar.css';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">

            <div className="logo">
                <Link to="/">
                    <span className="text">AM SHIFTER</span>
                </Link>
            </div>

            <div className="signin">
                <Link to="/login">
                    <button className="login">Login</button>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Navbar