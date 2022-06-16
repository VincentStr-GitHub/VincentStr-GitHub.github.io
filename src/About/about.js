import React from "react"
import "./aboutStyle.css"
const About = (props) =>{
    return (
        <div className="aboutPage">
        <div className="textAbout" style={props.modeStyle}>
            <p> 
                Hello, <br /> I am Vincent Strigel, a Computer Science studtent at the Technische Hochschule Ulm, currently in my 2nd semseter. 
            </p>
        </div>
        </div>
    )
}

export default About