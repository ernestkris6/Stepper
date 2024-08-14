import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    //const [date, setDate] = useState(new Date().toLocaleDateString());
    const [step, setStep] = useState(0);

    const date = new Date("Mon May 20 2024");
    date.setDate(date.getDate() + count);

    //const getDate = date + count;

    // function handleStep(){
    //     setStep((c)=> c + 1);
    // }

    // function handleUnstep(){
    //     setStep((c)=> c - 1);
    // }

    function handleReset(){
        setCount(0);
        setStep(0);
    }

    
    function handleCount(){
        setCount((d)=> d + step);
    }

    function handleUnCount(){
        setCount((d)=> d - step);
    }








  return (
    <div style={{textAlign : "center"}}>
        <h3>COUNTER</h3>
       <div>
       {/* <button onClick={handleUnstep}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStep}>+</button> */}
        <input 
        type='range' 
        min={0} max={10} 
        value={step} 
        onChange={(e)=>setStep(Number(e.target.value))}/>
       </div>

       <div>
        <button onClick={handleUnCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleCount}>+</button>
       </div>

       <p>
        {count === 0 ? 
        `Today is ${date.toDateString()}` 
        : count > 0 
        ? `${count} days from now is ${date.toDateString()} ` 
        : count < 0 ? 
        `${count} days ago was ${date.toDateString()}` 
        : `${Math.abs(count)} days ago was ${date.toDateString()}}`}
        
       </p>

       {(count > 0 || step > 0) ? <button onClick={handleReset}>RESET</button> : null}
         
       </div>

  )
}

export default Counter;