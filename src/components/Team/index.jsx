import React from "react";
import Cards from "../Cards";
import Footer from "../Footer";
import Navbar from "../Navbar";
import SectionHeader from "../SectionHeader";

import "./index.css"

const Team = () => {
    return(
        <>
            <Navbar active={"Team"} />
            <div className="team">
                <SectionHeader
                    subtitle={"Meet Our Team"}
                    text={"Wing team leads web and mobile development comunity through conference, blogs, open source, videos, books and meetups. We value open source, learning, remote work and open comunication."}
                />
                <div className="cardsBox">
                    <Cards
                        avatar={"https://randomuser.me/api/portraits/men/52.jpg"}
                        type={"cardTeam"}
                        text={"founder & ceo"}
                        twitLink={"#"}
                        linkedLink={"#"}
                        gitLink={"#"}
                        mailLink={"#"}
                        />
                    <Cards
                        avatar={"https://randomuser.me/api/portraits/men/45.jpg"}
                        type={"cardTeam"}
                        text={"founder & ceo"}
                        twitLink={"#"}
                        linkedLink={"#"}
                        gitLink={"#"}
                        mailLink={"#"}
                        />
                    <Cards
                        avatar={"https://randomuser.me/api/portraits/men/61.jpg"}
                        type={"cardTeam"}
                        text={"founder & ceo"}
                        twitLink={"#"}
                        linkedLink={"#"}
                        gitLink={"#"}
                        mailLink={"#"}
                        />
                    <Cards
                        avatar={"https://randomuser.me/api/portraits/men/22.jpg"}
                        type={"cardTeam"}
                        text={"founder & ceo"}
                        twitLink={"#"}
                        linkedLink={"#"}
                        gitLink={"#"}
                        mailLink={"#"}
                        />
                </div>
            </div>
            <Footer active={"Team"} />
        </>
    )
}

export default Team