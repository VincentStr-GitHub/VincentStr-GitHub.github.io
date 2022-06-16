import React from 'react';
import "./displayProjectsStyle.css"
import { Link, Outlet } from 'react-router-dom';
import ProjectPage from './projectPage';


const DisplayProjects = (props) => {
    return (

        <div className="projectContainer">
            <div className='grid-item'>
                <Link
                    to={`/projects/${props.project.title}`}
                    key={props.project.key}
                >

                    <p className='projectTitle'>{props.project.title}</p>
                    <img
                        className='coverImage'
                        alt={props.project.alt}
                        src={props.project.cover}>
                    </img>
                </Link>


             
            </div>
           
        </div>
    
    )
}


export default DisplayProjects