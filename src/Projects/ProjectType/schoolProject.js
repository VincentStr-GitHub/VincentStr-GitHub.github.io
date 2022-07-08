import React from 'react';

const SchoolProject = (props) => {
    const curImg = require("../images/" + props.img);
    return (
        <div className="project-item" id="item-Preview" >
            <img className="sImg" src={curImg} />
        </div>
    )
}


export default SchoolProject