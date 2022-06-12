import React from 'react';
import "./mainImageStyle.css"

const Logo = require("./Logo.jpg")

const MainImage = () => {
    
        return (
            <div className="homePageImageBack">
                <img width='800' height='600px' alt="Letter V and letter S pushed together" id="homepageImage" src={Logo} ></img>
            </div>
        )
    
}
    

export default MainImage