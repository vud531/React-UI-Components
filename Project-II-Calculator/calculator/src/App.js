import React from 'react';
import './App.css';
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";


// calculator's logic
function buttonLister(e) {
  console.log(e.toElement.innerText);
  console.log(e.toElement.classList[1]);
}

// document.querySelectorAll(".button").addEventListener('click', (e) => buttonLister); 
function onClickHandler(e) {
  const value = e.toElement.innerText;
}
document.addEventListener('click', (e) => buttonLister(e) );
const numbers = [1,2,3,4,5,6,7,8,9,0];
const numberBtns = [];
numbers.forEach(number => numberBtns.push({ "content": number }));
console.log(numberBtns);


const actions = ["/", "x", "-", "+", "="];
const actionBtns = [];
actions.forEach((action, index) => actionBtns.push({ key:index, property: { "content": action } }));

const App = () => {

  return (
    <div>
      <div>
        <p className="display"></p>
      </div>
      
      <div className="right-panel">
        <div className="input-panel">
        <ActionButton actionButtonProp={ {content: "clear"} } />   
        <div className="number-panel">
          {numberBtns.map(num => (
            <NumberButton key={num.content} numberButtonProp={num} />
          ))}
        </div>
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
