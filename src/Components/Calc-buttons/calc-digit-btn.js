import React from 'react';

const calcDigitBtn = () => {
    return(
        <div className="col-3 calc-btns">
        <button className="nums" onClick={props.click}></button>
      </div>
    )
}
export default calcDigitBtn;