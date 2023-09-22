import React from "react";

import logo from "../../icons/logo2.png";

import "./index.css"
import Menu from "./Menu";

const Navbar = ({active}) => {
    return(
        <div className="section">
            <div className="brand">
                <img src={logo} alt="logo" width={60} height={30}/>
                <h2>Wing</h2>
            </div>
            <Menu activePage={active} />
        </div>
    )
}

export default Navbar