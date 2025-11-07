import React, { useState, useEffect } from "react";

const V6 = () => {

    const[numbers,setNumbers] = useState([1,2,3])

    const addnumber = () =>{
        setNumbers(prev => [...prev, prev.length + 1]);

    }

    const decreasenumber = () =>{
        setNumbers(prev => prev.slice(0,prev.length - 1));
    }

    const  reset = () =>{
           setNumbers([1,2,3]);
    }

 

  

  

  return (
    <>
    <button onClick={addnumber}>Increase</button>
    <button onClick={decreasenumber}>Decrease</button>
    <button onClick={reset}>Reset</button>

    <p>{numbers.join(" - ")}</p>
    
      
    </>
  );
};

export default V6;
