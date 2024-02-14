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

        {/* <ul className='nav-menu'>
            <li>All</li>
            <li>Latest</li>
            <li>Acrylic</li>
            <li>Valentine's Special</li>
        </ul> */}

        <div className="nav-login-cart">
          {
            localStorage.getItem('auth-token')
            ?<button onClick={ ()=>{localStorage.removeItem('auth-token'); window.location.replace('/')} }>Logout</button>
            :<Link to='/login'><button>Login</button></Link>
          }
            {/* <img src={cart_icon} alt="" /> */}
            {/* <div className="nav-cart-count">2</div> */}
        </div>
    </div>
  )
}

export default Navbar