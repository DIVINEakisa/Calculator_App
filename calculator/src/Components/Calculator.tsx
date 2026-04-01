import React, { useReducer, useState } from "react";

export default function Calculator() {
  let actions = {
    Division: ":",
    Multiplication: "X",
    Substraction: "-",
    Addition: "+",
  };

  function reducer(state, action) {
    switch (action.type) {
      case actions.Division:
        return num1 / num2;
      case actions.Multiplication:
        return num1 * num2;
      case actions.Substraction:
        return num1 - num2;
      case actions.Addition:
        return num1 + num2;
      default:
        return 0;
    }
  }

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [state, action] = useReducer(reducer, []);

  return (
    <main className="bg-[#feebe7] rounded-3xl p-5 w-[300px] mx-auto mt-5 font-bold text-2xl">
      {/* Display */}
      <div className="bg-gray-400 col-span-4 p-4 mb-2 text-right">0</div>

      {/* Grid Buttons */}
      <div className="grid grid-cols-4">
        <div className="p-4 text-center" onClick={()}>AC {state}</div>
        <div className="p-4 text-center">+/-</div>
        <div className="p-4 text-center">%</div>
        <div className="p-4 text-center bg-[#f54927] text-white">:</div>

        <div className="p-4 text-center">7</div>
        <div className="p-4 text-center">8</div>
        <div className="p-4 text-center">9</div>
        <div className="p-4 text-center bg-[#f54927] text-white">X</div>

        <div className="p-4 text-center">4</div>
        <div className="p-4 text-center">5</div>
        <div className="p-4 text-center">6</div>
        <div className="p-4 text-center bg-[#f54927] text-white">-</div>

        <div className="p-4 text-center">1</div>
        <div className="p-4 text-center">2</div>
        <div className="p-4 text-center">3</div>
        <div className="p-4 text-center bg-[#f54927] text-white">+</div>

        <div className="p-4 text-center col-span-2 ">0</div>
        <div className="p-4 text-center">.</div>
        <div className="p-4 text-center bg-[#f54927] text-white">=</div>
      </div>
    </main>
  );
}
