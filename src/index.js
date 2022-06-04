import "./style.css"
import Home from "./Home/home"



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    } render() {
        return (
            <div>
                <Content />

            </div>
        )
    }
}

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

function Content(props) {
    const [mode, setMode] = React.useState(true)
    const [curMode, setCurMode] = React.useState("Light Mode")
    const [modeStyle, setModeStyle] = React.useState(lightStyle)


    function handleClick() {
        setMode(!mode)

        mode ? setCurMode("Dark Mode") : setCurMode("Light Mode")
        mode ? setModeStyle(darkStyle) : setModeStyle(lightStyle)
    }
    return (
        <div className="Content">
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>

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



            <Home modeStyle={modeStyle} />

        </div>

    )
}

ReactDOM.render(<App />, document.getElementById("root"))