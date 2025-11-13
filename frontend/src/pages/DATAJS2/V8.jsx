import React,{useState} from "react";

const V8 = () => {
    const[input,setInput] = useState("");

    const reverseinput = () =>{
          return[...input].reverse().join("");
    }

    const rev = reverseinput();
    console.log(rev);

    

    
   
    
return (
    <>
    <h1>JS array method Revers</h1>
    <input
    type="text"
    placeholder="enter a text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
        />
        <p>{rev}</p>
    
   
   

     
    </>
  );
};

export default V8;
