import Header from './Components/Header';
import React, { useState } from 'react';
import {setState} from 'react';
import './Counter.css';




function Counter() {
  const [value, setValue] = useState(0)
  const [products] = useState(' Baloons')
  const [product] = useState('Baloon')
   const prodText = product
   
//     if(value > 1){
//     prodText = products
//    } else {
//     prodText = product
//    } 
   
  function incremCount(){
   
    if(value > 1){

    }
    setValue(seeCount => seeCount + 1)
  }
  function decremCount(){
    if(value <= 0){
        value = 0
    } else {
    setValue(seeCount => seeCount -1)
  }}
  
    return (
    <>
    <div>
        <h1>
            React Counter
        </h1>
        
        <button  onClick={incremCount}>
            +
        </button>
        <button class="btn1"  onClick={() => setValue(0)}>
            RESET
        </button>
        <button  onClick={decremCount}>
            -
        </button>
       <p>{value}<span>{prodText}</span></p> 
       
       {/* prodText */}
    </div>
    </>  
  );
}

export default Counter;
