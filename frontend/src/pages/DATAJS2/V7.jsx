import React, { useState } from "react";

const V7 = () => {
  const [numbers, setNumbers] = useState([1, 2,3 ,4, 5]);

  const add = () => {
    setNumbers(prev => {const copy = [...prev];copy.push(copy.length + 1);   
    return copy;                  
    });
  };

   const remove = () => {
    setNumbers(prev => {const copy = [...prev];copy.pop();   
    return copy;                  
    });
  };

      const reset = () =>{
       setNumbers([1,2,3,4,5])
       }

  return (
    <>
      <button onClick={add}>Push or add</button>
      <button onClick={remove}>Pop or remove</button>
      <button onClick={reset}>Reset</button>
      <p>{numbers.join(", ")}</p>
    </>
  );
};

export default V7;
