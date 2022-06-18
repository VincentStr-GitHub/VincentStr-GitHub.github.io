import React from "react"
import CreateProjects from "./createProjects"
import "./allProjectsGridStyle.css"


const listProjects = [0,1,2,3]

function AllProjectsGrid(props) {
    return (
        <div> <h1 style={props.modeStyle} className="allprojectsHeader">Projects</h1>
        <div id="projects" style={props.modeStyle}>
          
            <div className="projectGrid">
                {CreateProjects(listProjects)}
            </div>
        </div>
        </div>
    )
}

export default AllProjectsGrid