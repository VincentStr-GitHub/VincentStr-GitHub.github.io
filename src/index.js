import "./style.css"
import "./hamNavStyle.css"
import Home from "./Home/home";
import Footer from "./Footer/footer";
import Contact from "./Contact/contact";
import Project from "./Projects/project";
import About from "./About/about";
import PageNotFound from "./PageNotFound/pageNF";
import ProjectPage from "./Projects/projectPage";

import React, { useState, useEffect, Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';


const GitHubLogo = require("./projects/images/GitHub-Mark-Light-64px.png")

const lightStyle = {
    color: "black",
    backgroundColor: "rgb(240, 244, 245)",
    transition: ".7s"
}

const darkStyle = {
    color: "white",
    backgroundColor: "rgba(22,22,22,255)",
    transition: ".7s",
}

function App() {
    const [colorScheme, setColorScheme] = useState({
        status: true,
        text: "Light Mode",
        style: lightStyle
    })

    const unCheck = () => {
        document.querySelector('#hamCheckBox').checked = false;
    }

    const handleClick = () => {
        const curStatus = !(colorScheme.status)
        colorScheme.status ?
            setColorScheme({ ...colorScheme, status: curStatus, text: "Dark Mode", style: darkStyle })
            :
            setColorScheme({ ...colorScheme, status: curStatus, text: "Light Mode", style: lightStyle })
    }

    // check user color scheme 
    useEffect(() => {

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            handleClick()
            try {
                document.querySelector('#modeCheckBox').checked = true;
            } catch (error) {

            }
        }
    }, []);

    return (
        <body>
            <div id="page-container">
                <div className="navFiller"></div>
                <div className="Content">
                    <nav className="navBar">
                        <div class="navBarHam">
                            <div class="container nav-container">
                                <input aria-label="Mobile Navigation Menu" class="checkbox" type="checkbox" name="" id="hamCheckBox" />
                                <div class="hamburger-lines">
                                    <span class="line line1"></span>
                                    <span class="line line2"></span>
                                    <span class="line line3"></span>
                                </div>

                                <div className="modeBtn">
                                    {/* Switch for Dark or Light Mode */}
                                    <label className="switch">
                                        <input aria-label="Dark and Light Mode switch" name="modeSwitch" id="modeCheckBox" onClick={handleClick} type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>

                                    <div className="modeText" style={{ float: 'right', paddingRight: '0.5rem', margin: "0 auto", }}>
                                        <p style={{ color: 'white' }}><b>{colorScheme.text}</b></p>
                                    </div>
                                    
                                </div>
                                <div class="menu-items">
                                    <ul className="menuBtns">
                                        <li onClick={unCheck}><Link to="/">Home</Link></li>
                                        <li onClick={unCheck}><Link to="projects">Projects</Link></li>
                                        <li onClick={unCheck}><Link to="About">About</Link></li>
                                        <li onClick={unCheck}><Link to="contact">Contact</Link></li>
                                        <li> <div className="gitHubLogo"> <a href="https://github.com/VincentStr"><img width ="35" height="35" alt="GitHub Logo" src={GitHubLogo}/></a> </div> </li>
                                        
                                       {/*  <li>
                                            <form className="searchBar">
                                                <input placeholder="Search" id="searchB" style={colorScheme.style} type="text"></input>
                                                <button aria-label="Search Button" name="submit" style={colorScheme.style} type="submit"><i className="fa fa-search"></i></button>
                                            </form>
                                        </li> */}

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                <div id="content-wrap">
                    <Routes>
                        <Route path="/" element={<Home modeStyle={colorScheme.style} />} />
                        <Route path="*" element={<PageNotFound />} />
                        <Route path="contact" element={<Contact modeStyle={colorScheme.style} />} />
                        <Route path="dist/index.html" element={<Home modeStyle={colorScheme.style} />} />
                        <Route path="projects" element={<Project modeStyle={colorScheme.style} />} />
                        <Route path="projects/:projectId" element={<ProjectPage modeStyle={colorScheme.style} />} />
                        <Route path="about" element={<About modeStyle={colorScheme.style} />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </body>
    )
}

ReactDOM.render(<Router><App /></Router>, document.getElementById("root"))