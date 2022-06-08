import React from "react"
import "./contactStyle.css"
const Contact = (props) =>{
    return (
        <div className="contactPage">
        <div className="textContact" style={props.modeStyle}>
           <h1>Contact</h1>
           <h2>Email: vincentstriegel@gmail.com</h2>
        </div>
        </div>
    )
}

export default Contact