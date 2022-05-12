import React from 'react';
import "./style.css"
import "./homeProjects.css"


const HomeProject = (props) => {
 return(
    <div className = "projectContainer">
    <div className='grid-item'>
      
        <p>{props.project.title}</p>
        <img src={props.project.cover}></img>
    </div>
    </div>
 )
}
    

export default HomeProject