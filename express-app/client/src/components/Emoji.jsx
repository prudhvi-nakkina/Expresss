import React from 'react';

// mood picker component
const Emoji = props => {
    const { type,isSelected,handleOnClick }=props
    const mapLabelEmoji = {
        "happy":"😃",
        "sad":"🙁",
        "angry":"😡",
        "sleepy":"😴"
    }
    const borderColor={
        "happy":"#34B7F1",
        "sad":"black",
        "angry":"red",
        "sleepy":"blue"
    }
    return (
        <span
        className="emoji"
        role="img"
        aria-hidden={type ? "false" : "true"}
        style={isSelected ? { border:`2px solid ${borderColor[type]}`, borderRadius:"50%", cursor:'pointer', fontSize: '30px'} : {borderRadius:"50%", cursor:'pointer', fontSize: '30px'}}
        onClick={(event)=>{
            console.log("yass")
            handleOnClick(type)
        }}
    >
        {mapLabelEmoji[type]}
    </span>
    )
};
export default Emoji;