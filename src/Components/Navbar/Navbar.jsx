import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Blinkit Imager</p>
        </div>

        <div className="nav-login-cart">
          {
            localStorage.getItem('auth-token')
            ?<button onClick={ ()=>{localStorage.removeItem('auth-token'); window.location.replace('/')} }>Hi, Logout</button>
            :<Link to='/login'><button>Login</button></Link>
          }
        </div>
    </div>
  )
}

export default Navbar