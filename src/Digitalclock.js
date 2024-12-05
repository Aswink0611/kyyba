
import { useState } from 'react';

export default function Digitalclock() {
  const [text, setText] = useState(0);

  const  handleChange =()=>{
setText(text+1);

  }
  
return (
    <>
      
      <p>You'r count: {text}</p>
      <button onClick={handleChange}>
        button
      </button>
    </>
  );
}
