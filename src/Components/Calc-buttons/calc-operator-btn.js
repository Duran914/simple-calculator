import React from 'react';

const calcOperatorBtn = () => {
    return(
        <div className="col-3 calc-btns">
        <button className="mathOperators" onClick={props.click}></button>
      </div>
    )
}

export default calcOperatorBtn;