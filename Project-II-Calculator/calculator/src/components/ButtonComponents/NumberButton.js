import React from 'react';
import './Button.css';


const NumberButton = props => {
    console.log(props.numberButtonProp);
    const prop = props.numberButtonProp;
    // const display = (number) => {
    //     document.querySelector(".display").innerHTML =+ number;
    // }
    return (
        <button 
        className="button number-button" 
        // onClick={ () => display(prop.content) } 
        >{prop.content}</button>
    );
}


export default NumberButton; 