import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../icons/logo2.png"

import "./index.css"

const Footer = ({active}) => {
    const [activePage, setActivePage] = useState()
    const menuList = [
        {
            text: "About",
            link: "/"
        },
        {
            text: "Team",
            link: "/team"
        },
        {
            text: "Operation Modes",
            link: "#"
        },
        {
            text: "FAQ",
            link: "#"
        },
    ]
    useEffect(() => {
        setActivePage(active)
    })
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
                    {menuList.map(e => (
                        <li className={e.text === activePage ? "active" : ""}>
                            <Link to={e.link}>{e.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Footer