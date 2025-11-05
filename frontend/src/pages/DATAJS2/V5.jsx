import React,{useState,useEffect} from "react";

const V5 = () =>{
      const [click,setClick] = useState("");
      const [search,setSearch] = useState("");


      const groceries = [ "Rice", "Eggs", "Milk", "Bread", "Butter", "Cheese", "Vegetables", "Fruits" ];

      const drygoods = ["Soap", "Shampoo", "Toothpaste", "Tissue", "Detergent", "Dishwashing liquid", "Laundry powder" ];

      const fastfood = [ "Burgers", "Fries", "Fried Chicken", "Pizza", "Hotdogs", "Spaghetti", "Tacos" ];

      //groceries filter
      const filteredgroceries = groceries.filter((g) =>
      g.toLowerCase().includes(search.toLowerCase())
      );

      // drygoods filter
      const filteredrygoods = drygoods.filter((d) =>
      d.toLowerCase().includes(search.toLowerCase())
      );

      //fastfood filter
      const filterefastfood = fastfood.filter((f) =>
      f.toLowerCase().includes(search.toLowerCase())
      );





    const clicked = () => {
          if(click  === 1){
            return(
                <>
                 <input
                  type="search"
                  placeholder="Search number..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  />
                <ol>
                    {filteredgroceries.length > 0 ?(filteredgroceries.map((g,index) =>(
                    <li key={index}>{g}</li>

                    ))) :(
                        <p>no data found </p>

                    )}
                </ol>
                </>
            )
          }else if(click === 2){
            return(
                <>
                <input
                  type="search"
                  placeholder="Search number..."
                  value={search}
                 onChange={(e) => setSearch(e.target.value)}
                  />
                <ol>
                    {filteredrygoods.length > 0 ?(filteredrygoods.map((d,index) =>(
                        <li key={index}>{d}</li>

                    ))):(
                        <p>no data found</p>

                    )}
                </ol>
                </>
            )
          }else if(click === 3){
            return(
                <>
                 <input
                  type="search"
                  placeholder="Search number..."
                  value={search}
                 onChange={(e) => setSearch(e.target.value)}
                  />
                <ol>
                   {filterefastfood.length > 0 ?(filterefastfood.map((f,index)=>(
                    <li key={index}>{f}</li>
                    

                   ))):(
                    <p>no data found</p>

                   )}
                </ol>
                </>
            )
          }else{
            return(
                <>
                <h1>no department selected</h1>
                </>
            )
          }

    }

    return(
        <>
    <h1>POS System</h1>
    <button onClick={() => setClick(click === 1 ? 0: 1)}>Groceries</button>
    <button onClick={() => setClick(click === 2 ? 0: 2)}>Drygoods</button>
    <button onClick={() => setClick(click === 3 ? 0: 3)}>Fastfood</button>
    {clicked()}
        
        </>

    );
};
export default V5;