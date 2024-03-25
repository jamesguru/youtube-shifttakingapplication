import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import './home.css';
const Home = () => {
  return (
    <div className="home">
      <Navbar />
        <div className="wrapper">
          <div className="gif">
            <img src="https://res.cloudinary.com/dap91fhxh/image/upload/v1702289234/analytics-3680198_1280-removebg-preview_sgpfid.png" alt="" />
          </div>
          <div className="desc">
            <span className="phrase">Empowering caregivers: <span className="blue-text">Compassion in Every Click</span></span>
            <button className="get-started">Get Started</button>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default Home