import React, { useState } from "react";

const Jsgames = () => {
  const [selectgames, setSelectgames] = useState("");
  const [guessgame, setGuessgame] = useState("");
  const [oddevengame, setOddevengame] = useState("");
  const games = ["guess the number", "odd and even","learnig js obejects","employee example objets together with  template literals"];

  // js objects
  const user ={
    fname:"nikko",
    mname:"mirafuentes",
    lname:"paceno"
  };

  const employee = [
    {id:1,fname:"nikko",mname:"mirafuentes",lname:"paceno"},
    {id:2,fname:"juan",mname:"dela",lname:"cruz"},
    {id:3,fname:"juan",mname:"manuel",lname:"marquez"}

  ]

  // Handle game selection
  const handleSelectGame = (e) => {
    setSelectgames(e.target.value);
    setGuessgame("");
    setOddevengame("");
  };

  // Guess the number logic
  const guessgamenum = () => {
    if (guessgame === "") return "";
    if (Number(guessgame) === 20) return "Great, you did it!";
    if (Number(guessgame) < 10) return "Too low";
    if (Number(guessgame) >= 15 && Number(guessgame) < 20) return "You're close!";
    return "Invalid";
  };

  // Odd or even logic
  const oddevengames = () => {
    if (oddevengame === "") return "";
    return Number(oddevengame) % 2 === 0 ? "Even" : "Odd";
  };

  // Game renderer
  const selectedgames = () => {
    if (selectgames === "1") {
      return (
        <>
            
          <h1>Guess the Number</h1>
          <input
            type="number"
            placeholder="Enter your guess"
            value={guessgame}
            onChange={(e) => setGuessgame(e.target.value)}
          />
          <p>{guessgamenum()}</p>
        </>
      );
    } else if (selectgames === "2") {
      return (
        <>
          <h1>Odd & Even Game</h1>
          <input
            type="number"
            placeholder="Enter a number"
            value={oddevengame}
            onChange={(e) => setOddevengame(e.target.value)}
          />
          <p>{oddevengames()}</p>
        </>
      );
    }else if (selectgames === "3"){
        return (
            <>
            <h1>'Learning js objects together with template literals! '</h1>
            <p>{user.fname} {`${user.mname}`}   {`${user.lname}`}</p>
            </>

        );
    }else if(selectgames === "4"){
        return (
            <>
            <h1>Employee List</h1>
            <ol>
                {employee.map((e,index) =>(
                    <li key={index}>{`${e.fname} ${e.mname} ${e.lname}`}</li>

                ))}
            </ol>
            
            </>

        );

    }

  };

  return (
    <>
      <h1>Select a Game</h1>
      <ol>
        {games.map((g, index) => (
          <li key={index}>{g}</li>
        ))}
      </ol>

      <input
        type="number"
        placeholder="Select Game (1 or 2)"
        value={selectgames}
        onChange={handleSelectGame}
      />

      {selectgames && selectgames !== "1" && selectgames !== "2" && selectgames !== "3"  && selectgames !== "4"  && <p>No game found </p>}

      {selectedgames()}
    </>
  );
};

export default Jsgames;
