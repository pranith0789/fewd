import { Component } from "react";

class Calculator extends Component {
    constructor(props) {
      super(props);
      this.state = {
        num1: '',
        num2: '',
        showSum: true,
        toggleText: 'ON',
      };
    }
  
    Num1Change = (event) => {
      this.setState({ num1: event.target.value });
    };
  
    Num2Change = (event) => {
      this.setState({ num2: event.target.value });
    };
  
    handleToggleClick = () => {
      this.setState((prevState) => ({
        
        toggleText: prevState.toggleText === 'ON' ? 'OFF' : 'ON',
      }));
    };
  
    render() {
      const { num1, num2, toggleText } = this.state;
      
  
      return (
        <div>
          <h1>Calculator</h1>
          <div><input type="number" value={num1} onChange={this.Num1Change} /><label>{num1}</label></div>
          <input type="number" value={num2} onChange={this.Num2Change} /><label>{num2}</label>
          <p> The adding :{parseInt(num1) + parseInt(num2)}</p>
          <p> The Subtraction : {parseInt(num1) - parseInt(num2)}</p>
          <hr />
          <h2>Toggle Button</h2>
          <button onClick={this.handleToggleClick}>{toggleText}</button>
        </div>
      );
    }
  }

  export default Calculator;