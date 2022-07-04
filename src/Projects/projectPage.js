import React from "react";
import { useParams, Navigate } from "react-router-dom";
import "./projectPage_Style.css"

import PersonalProject from "./ProjectType/personalProject";
import SchoolProject from "./ProjectType/schoolProject";
import DisplayLogos from "./displayLogos";
import BList from "./bList";


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
    if (curProject.Type === "Personal") {
        projectType = <PersonalProject title={curProject.Name} preview={curProject.Preview} github={curProject.Github} />
    } else {

        projectType = <SchoolProject img={curProject.Preview} />
        textStyle = "sText"
    }
    return (

        <div className="projectPageGrid" >
            <div style={props.modeStyle} className="project-item" id="item-Title"> <h1>{curProject.Name}</h1></div>
            {projectType}
            <div style={props.modeStyle} className="project-item" id={textStyle}>
                <p className="infoText">{curProject.Heading}
                <ul className="objectives-List"><BList listArr={curProject.List} /></ul> 
               <p style={{textAlign:"left",padding:"10px"}}> {curProject.Description}</p> </p></div>
            <div style={props.modeStyle} className="project-item" id="item-Tech">  <b>Built With</b> <div id="logoSvgs"> <DisplayLogos techArr={curProject.TechUsed} /> </div>  </div>
            <div style={props.modeStyle} className="project-item" id="cDate"> <b>Date Created</b> {curProject.DateCreated}</div>
            <div style={props.modeStyle} className="project-item" id="cDate"> <b>Status</b>  {curProject.Status}</div>
        </div>
    )
}


export default ProjectPage