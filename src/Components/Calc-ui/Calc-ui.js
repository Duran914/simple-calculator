import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calc-ui.css';

const calcUi = (props) => {
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
            <div className="card mt-5">
              <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <input className="output-field" placeholder="0" value={props.output}/>
                    </div>
                  </div>
                    <div className="row">
                      <div className="col-3 calc-btns">
                       <button className="clear" onClick={props.clearOutput}>CLEAR</button>
                     </div>
                   <div className="col-3 calc-btns">
                   <button className="mathOperators" value="/" onClick={props.click}>&#247;</button>
                  </div>
                  <div className="col-3 calc-btns">
                   <button className="mathOperators" value="x" onClick={props.click}>&#215;</button>
                  </div>
                  <div className="col-3 calc-btns">
                    <button className="mathOperators" onClick={props.calculate}>=</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 calc-btns">
                    <button className="nums" value="9" onClick={props.click}>9</button>
                  </div>
                  <div className="col-3 calc-btns">
                    <button className="nums" value="8" onClick={props.click}>8</button>
                  </div>
                  <div className="col-3 calc-btns">
                    <button className="nums" value="7" onClick={props.click}>7</button>
                  </div>
                  <div className="col-3 calc-btns">
                    <button className="mathOperators" value="-" onClick={props.click}>&#8722;</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 calc-btns">
                    <button className="nums" value="6" onClick={props.click}>6</button>
                  </div>
                  <div className="col-3 calc-btns">
                    <button className="nums" value="5" onClick={props.click}>5</button>
                  </div>
                  <div className="col-3 calc-btns">
                    <button className="nums" value="4" onClick={props.click}>4</button>
                  </div>
                  <div className="col-3 calc-btns">
                    <button className="mathOperators" value="+" onClick={props.click}>&#43;</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 calc-btns">
                    <button className="nums" value="3" onClick={props.click}>3</button>
                  </div>
                  <div className="col-3 calc-btns">
                    <button className="nums" value="2" onClick={props.click}>2</button>
                  </div>
                  <div className="col-3 calc-btns">
                    <button className="nums" value="1" onClick={props.click}>1</button>
                  </div>
                  <div className="col-3 calc-btns">
                    <button className="nums" value="0" onClick={props.click}>0</button>
                  </div>
                </div>
              </div>
            </div>
         </div>
       </div>
      </div>
    )
}

export default calcUi;