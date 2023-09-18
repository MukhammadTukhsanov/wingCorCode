import React from "react";
import Cards from "../Cards";
import SectionHeader from "../SectionHeader";

import "./index.css"

const Features = () => {
    return(
        <div className="features">
            <SectionHeader
                title={"features"}
                subtitle={"Streamline the way you use your device"}
                text={"Experience seamless Apple ecosystem integration, intelligent real-time web browsing, and smart context-aware assistance tailored to your needs."}
            />
            <div style={{display: "flex", gap: 32}}>
                <Cards
                    imgName={"1.jpg"}
                    type={"cardWithImage"}
                    title={"Deep Ecosystem Integration"}
                    text={"Activate WING instantly from anywhere on your device, including Siri. With its smart context-aware processing, it understands exactly what you need, and responds accordingly."}
                    />
                <Cards
                    imgName={"2.jpg"}
                    type={"cardWithImage"}
                    title={"Advanced Web Capabilities"}
                    text={"Delegate your web searches to COPILOT. It swiftly navigates through webpages and brings back accurate results, saving you time to focus on what matters most to you."}
                    />
                {/* <Cards /> */}
            </div>
        </div>
    )
}

export default Features