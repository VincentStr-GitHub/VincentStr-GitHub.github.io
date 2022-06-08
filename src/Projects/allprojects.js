import React from "react"
import CreateProjects from "./createProjects"
import "./allProjectsStyle.css"


const listProjects = [0,1,2]

function AllProjects(props) {
    return (
        <div> <h1 style={props.modeStyle} className="projectsHeader">Projects</h1>
        <div id="projects" style={props.modeStyle}>
          
            <div className="projectGrid">
                {CreateProjects(listProjects)}
            </div>
        </div>
        </div>
    )
}

export default AllProjects