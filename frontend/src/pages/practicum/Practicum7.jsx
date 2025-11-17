import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addByAmount } from "../../features/counterSlice";

const Practicum7 = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux Lesson</h1>
      <h2>Counter: {count}</h2>

      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(addByAmount(5))}>+5</button>
    </>
  );
};

export default Practicum7;
