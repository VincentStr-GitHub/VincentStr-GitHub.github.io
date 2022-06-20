import React from "react";
import { useParams, Navigate } from "react-router-dom";
import "./projectPage_Style.css"

import PersonalProject from "./ProjectType/personalProject";
import SchoolProject from "./ProjectType/schoolProject";
import DisplayLogos from "./displayLogos";



const pJSON = require("../Projects.json")

const ProjectPage = (props) => {
    let params = useParams();
    const curObj = Object.values(pJSON.Projects).filter(user => user.Name === params.projectId)
    if (curObj.length === 0) {
        return <Navigate to="notFound" />
    }
    const curProject = curObj[0]
    let projectType = null
    let textStyle = null
    if(curProject.Type === "Personal"){
        projectType = <PersonalProject title={curProject.Name} preview ={curProject.Preview} />
    } else{
        projectType = <SchoolProject img={curProject.Preview} />
       textStyle="sText"
    }
    return (

        <div className="projectPageGrid" >
            <div style={props.modeStyle} className="project-item" id="item-Title"> <h1>{curProject.Name}</h1></div>
             {projectType}
            <div style={props.modeStyle} className="project-item" id={textStyle}> <p className="infoText">Text</p> </div>
            <div style={props.modeStyle} className="project-item" id="item-Tech"> TechUsed    {/* <DisplayLogos techArr = {curProject.TechUsed} */}  </div>
            <div style={props.modeStyle} className="project-item"> {curProject.DateCreated}</div>
        </div>
    )
}


export default ProjectPage