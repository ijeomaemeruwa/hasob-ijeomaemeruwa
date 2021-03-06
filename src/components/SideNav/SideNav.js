import React from 'react';
import './sidenav.css';
import CustomButton from '../CustomButton/CustomButton';
import {BsFilter} from 'react-icons/bs';

const SideNav = () => {
    return (
    <>
    <aside className="sidenav">
    <div className="sidenav_container">

    <div className="sidenav_button_container">
    <CustomButton sidenav__btn><BsFilter/> Departments</CustomButton>
    </div>

    <div className="sidenav__menu">
    <div>
        <h5>All Categories</h5>
        <p>Ecommerce patterns</p>
    </div>
    <div className="sidenav__list">
    <ul>
        <li>Electronics</li>
        <li>Cell Phones and Smartphones</li>
        <li>Cell Phone Accessories</li>
        <li>Cell Phone Gadgets</li>
        <li>Applications</li>
        <li>Smart Watches</li>
    </ul>
    </div>
    </div>
  </div>
  </aside>      
    </>
    )
}

export default SideNav;
