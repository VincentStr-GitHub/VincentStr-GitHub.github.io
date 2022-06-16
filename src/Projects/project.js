import React from 'react';
import AllProjectsGrid from './allProjectsGrid';


const Project = (props) => {
    return (
        <div>
            <AllProjectsGrid modeStyle={props.modeStyle} />
        </div>
    )
}


export default Project