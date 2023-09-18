import React from "react";

const Button = (props) => {
    const {text, bg} = props
    return(
        <div>
            <button
            type="button"
            style={{...style.button, backgroundColor: bg === "primary"? "#659DBD" : "#000"}}
            >
                {text}
            </button>
        </div>
    )
}

const style = {
    button: {
        border: 0,
        letterSpacing: 1,
        color: "#fff",
        borderRadius: 8,
        fontSize: 16,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
    }
}

export default Button