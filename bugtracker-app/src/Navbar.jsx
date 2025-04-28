import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <>
            <div className="nav">
                <NavLink to='/'>Upload Error Logs</NavLink>
                <NavLink to='/logs'>Find Logs</NavLink>
            </div>
        </>
    )
}

export default Navbar