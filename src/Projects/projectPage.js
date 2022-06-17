import React from "react";
import { useParams, Navigate } from "react-router-dom";
import "./projectPage_Style.css"

const pJSON = require("../Projects.json")

const ProjectPage = (props) => {
    let params = useParams();
    const curObj = Object.values(pJSON.Projects).filter(user => user.Name === params.projectId)
    if (curObj.length === 0) {
        return <Navigate to="notFound" />
    }
    const curProject = curObj[0]
    return (

        <div className="projectPageGrid" style={props.modeStyle}>
            <div className="project-item" id="item-Title"> <h1>{curProject.Name}</h1></div>
            <div className="project-item" id="item-Preview"> <iframe className="project-preview" title={curProject.name + "Project Preview"} src= {curProject.Preview}></iframe></div>
            <div className="project-item"> <p>Text</p> </div>
            <div className="project-item" id="item-Tech"> TechUsed </div>
            <div className="project-item"> {curProject.DateCreated}</div>
        </div>
    )
}


export default ProjectPage