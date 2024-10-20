import {Link} from 'react-router-dom'

import {useState} from 'react'

import { CgProfile } from "react-icons/cg";

import { MdShoppingCart } from "react-icons/md";

import { GiHamburgerMenu } from "react-icons/gi";

import './index.css'

const Navbar = () => {
    const [activated, setActiveStatus] = useState(false)
    return (
    <nav>
        <div className="navbar-container">
            <Link to="/" className="logo-link">
                <div className="header-logo-container">
                    <img className="home-logo" src="https://res.cloudinary.com/dt0mcvcq3/image/upload/v1729325287/Chaperonw/Logo_ts2cbh.jpg" alt="logo" />
                    <p className="header-logo-text">Chaperone</p>
                </div>
            </Link>
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
                <button className="hamburger-button" onClick={() => setActiveStatus(prev => !prev)}>
                    <GiHamburgerMenu className="hamburger-icon" />
                </button>
            </div>
        </div>
        {activated && <ul className="md-device-navbar">
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
        </ul>}
    </nav>
)}

export default Navbar