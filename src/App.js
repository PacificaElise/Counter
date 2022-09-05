import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
 
  const handleClick = () => {
    setCount((prevCount) => {
      return prevCount+1
    });
  };
    return <button onClick={handleClick}>{count}</button>;
}


function App() {

  return (
    <Counter
      
    />
  );
}

export default App;
