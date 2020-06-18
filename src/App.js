import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputValue,setInputValue]=useState('')

  const handleClick=()=>{
    alert(inputValue);
  }

  const changeInputValue=(ev)=>{
     setInputValue(ev.target.value);
  }

  return (
    <div className="App">
      <input type='text' onChange={changeInputValue}/><input type='button' value='Add' onClick={handleClick}/>
      <p>New things happen</p>
    </div>
  );
}

export default App;

