import React from "react";

import banner from "../images/header.png"

import "./index.css"

const Header = () => {
    return(
        <div className="framer">
            <div className="header">
                <h1>
                    Supercharge your workflow and save time with WING
                </h1>
            </div>
            <img src={banner} alt="banner"  />
        </div>
    )
}

export default Header