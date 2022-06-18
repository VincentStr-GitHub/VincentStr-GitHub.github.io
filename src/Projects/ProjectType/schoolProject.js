import React from 'react';

const SchoolProject = (props) => {
    const curImg = require("../images/" + props.img);
    return (
        <div className="project-item" id="item-Preview" style={{gridColumn: "1 /  2"}}>
            <img className="sImg" src={curImg} />
        </div>
    )
}


export default SchoolProject