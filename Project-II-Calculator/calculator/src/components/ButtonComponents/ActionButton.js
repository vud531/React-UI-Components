import React from 'react';
import './Button.css';


const ActionButton = props => {
    console.log(props.actionButtonProp);
    const prop = props.actionButtonProp;
    // const display = (number) => {
    //     document.querySelector(".display").innerHTML += action;
    // }
    return (
        <button 
        className={"button action-button " + (props.className? props.className : "") }  
        // onClick={ () => display(prop.content) } 
        >{prop.content}</button>
    );
}

export default ActionButton;