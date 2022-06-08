import React from 'react';
import AllProjects from './allprojects';


const Project = (props) => {
    return (
        <div>
            <h1> Projects</h1>
            <AllProjects modeStyle={props.modeStyle} />
           
        </div>
    )
}


export default Project