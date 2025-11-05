import React,{useState} from "react";

const Jsground8 = () =>{

    const [selectage,setSelectage] = useState ("");

    const numbers = [
        "10",
        "20",
        "30"

    ];
    
    const selectedage = () =>{
          if(selectage === "1"){
            return(
                <>
                 you select 10
                </>
            )
          }
    }
    return(
        <><ol>
            {numbers.map((n,index) =>(
                <li key={index}>{n}</li>
                
            ))}
        </ol>
        <p>select your age</p>
        <button onClick={() => setSelectage(1)}>1</button>
        <button onClick={selectedage}>2</button>
        <button onClick={selectedage}>3</button>

        {selectedage()}
        
       
        
        </>

    );
};
export default Jsground8;