import React from 'react';
import "./displayProjectsStyle.css"
import { Link } from 'react-router-dom';


const DisplayProjects = (props) => {
    return (

        <div className="projectContainer">
            <div className='grid-item'>
                <Link
                    to={`/projects/${props.project.title}`}
                    key={props.project.key}
                >

                    <p className='projectTitle'>{props.project.title}</p>
                    <img width={800} height={600}
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