// import {GoPlusSmall} from 'react-icons/fa';
import './navbar.css'
const NavBar = ()=>{

    return <>
        <div className="shipping_banner">
            <div className="banner_content">
                <button>
                    <p>
                    Enjoy complimentary standard shipping on all orders.
                    </p>
                    +
                </button>
            </div>
        </div>
        <nav className="navbar">
            <div className="navbar container">
                <div>
                    <a href="https://twitter.com/">Shop</a>
                    <a href="https://twitter.com/">Read</a>
                    <a href="https://twitter.com/">Store</a>
                    <a href="https://twitter.com/">Search</a>
                </div>
                <div>
                <a href="https://twitter.com/">Login</a>
                <a href="https://twitter.com/">Cart</a>
                </div>
            </div>
        </nav>
    </>;
}
export default NavBar;