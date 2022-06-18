import "./style.css"
import "./hamNavStyle.css"
import Home from "./Home/home";
import Footer from "./Footer/footer";
import Contact from "./Contact/contact";
import Project from "./Projects/project";
import About from "./About/about";
import PageNotFound from "./PageNotFound/pageNF";
import ProjectPage from "./Projects/projectPage";


import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
    const [mode, setMode] = React.useState(true)
    const [curMode, setCurMode] = React.useState("Light Mode")
    const [modeStyle, setModeStyle] = React.useState(lightStyle)

    function unCheck() {
        document.querySelector('#hamCheckBox').checked = false;
    }

    function handleClick() {
        setMode(!mode)

        mode ? setCurMode("Dark Mode") : setCurMode("Light Mode")
        mode ? setModeStyle(darkStyle) : setModeStyle(lightStyle)
    }
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
                                        <input aria-label="Dark and Light Mode switch" name="modeSwitch" onClick={handleClick} type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>

                                    <div className="modeText" style={{ float: 'right', paddingRight: '0.5rem', margin: "0 auto" }}>
                                        <p style={{ color: 'white' }}><b>{curMode}</b></p>
                                    </div>

                                </div>
                                <div class="menu-items">
                                    <ul className="menuBtns">
                                        <li onClick={unCheck}><Link to="/">Home</Link></li>
                                        <li onClick={unCheck}><Link to="projects">Projects</Link></li>
                                        <li onClick={unCheck}><Link to="About">About</Link></li>
                                        <li onClick={unCheck}><Link to="contact">Contact</Link></li>
                                        <li>
                                            <form className="searchBar">
                                                <input placeholder="Search" id="searchB" style={modeStyle} type="text"></input>
                                                <button aria-label="Search Button" name="submit" style={modeStyle} type="submit"><i className="fa fa-search"></i></button>
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                <div id="content-wrap">
                    <Routes>
                        <Route path="/" element={<Home modeStyle={modeStyle} />} />
                        <Route path="*" element={<PageNotFound />} />
                        <Route path="contact" element={<Contact modeStyle={modeStyle} />} />
                        <Route path="dist/index.html" element={<Home modeStyle={modeStyle} />} />
                        <Route path="projects" element={<Project modeStyle={modeStyle} />} />
                        <Route path="projects/:projectId" element={<ProjectPage modeStyle={modeStyle} />} />
                        <Route path="about" element={<About modeStyle={modeStyle} />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </body>
    )
}

ReactDOM.render(<Router><App /></Router>, document.getElementById("root"))