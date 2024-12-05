import React, { useRef } from 'react';
//useref
function Complet() {
  
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();  
    console.log(inputRef);
    
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      <button onClick={handleFocus}>Input</button>
    </div>
  );
}

export default Complet;
