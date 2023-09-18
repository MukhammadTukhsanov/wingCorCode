import React from "react";

import logo from "../../icons/logo2.png"

import "./index.css"

const Footer = () => {
    return(
        <div className={"footer"}>            
            <div className="left">
                <div className={"logo"}>
                    <img src={logo} alt="logo" width={60} height={30}/>
                    <h2>Wing</h2>
                </div>
                <p>© 2023. All rights reserved.</p>
                <p>Crafted with ❤️ by Mukhammad Tukhsanov.</p>
            </div>
            <div className="right">
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
                </ul>
            </div>
        </div>
    )
}

export default Footer