import React from 'react';
import AllProjects from './allprojects';


const Project = (props) => {
    return (
        <div>
           
            <AllProjects modeStyle={props.modeStyle} />
           
        </div>
    )
}


export default Project