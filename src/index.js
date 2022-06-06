import "./style.css"
import Home from "./Home/home";
import Contact from "./contact";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router,Routes ,Route, Link} from 'react-router-dom';





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


    function handleClick() {
        setMode(!mode)

        mode ? setCurMode("Dark Mode") : setCurMode("Light Mode")
        mode ? setModeStyle(darkStyle) : setModeStyle(lightStyle)
    }
    return (
        <Router>
        <link rel="stylesheet" href="/style.css" />    
        <div className="Content">
            <nav className="navBar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">About</a></li>
                    <li><Link to="/Contact">Contact</Link></li>

                    {/* Switch for Dark or Light Mode */}
                    <label className="switch">
                        <input onClick={handleClick} type="checkbox" />
                        <span className="slider round"></span>
                    </label>

                    <div className="modeText" style={{ float: 'right', marginRight: '0.5rem' }}>
                        <p style={{ color: 'white' }}><b>{curMode}</b></p>
                    </div>

                    <form className="searchBar">
                        <input placeholder="Search" id="searchB" style={modeStyle} type="text"></input>
                        <button name="submit" style={modeStyle} type="submit"><i className="fa fa-search"></i></button>
                    </form>

                </ul>
            </nav>
            <div id="homeImg" className="mainBody">   </div>
        </div>
        <Routes>
        <Route path="/" element={<Home modeStyle={modeStyle}/>} />
        <Route path="/contact" element={<Contact modeStyle={modeStyle}/>} />
        <Route path="/dist/index.html" element={<Home modeStyle={modeStyle}/>} />
        </Routes>
        </Router>
       
    )
}



ReactDOM.render(<App />, document.getElementById("root"))