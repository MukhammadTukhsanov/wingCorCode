import React from "react";
import SectionHeader from "../SectionHeader";

import "./index.css"

const Solution = () => {
    return(
        <div className="solution">
            <SectionHeader
                title={"WHITE LABEL WEBSITE BUILDER"}
                subtitle={"Scalable solution - perfect for small businesses and agencies alike"}
                text={"Our white label website builder comes packed with everything you would need to create great websites"}
            />
            <div className="solution__banner">
                <img src={require("../images/banner.png")} alt="banner" />
            </div>
        </div>
    )
}

export default Solution