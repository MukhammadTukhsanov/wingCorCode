import React from "react";
import { Envelope, Github, Linkedin, Twitter } from "react-bootstrap-icons";

const Cards = (props) => {
    const {type, imgName, title, text, twitLink, linkedLink, gitLink, mailLink, avatar} = props
    return(
        type === "cardWithImage"?
        <div style={{...style.initial, ...style.cardWithImage}}>
            <div style={{...style.cardWithImage__Header}}>
                <img src={require(`../images/${imgName}`)} alt="cardBody" style={{width: "100%"}} />
            </div>
            <div style={{...style.cardWithImage__Body}}>
                <h3 style={{...style.cardWithImage__Body_Title}}>{title}</h3>
                <p style={{...style.cardWithImage__Body_Text}}>{text}</p>
            </div>
        </div>:
        type === "cardWithIcon"?
        <div>

        </div>:
        type === "cardTeam"?
        <div style={{...style.cardTeam}}>
            <div style={{width: "100%", display: "flex", justifyContent: "center", backgroundImage: ""}}>
                <div style={{width: 130, height: 130, backgroundColor: "#fff", borderRadius: "50%", backgroundImage: `url(${avatar})`}}></div>
            </div>
            <div style={{margin: 32, gap: 16, display: "flex", flexDirection: "column", textAlign: "center"}}>
                <h4 style={{...style.name, letterSpacing: 1.2}}>Neeraj Singh</h4>
                <p style={{...style.subtitle, textTransform: "uppercase", fontSize: 10, fontWeight: "bold"}}>{text}</p>
            </div>
            <div style={{display: "flex", justifyContent: "center", gap: 16}}>
                <a style={{color: "#222"}} href={twitLink}>
                    <Twitter />
                </a>
                <a style={{color: "#222"}} href={linkedLink}>
                    <Linkedin />
                </a>
                <a style={{color: "#222"}} href={gitLink}>
                    <Github />
                </a>
                <a style={{color: "#222"}} href={mailLink}>
                    <Envelope />
                </a>
            </div>
        </div>:
        <div style={{...style.card, ...style.initial}}>
            <div style={{margin: 32, gap: 16, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <h4 style={{...style.name}}>Name N</h4>
                <p style={{...style.subtitle}}>Never thought I'd say this, but I don't even think about copy-pasting to ChatGPT anymore. It's all WING now!</p>
            </div>
        </div>
    )
}

const style={
    initial: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgb(246, 245, 244)',
        borderRadius: 16,
        overflow: 'hidden',
    },
    cardTeam: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgba(101, 157, 189, .2)',
        borderRadius: 16,
        padding: 40,
        overflow: 'hidden',
        width: 'max-content',
        maxWidth: 420
    },
    cardWithImage: {
        maxWidth: 523,
        flexDirection: 'column',
    },
    cardWithImage__Header: {
    },
    cardWithImage__Body: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        padding: 32,
    },
    cardWithImage__Body_Text: {
        fontSize: 18,
        fontFamily: '"Andika", sans-serif',
        color: '#565656',
        lineHeight: '1.75em'
    },
    cardWithImage__Body_Title: {
        fontSize: 24,
        color: '#222222',
        fontFamily: '"Andika", sans-serif',
    },
    card: {
        height: 320,
        width: 460,
    },
    name: {
        color: "#222222",
        fontWeight: 600,
        fontFamily: 'Andika, "sans-serif"',
        fontSize: 16
    },
    subtitle: {
        color: '#565656',
        fontSize: 16,
        lineHeight: '1.75em',
        fontWeight: 400,
        fontFamily: 'Andika, "sans-serif"',
    },
}

export default Cards