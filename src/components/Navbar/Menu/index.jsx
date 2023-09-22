import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Button";

const Menu = ({activePage}) => {
    const menuItems = [
        {
            text: 'About',
            to: '/'
        },
        {
            text: 'Team',
            to: '/team'
        },
        {
            text: 'Operation Modes',
            to: '/'
        },
        {
            text: 'FAQ',
            to: '/'
        },
        {
            text: 'Getting Started',
            btn: true,
            to: '/'
        }
    ]
    const [active, setActive] = useState()
    useEffect(() => {
            setActive(activePage)
    })
    return(
        <div className="menu">
            <ul id="menu">
                {menuItems.map(menuItem => (
                    <li key={menuItem.text}>
                        {menuItem.btn === true ? 
                        <Button bg={"primary"} text={menuItem.text} />:
                        <Link className={active === menuItem.text && !menuItem.btn ? "active" : ""} to={menuItem.to}>{menuItem.text}</Link>
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Menu