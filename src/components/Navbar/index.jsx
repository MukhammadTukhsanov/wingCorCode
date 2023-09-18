import React from "react";

import logo from "../../icons/logo2.png";
import Button from "../Button";

import "./index.css"

const Navbar = () => {
    return(
        <div className="section">
            <div className="brand">
                <img src={logo} alt="logo" width={60} height={30}/>
                <h2>Wing</h2>
            </div>
            <div className="menu">
                <ul>
                    <li className="active">
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#">Operation Modes</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                    <li>
                        <Button bg={"primary"} text={"Getting Started"} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar