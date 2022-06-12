import React from "react"
import "./PageNF_Style.css"
import SadIcon from "./sadIcon"

const PageNotFound = (props) =>{
    return (
        <div className="notFoundPage">
        <div className="textNF" style={props.modeStyle}>
           <h1> The page you are looking for does not exist<div className="sadIcon"><SadIcon /></div> </h1>
         
        </div>
        </div>
    )
}

export default PageNotFound