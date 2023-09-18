import React from "react";

const SectionHeader = (props) => {
    const {title, subtitle, text} = props
    return(
        <div style={{...style.sectionHeader}}>
            <p style={{...style.sectionHeaderTitle}}>{title}</p>
            <h2 style={{...style.sectionHeaderSubtitle}}>{subtitle}</h2>
            <p style={{...style.sectionHeaderText}}>{text}</p>
        </div>
    )
}

const style = {
    sectionHeader: {
        display: 'flex',
        maxWidth: 768,
        marginTop: 64,
        marginBottom: 64,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 16
    },
    sectionHeaderTitle: {
        textTransform: 'uppercase',
        letterSpacing: '.25em',
        fontFamily: 'Andika, "sans-serif"',
        color: '#565656',
    },
    sectionHeaderSubtitle: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: 700,
        fontFamily: '"Andika", sans-serif',
        letterSpacing: 2
    },
    sectionHeaderText: {
        textAlign: 'center',
        lineHeight: 1.7,
        letterSpacing: 1.8,
        color: "#565656",
        fontWeight: 400
    }
}

export default SectionHeader