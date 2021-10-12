import React, { useState, useEffect } from 'react';
import './css/navbar.css'
import {Link} from 'react-router-dom';
import { Button } from './button';

const Navbar = () => {
    
    // useState To Handle Click Changes
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    useEffect(() => { 
        handleBtnShow()
    }, []);
    


    // Functions
    const handleClick = () => setClick(!click); // Function To Switch Click Value True To False or the same
    const handleMobileMenu = () => setClick(false); // Function To Handle Mobile Perspective
    const handleBtnShow = () => window.innerWidth <= 960 ? setButton(false) : setButton(true);


    // Events

    window.addEventListener("resize", handleBtnShow);


    return ( 
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Logo <i className="fas fa-code"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i style={{cursor: "pointer"}} className={(click) ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={(click) ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={handleMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={handleMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={handleMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-links-mobile" onClick={handleMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && 
                    <Button btnStyle="btn--outline">
                        SIGNUP    
                    </Button>
                    }
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;