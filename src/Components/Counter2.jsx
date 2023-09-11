import React, {useState} from 'react'

const Counter2 = () => {
    const [counter, setCounter]=useState(0)
    const subtract=()=>{
      setCounter(counter-1)
    } 
    const add=()=>{
      setCounter(counter+1)
    }
  
    return (
      <div>
      
      <div >
      
      <button className='btn btn3' onClick={subtract}>-</button>
      <span className='slide-span'>{counter}</span>
        
        <button className='btn nav-btn' onClick={add}>+Add</button>
      </div>
      </div>
    )
}

export default Counter2
