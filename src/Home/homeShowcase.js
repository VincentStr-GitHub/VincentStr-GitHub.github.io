import React from 'react';
import "./aboutStyle.css"
import HomeProject from "./homeProject"

const projectJSON = require("../Projects.json")

const MainProjects = (pArr) => {
    const outArr =[]
    for(let i = 0; i < pArr.length; i++){
        const curProject = projectJSON.Projects[pArr[i]];
        let curImg; 
        try {
            curImg = require("./images/"+ curProject.CoverImg + ".jpg");
           
          } catch (error) {
            curImg = "";
          }

        outArr.push(<HomeProject key={curProject.ID} project = {{title: curProject.Name, cover: curImg, alt: curProject.CoverALT} }/>)
    }
    console.log(outArr)
    return (outArr)
}

const mainPArr = [0,1,2]

function Projects(props) {
    return (
        <div>  <h1 style={props.modeStyle} className="projectsHeader">Projects</h1>
        <div id="projects" style={props.modeStyle}>
          
            <div className="grid">
                {MainProjects(mainPArr)}
            </div>
        </div>
        </div>
    )
}

export default Projects