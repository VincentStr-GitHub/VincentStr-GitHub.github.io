import React from "react";
import DisplayProjects from "./displayProjects";

const projectJSON = require("../Projects.json")

const CreateProjects = (pArr) => {
    const outArr =[]
    for(let i = 0; i < pArr.length; i++){
        const curProject = projectJSON.Projects[pArr[i]];
        let curImg; 
        try {
            curImg = require("./images/"+ curProject.CoverImg + ".webp");
           
          } catch (error) {
            curImg = "";
          }

        outArr.push(<DisplayProjects key={curProject.ID} project = {{title: curProject.Name, cover: curImg, alt: curProject.CoverALT} }/>)
    }
    return (outArr)
}

export default CreateProjects