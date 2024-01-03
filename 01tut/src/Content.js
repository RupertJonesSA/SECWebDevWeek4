import React from 'react';
import { useState } from 'react';

const Content = () => {
  // Always have useState's in a const as you do not 
  // want the name attribute to be directly altered
  const [name, setName] = useState('Sami');
  const [count, setCount] = useState(0); 
  const handleNameChange = () =>{
    const names = ["Sami", "Bob", "John"];
    const int = Math.floor(Math.random()*3);
    setName(names[int]); 
  }

  const handleClick = () =>{
    setCount(count+1); 
    console.log(count); 
  }

  const handleClick2 = (name) =>{
    console.log(count); 
  }

  return (
    <main>
        <p onDoubleClick={handleClick}>
          Hello {name}!
        </p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={handleClick}>Click It</button>
        <button onClick={handleClick2}>Click It</button>
    </main>
  )
}

export default Content