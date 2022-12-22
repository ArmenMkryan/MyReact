import Header from './Components/Header';
import React, { useState } from 'react';
import {setState} from 'react';
import './Counter.css';

function Counter() {
  const[value, setValue] = useState(0)
  const preventMinus = (e) => {
    if (e.code === 'Minus') {
        e.preventDefault();
    }
};
    return (
    <>
    <div>
        <h1>
            React Counter
        </h1>
        
        <button className="btn" min="0" onClick={() => setValue(value + 1)}>
            +
        </button>
        <button class="btn1" className="btn" onClick={() => setValue(0)}>
            RESET
        </button>
        <button className='btn' min="0"   step="1" onClick={() => setValue(value - 1)}>
            -
        </button>
       <p>{value}</p>
    </div>
    </>  
  );
}

export default Counter;
