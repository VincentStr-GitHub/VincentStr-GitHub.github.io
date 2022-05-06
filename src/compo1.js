import "./calcStyle.css"

class Compo1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentVal: [],
            output: 0
        }
        this.handleNums = this.handleNums.bind(this);
        this.hanldeOper = this.hanldeOper.bind(this);
        this.hanldeIntial = this.hanldeIntial.bind(this);
        this.handleOut = this.handleOut.bind(this);
        this.handleEval = this.handleEval.bind(this);
        this.handleDecimal = this.handleDecimal.bind(this);

    } 
    
    handleNums(e){
        const value = e.target.value
        this.state.currentVal[0] == 0
        ?  this.state.currentVal.shift() :this.state.currentVal.push(value)

        this.handleOut()
    }
    
    hanldeOper(e){
        const value = e.target.value
        const prev = this.state.currentVal.length - 1
        const prevVal = this.state.currentVal[prev]
        const prePreVal = this.state.currentVal[prev -1]
        if (prevVal){
            
            if(value == " - ") {

                if(prevVal >= 0) {
                    this.state.currentVal.push(value)                
                } 
                else {
                    if(prePreVal >= 0){
                        this.state.currentVal.push(value)    
                    }
                } 
            } else {
                if(prevVal >= 0 || prevVal == ".") {
                    this.state.currentVal.push(value)                
                } else { 
                    if(prevVal == " - "){
                        console.log(this.state.currentVal)
             
                        this.state.currentVal.pop()
                        this.state.currentVal.pop()    
                        this.state.currentVal.push(value)
                    }    
                 }
            }
            
            
        }
        
        
        this.handleOut()
    }
    
    handleClear = (event) => {
      const length = this.state.currentVal.length
      if(length > 0){
        this.state.currentVal.pop()
        length !== 1 ? this.handleOut() :  this.setState({output: 0})
      }
    }
    
  
    hanldeIntial(){
        this.setState({currentVal: [] })
        this.setState({output: 0})
    }

    handleOut(){
        const out = this.state.currentVal.join("")
        this.setState({output : out})
    }
    handleDecimal(e){
        const value = e.target.value
        const prev = this.state.currentVal.length - 1
        this.state.currentVal[prev] !== "." && this.state.currentVal[prev-1] !== "." ?  
        
        this.state.currentVal.push(value) : null
        this.handleOut()

    }

    handleEval(){
        const equation = this.state.output
        const result = eval(equation)
        this.setState({output : result})
        this.setState({currentVal: [result]})

    }

    render(){
        return(
            <div id= "app">
                <div id="display">
                    {this.state.output}
                    <p id="out"></p>
                </div>
            <Buttons
            numbers={this.handleNums}
            operators={this.hanldeOper}
            intial ={this.hanldeIntial}
            eval = {this.handleEval}
            decimal = {this.handleDecimal}
            clear = {this.handleClear}
            />
            </div>
        )
    } 
}

class Buttons extends React.Component{
  render(){
      return (
        <div>
        <div className="keypad">
        <button className="button" id="clear" onClick={this.props.intial} >AC</button>
        <button className="button" id="delete" onClick={this.props.clear}>C</button>
          
        <button className="button" id="multiply" value =" * " onClick={this.props.operators}>*</button>
      
       
        <button className="button" id="seven" value ="7" onClick={this.props.numbers}>7</button>
        <button className="button" id="eight" value ="8" onClick={this.props.numbers}>8</button>
        <button className="button" id="nine" value ="9" onClick={this.props.numbers}>9</button>
        <button className="button" id="divide" value = " / " onClick={this.props.operators}>/</button> 
          
      
       
        <button className="button" id="four" value ="4" onClick={this.props.numbers}>4</button>
        <button className="button" id="five" value ="5" onClick={this.props.numbers}>5</button>
        <button className="button" id="six" value ="6" onClick={this.props.numbers}>6</button>
        <button className="button" id="subtract" value =" - " onClick={this.props.operators}>-</button>  
      
        
        <button className="button" id="one" value ="1" onClick={this.props.numbers}>1</button>
        <button className="button" id="two" value ="2" onClick={this.props.numbers}>2</button>
        <button className="button" id="three" value ="3" onClick={this.props.numbers}>3</button>
        <button className="button" id="add" value =" + " onClick={this.props.operators}>+</button>     
        
          
        
        <button className="button" id="zero"  value ="0" onClick={this.props.numbers}>0</button>
        <button className="button" id="decimal" value="." onClick={this.props.decimal}>.</button>
        <button className="button" id="equals" onClick={this.props.eval} >=</button>  
       
        
        </div>
       </div>
      )
  }
}

export default Compo1