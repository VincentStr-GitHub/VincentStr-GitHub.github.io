import React from "react";
import CSS_Icon from "./TechLogos/css-Icon";
import HTML_Icon from "./TechLogos/html-Icon";
import Java_Icon from "./TechLogos/java-Icon";
import React_Icon from "./TechLogos/react-Icon";

const DisplayLogos = (props) => {
    let outDiv = "";
    for(let i = 0; i < props.techArr.length; i++){     
    const LogoComponent = require('./TechLogos/' + props.techArr[i].toLowerCase() + '-Icon.js');
     outDiv += <LogoComponent />
     console.log(<LogoComponent />)
    }
    console.log(outDiv)
    return (<div>{outDiv}</div>)

}

export default DisplayLogos