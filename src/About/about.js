import React from "react"
import "./aboutStyle.css"
const About = (props) => {
    return (
        <div style={props.modeStyle} className="aboutPage">
            <div className="textAbout" >
                <h1>  <b>Hi, <br /> I’m Vincent. </b> </h1>
                <p>
                   
                    I am currently in my 3rd semester studying Computer Science at the Technische Hochschule Ulm.<br /> <br />

                    I am passionate about everything computer related, from the internal hardware to the software that makes it all work. 
                    My focus lies with writing code to create programs that solve problems and make life easier. 
                    I’ve worked the longest with writing JavaScript code, and using frameworks such as React and Angular, but I’ve also used Java and SQL, 
                    especially for my studies. Learning new things is always facisting, I want to continue to expand my knowledge with new 
                    languages and technologies but also deepen my understanding of the ones I already have experience with.
                </p>
            </div>
        </div>
    )
}

export default About