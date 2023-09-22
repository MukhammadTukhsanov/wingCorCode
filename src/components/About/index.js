import React from "react";
import Features from "../Features";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
import Solution from "../Solution";

const About = () =>{
    return(
        <>
            <Navbar active={"About"} />
            <Header />
            <Features/>
            <Solution />
            <Footer active={"About"} />
        </>
    )
}

export default About