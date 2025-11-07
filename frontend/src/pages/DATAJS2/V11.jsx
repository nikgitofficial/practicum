import React,{useState} from "react";

const V11 = () =>{
    const[input,setInput] = useState ("");

    
    return(
        <>
        
        <input type="text"
        placeholder="enter your pass"
        value={input}
        onChange={(e) => setInput(e.target.value)}/>
         <p>{input}</p>
        
        </>
       

    )
}
export default V11;