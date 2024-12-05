
//useeffect
import React, { useState, useEffect } from 'react';

function Faq() {
 
  const [count, setCount] = useState(0);


  useEffect(() => {
    console.log('welcome');
  },[count]); 

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default Faq;
