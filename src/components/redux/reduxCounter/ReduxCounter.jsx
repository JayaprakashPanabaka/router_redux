import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ACTIONS } from "./reduxCounterStore.js";

const ReduxCounter = () => {
  const counter = useSelector((state) => state);
  console.log(counter);

  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <div>
        <button
          onClick={handleInc}
          className="border-[1px] border-black p-1 rounded m-3"
        >
          Inc
        </button>
        <button className="border-[1px] border-black p-1 rounded m-3">
          Reset
        </button>
        <button className="border-[1px] border-black p-1 rounded m-3">
          Dec
        </button>
      </div>
    </div>
  );
};

export default ReduxCounter;
