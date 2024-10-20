import { CgProfile } from "react-icons/cg";

import { MdShoppingCart } from "react-icons/md";

import './index.css'

const Navbar = () => (
    <nav className="navbar-container">
        <div className="header-logo-container">
            <img src="https://res.cloudinary.com/dt0mcvcq3/image/upload/v1729325287/Chaperonw/Logo_ts2cbh.jpg" alt="logo" />
            <p className="header-logo-text">Chaperone</p>
        </div>
        <ul className="header-menu-options">
            <li className="header-menu-item">
                Home
            </li>
            <li className="header-menu-item">
                Plants & Pots
            </li>
            <li className="header-menu-item">
                Tools
            </li>
            <li className="header-menu-item">
                Our Services
            </li>
            <li className="header-menu-item">
                Blog
            </li>
            <li className="header-menu-item">
                Our Story
            </li>
            <li className="header-menu-item">
                FAQs
            </li>
        </ul>
        <div className="profile-cart-container">
            <div className="header-profile-or-cart-container">
                <CgProfile className="header-icon"/>
                <p className="header-profile-or-cart-para">My Profile</p>
            </div>
            <div className="header-profile-or-cart-container">
                <p className="cart-items-number">3</p>
                <MdShoppingCart className="header-icon"/>
                <p className="header-profile-or-cart-para">Cart</p>
            </div>
        </div>
    </nav>
)

export default Navbar