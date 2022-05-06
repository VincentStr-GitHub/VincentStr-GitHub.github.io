import "./quoteStyle.css"

class Compo2 extends React.Component{
    constructor(){
        super()
        this.state = {
            text:"Start where you are. Use what you have. Do what you can",
            author:"Arthur Ase",
            quotesDB: [],
            randColor:[
                '#16a085',
                '#27ae60',
                '#2c3e50',
                '#f39c12',
                '#e74c3c',
                '#9b59b6',
                '#FB6964',
                '#342224',
                '#472E32',
                '#BDBB99',
                '#77B1A9',
                '#73A857'
            ],
            sColor: ""

        }
        this.handleClick = this.handleClick.bind(this)
    } 
    componentDidMount() {
        fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
            .then(response => response.json())
            .then(data => this.setState({ quotesDB: data.quotes })
            )   
    }
    
    handleClick(event){
        const randNum = Math.floor(Math.random() * this.state.quotesDB.length)
        //console.log(randNum)
        const randText = this.state.quotesDB[randNum].quote
        const randAuth = this.state.quotesDB[randNum].author
        this.setState({text : randText})
        this.setState({author: randAuth})
        this.setState({sColor: this.state.randColor[Math.floor(Math.random()*this.state.randColor.length)] })      
    }

    render(){
        return (
            
            <div className="quoteBox" id="quote-box" style={{backgroundColor:this.state.sColor}}>
            <p className="text" id="text">"{this.state.text}"</p>
            <p  className="text"id="author"> - {this.state.author} </p>
            <p className="text">-------------</p>
            
            <div className="butQT">
            <button style={{color:this.state.sColor}} onClick={this.handleClick} id="new-quote">New Quote</button>
            <a href="twitter.com/intent/tweet">
               <div style={{color:this.state.sColor}} className="twitterIcon"><i className="fa fa-twitter-square"></i></div> 
            </a>
            </div>

            </div>
            
            )
    }
}

export default Compo2