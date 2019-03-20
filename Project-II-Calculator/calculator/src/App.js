import React from 'react';
import './App.css';
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";


// calculator's logic
function buttonLister(e) {
  console.log(e.toElement.innerText);
  console.log(e.toElement.classList[1]);
}

function onClickHandler(e) {
  const value = e.toElement.innerText;
  const className = e.toElement.classList[1];
  const display = document.querySelector(".display");

  if (className === "action-button" || className === "number-button") {
    const expression = display.innerText;
    switch (value) {
      case "=": {
        try {
          const result = eval(expression);
          display.innerText = result;
        } catch(ex) {
          console.log(ex);
        }
        break;
      }
      case "backspace": {
        display.innerText = expression.slice(0, expression.length - 1);
        break;
      }
      case "clear": {
        display.innerText = "";
        break;
      }
      default: display.innerText += value;
    }
  }
}

// app start
document.addEventListener('click', (e) => onClickHandler(e) );
const numbers = [1,2,3,4,5,6,7,8,9,0];
const numberBtns = [];
numbers.forEach(number => numberBtns.push({ "content": number }));
console.log(numberBtns);


const actions = ["/", "*", "-", "+", "="];
const actionBtns = [];
actions.forEach((action, index) => actionBtns.push({ key:index, property: { "content": action } }));

const moreActions = ["(", ")", "clear"];
const moreActionBtns = [];
moreActions.forEach((action, index) => moreActionBtns.push({ key:index, property: { "content": action } }));

const App = () => {

  return (
    <div className="calculator">
      <div className="top-panel">
        <CalculatorDisplay />
        <ActionButton actionButtonProp={ {content: "backspace"} } />   
      </div>

      <div className="input-panel">
        <div className="right-panel">
          {/* <ActionButton className="clear-button" actionButtonProp={ {content: "clear"} } />    */} 

          {moreActionBtns.map(action => (
            <ActionButton key={action.key} actionButtonProp={action.property} />
          ))}  
          {numberBtns.map(num => (
            <NumberButton key={num.content} numberButtonProp={num} />
          ))}
        </div>

        <div className="left-panel">
          {actionBtns.map(action => (
            <ActionButton key={action.key} actionButtonProp={action.property} />
          ))}
        </div>


      </div>
    </div>
  );
};

export default App;
