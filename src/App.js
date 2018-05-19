import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CalcUi from './Components/Calc-ui/Calc-ui';

class App extends Component {
  state = { 
    number: "",
    output: 0
  }
  
  //  used to display numbers and operation on calculator screen
  clickNumber = (event) => {
    let newOutput = this.state.number;
    newOutput += event.target.value;

    if (newOutput === "+") {
      console.log(newOutput.indexOf('+'));
    }
    
    this.setState({
      number:  newOutput
      }
    )
  }

  // Clears field for clear button
  clearOutput = () => {
    this.setState(
      {
        number: ""
      }
    )
  }

// computes math functions 
  compute = (event) => {

    // change these variables names
    let newOutput = this.state.number;
    newOutput += event.target.value;

    let additon = newOutput.indexOf('+');
    let subtraction = newOutput.indexOf('-');
    let division = newOutput.indexOf('/');
    let multiply = newOutput.indexOf('x');
    let outcome = "";

    // computes addition
  if (additon !== -1) {
      
    let firstAmount = newOutput.slice(" ", additon);
      let secondAmount = newOutput.slice((additon + 1), 10);
        outcome = Number(firstAmount) + Number(secondAmount)

  }

  //  computes subtraction
  else if (subtraction !== -1) {
          
    let firstAmount = newOutput.slice(" ", subtraction);
      let secondAmount = newOutput.slice((subtraction + 1), 10);
        outcome = Number(firstAmount) - Number(secondAmount);
    }  

    // computes multiplication
  else if (multiply !== -1) {
          
    let firstAmount = newOutput.slice(" ", multiply);
      let secondAmount = newOutput.slice((multiply + 1), 10);
        outcome = Number(secondAmount) * Number(firstAmount);
    }  

    //  computes division
  else if (division !== -1) {

    let firstAmount = newOutput.slice(" ", division);
      let secondAmount = newOutput.slice((division + 1), 10);
        outcome = Number(firstAmount) / Number(secondAmount);
  }  
  else{
    console.log("Somthing went wrong");
    
  }
  this.setState({
    number:  outcome
    }
  )
}

  render() {
    return (
      <div className="App">
      <CalcUi
      output={this.state.number}
      click={this.clickNumber}
      clearOutput={this.clearOutput}
      calculate={this.compute}
      />
      </div>
    );
  }
}

export default App;
