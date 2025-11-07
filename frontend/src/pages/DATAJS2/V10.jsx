import React,{useState} from "react";

const V10 = () => {

// js logical operator //

// variables  and values  if both condition true returns true else if on is false it returns false:
let x = 1;
let y = 2;

// and  logical operator returns true if one or both expressions are true, otherwise false:
const andOperator = () =>{
      return x < y && y > x;

};
console.log(andOperator());

// or logical operator

const orOperator = () =>{
    return x < y || y < x ;

};
console.log(orOperator());

// not or ! << js logical operator 
const notOperator = () =>{
      return !(x < y);
};
console.log(notOperator());


return (
    <>
      <h1>JS Logical Operator AND OR and NOT</h1>
      <p>Just F12 for console.log the results</p>
      
      
    </>
  );
};

export default V10;
