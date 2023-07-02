import { Link } from "react-router-dom";
import "./Navbar.css"
import {  navItems } from "../Atoms/SubNavbar";
import Button from "../Atoms/Buttons";
import Dropdown from '../Molecules/Dropdowns'
import { useState } from "react";
import Services from "../Pages/Services";
import { GoChevronDown } from "react-icons/go";

function Navbar() {
    const[dropdown , setDropdown] =useState(false);


    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                     {/* ***Hear can change Company Logo ***/}
                    <img src="favicons/favicon.ico" alt="logo" />
                    <h4>ThoughtCrafters </h4>
                </Link>

                <ul className="nav-items">
                    {navItems.map(item => {
                        if(item.title==="Services" ){
                            return (
                                <li key={item.id} className={item.cName} onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                                    <Link to={item.path}><b><div className="nav-downicon">{item.title}<GoChevronDown /></div></b></Link>
                                 { dropdown &&  <Dropdown/>}
                                </li>
                            );
                        }
                        return (
                            <li key={item.id} className={item.cName}>
                                <Link to={item.path} ><b>{item.title}</b></Link>
                            </li>
                        );
                    })}
                </ul>
                <Button />
            </nav>
            
        </>
    )
};
export default Navbar;