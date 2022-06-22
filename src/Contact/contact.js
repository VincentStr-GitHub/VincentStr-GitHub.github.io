import React from "react"
import "./contactStyle.css"
import MailIcon from "./mailSvg"

const Contact = (props) => {
    return (
        <div style={props.modeStyle} className="contactPage">
            <div className="textContact">
                <h1>Contact me via E-mail or Phone</h1>
                <div id="mailBlock">
                    <h2>Email: vincentstriegel@gmail.com</h2>
                    <div className="mailIcon">  <a href="mailto:vincentstriegel@gmail.com">< MailIcon /></a> </div>
                </div>
                <h2>Phone: +49 152 22186057</h2>
            </div>
        </div>
    )
}

export default Contact