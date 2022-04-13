import React from 'react';
import logo from '../../assets/logo.jpg'
import './Header.css';

const Header = () => {
    return (
        <div className='header d-flex justify-content-center align-items-center'>
            <div className='d-flex justify-content-between align-items-center' style={{ width: "84%" }}>

                {/* SITE NAME AND LOGO  */}
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={logo} alt="logo" />
                    <p className='siteName m-0 ms-3'>DIEGO's STUPID SHOP</p>
                </div>

                {/* NAVIGATION BAR  */}
                <div className='nav'>
                    <ul className='d-flex justify-content-center align-items-center'>
                        <a>New Arrival</a>
                        <a>Products</a>
                        <a>Cart</a>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Header;