import React from 'react';
import "./displayProjectsStyle.css"


const DisplayProjects = (props) => {
 return(
 
    <div className = "projectContainer">
    <div className='grid-item'>
      
        <p>{props.project.title}</p>
        <img  className='coverImage' alt={props.project.alt} src={props.project.cover}></img>
    </div>
    </div>
  
 )
}
    

export default DisplayProjects