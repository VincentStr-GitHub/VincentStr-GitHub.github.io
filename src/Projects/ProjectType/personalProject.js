import React from 'react';
const GitHubLogo = require("../images/GitHub-Mark-64px.png")

import ArrowIcon from "../svgs/arrowIcon";


const PersonalProject = (props) => {
    return (
    
          <div className="project-item" id="item-Preview">
                <div class="iframe-loading"><iframe className="project-preview" title={props.title + "Project Preview"} src={props.preview}><div className="loader"/></iframe></div>
                <div className="project-links"> <a href={props.github}><img src={GitHubLogo} /></a> <div id="codeIcon"> <a href={props.preview}><ArrowIcon /> </a></div> </div>
            </div>

    )
}


export default PersonalProject