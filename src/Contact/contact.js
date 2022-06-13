import React from "react"
import "./contactStyle.css"
import MailIcon from "./mailSvg"

const Contact = (props) =>{
    return (
        <div className="contactPage">
        <div className="textContact" style={props.modeStyle}>
           <h1>Contact</h1>
           <h2>Email: vincentstriegel@gmail.com</h2>
           <div className="mailIcon">  <a href="mailto:vincentstriegel@gmail.com">< MailIcon /></a> </div>
          
        </div>
        </div>
    )
}

export default Contact