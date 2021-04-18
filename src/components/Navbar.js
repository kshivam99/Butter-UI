import React from 'react';
import Icon from "./butter.png";
import { FaBars, FaTimes} from 'react-icons/fa';
import { useState } from "react";

function Navbar() {
    const [showDropDownNav, setShowDropDownNav] = useState(false);

    function handleMenuIconClick(){
        setShowDropDownNav(prev=>!prev);
    }
    return (
        <div className="nav">
            <div className="menu-icon" onClick={()=>handleMenuIconClick()}>     
                {!showDropDownNav?<FaBars />:<FaTimes />}
            </div>
            <img className="nav-icon" src={Icon} alt=""/>

            <ul className={!showDropDownNav?"menu":"menu active"}>
                <li>
                    Home
                </li>
                <li>
                    Components
                </li>
                <li>
                    Documentation    
                </li>
            </ul>
        </div>
    )
}

export default Navbar

