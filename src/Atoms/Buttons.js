import { Link } from "react-router-dom";
import './Buttons.css'

function Button(){
    return(
        <Link to="enquiry">
        <button className="btn">Enquiry</button>
        </Link>
    )
};
export default Button;