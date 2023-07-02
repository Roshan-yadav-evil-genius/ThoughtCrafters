import { Link } from "react-router-dom";
import { serviceDropdown } from "../Atoms/SubNavbar";
import './Dropdowns.css'
import { useState } from "react";


function Dropdown() {
    const[dropdown , setDropdown] = useState(false);
    return (
        <>
            <ul className={dropdown ? "services-submenu clicked" : "services-submenu" } onClick={()=>setDropdown(!dropdown)}>
                {serviceDropdown.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link to={item.path} className={item.cName} onClick={()=>setDropdown(false)}>
                                <div className="submenu-style"><h3>{item.category}</h3> {item.title} </div> 
                            </Link>

                        </li>
                    )
                })}

            </ul>
        </>
    )
};
export default Dropdown;