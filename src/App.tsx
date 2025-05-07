import React from 'react';
import './App.css';
import Display from './components/Display';
import Keypad from './components/Keypad';
import { useSelector, useDispatch } from 'react-redux';
import { updateInput, clearInput, calculateResult, toggleSign, applyPercent } from './features/calculatorSlice';
import type { RootState } from './App/store';

const App: React.FC = () => {
  const input = useSelector((state: RootState) => state.calculator.input);
  const dispatch = useDispatch();

    const handleButtonClick = (value: string) => {
    switch (value) {
      case 'AC':
        dispatch(clearInput());
        break;
  
      case '+/‑':        
        dispatch(toggleSign());
        break;
  
      case '%':          
        dispatch(applyPercent());
        break;
  
      case '=':
        dispatch(calculateResult());
        break;
  
      default:
        dispatch(updateInput(value));
    }
  };

  return (
    <div className="app-wrapper calculator-wrapper">
      {}
      <h1 className="calculator-title">React Redux Calculator</h1>

      {}
      <div className="calculator">
        <Display value={input} />
        <Keypad onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default App;

