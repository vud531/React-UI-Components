import React from 'react';
import './App.css';
import NumberButton from "./components/ButtonComponents/NumberButton";
const numbers = [0,1,2,3,4,5,6,7,8,9];
const numberBtns = [];
numbers.forEach(number => numberBtns.push({ "content": number }));
console.log(numberBtns);

const actions = ["+", "-", "x", "/", "=", "clear"];
const actionBtns = [];
actions.forEach(action => actionBtns.push({ "content": action }));

const App = () => {

  return (
    <div>
      <div>
        <p className="display"></p>
      </div>
      <div className="numbersPanel">
        {numberBtns.map(num => (
          <NumberButton key={num.content} numberButtonProp={num} />
        ))}
      </div>
    </div>
  );
};

export default App;
