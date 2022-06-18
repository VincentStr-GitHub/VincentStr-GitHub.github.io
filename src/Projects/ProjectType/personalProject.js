import React from 'react';
const GitHubLogo = require("../images/GitHub-Mark-64px.png")
import ArrowIcon from "../svgs/arrowIcon";
const PersonalProject = (props) => {
    return (
    
          <div className="project-item" id="item-Preview">
                <div class="iframe-loading"><iframe className="project-preview" title={props.title + "Project Preview"} src={props.preview}></iframe></div>
                <div className="project-links"> <a href=""><img src={GitHubLogo} /></a> <div id="codeIcon"><ArrowIcon /></div> </div>
            </div>

    )
}


export default PersonalProject