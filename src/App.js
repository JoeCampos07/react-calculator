import React from 'react';
import './App.css';
import freecodecamplogo from './images/freecodecamp-logo.png'
import Button from './components/button';
import Screen from './components/screen';
import ClearButton from './components/clear-button';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value)
  };
  
  const result = () => {
    if (input) {
      setInput(evaluate(input));
    }else{
      alert("Write an operation first");
    }
  };

  
  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img 
        src={freecodecamplogo}
        className='freecodecamp-logo'
        alt='FreeCodeCamp Logo' />
      </div>
      <div className= 'calculator-container'>
        <Screen input={input} />
        <div className='row'>
          <Button clickHandle={addInput}>1</Button>
          <Button clickHandle={addInput}>2</Button>
          <Button clickHandle={addInput}>3</Button>
          <Button clickHandle={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button clickHandle={addInput}>4</Button>
          <Button clickHandle={addInput}>5</Button>
          <Button clickHandle={addInput}>6</Button>
          <Button clickHandle={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button clickHandle={addInput}>7</Button>
          <Button clickHandle={addInput}>8</Button>
          <Button clickHandle={addInput}>9</Button>
          <Button clickHandle={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button clickHandle={result}>=</Button>
          <Button clickHandle={addInput}>0</Button>
          <Button clickHandle={addInput}>.</Button>
          <Button clickHandle={addInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton clearHandle={() => setInput('')}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
