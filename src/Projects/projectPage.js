import React from "react";
import { useParams } from "react-router-dom";

const ProjectPage = () =>{
    let params = useParams();
    return(
        <div><h1>{params.projectId}</h1></div>
    )
}

export default ProjectPage