import React,{useState} from "react";

const Jsground1 = () =>{
    const [input ,setInput] = useState("");
    const [choosegroceriesitem,setChoosegroceriesitem] = useState("");
    const [quantity,setQuantity] = useState ("");
    const [ricetotal,setRicetotal] = useState ("");


    const choosenumber=["1","2","3"];
    const groceriesitem=["rice","bread"];
    const fastfooditem=["burger","coocke"];
    const drygoodsitem=["t-shirt","shoes"];
    
    // rice total
    const totalrice = () =>{
           return quantity  * 50;
    }
    
    const groceriesitemprice = ()=>{
        if(choosegroceriesitem === "1"){
           return (
            <>
            <p>Rice:P50</p>
            <input
            type="number"
            placeholder="Enter a quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}

            />
            <h1>{totalrice()}</h1>
            <p>want to add more</p>
            </>

           );
            
        }else{
            return "invalid number input"
        }
    }
// selected 1 for rice
    const selection = () =>{
            if(input === "1"){
            return (
                <>
            
            <ul>
                <h1>Item list</h1>
                {groceriesitem.map(( g,index) => 
                (
                    <li key={index}>
                        {g}
                        
                    </li>
                    

                )
                
            )}
            </ul>
            <input
            type="number"
            placeholder="Choose Item"
            value={choosegroceriesitem}
            onChange={(e) => setChoosegroceriesitem(e.target.value)}
            />
            <h1>{groceriesitemprice()}</h1>

            </>

            );
            

        }else{
            return "please select a valid number";
        }
    }
    return(
        <>
        <h1>Select a number</h1>
        <ul>
            {choosenumber.map((c,index) =>(
                <li key={index}>
                    {c}

                </li>

            )
        )}
        </ul>

        <input
        type="number"
        placeholder="Enter a number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <h1>{selection()}</h1>
        
        </>

    )
};
export default Jsground1;