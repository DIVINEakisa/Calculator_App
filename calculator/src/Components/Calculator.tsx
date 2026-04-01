import React, { useReducer, useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState(null);
  let actions = {
    Division: ":",
    Multiplication: "X",
    Substraction: "-",
    Addition: "+",
    Reset: "Reset",
  };

  function reducer(state, action) {
    switch (action.type) {
      case actions.Division:
        return action.num1 / action.num2;
      case actions.Multiplication:
        return action.num1 * action.num2;
      case actions.Substraction:
        return action.num1 - action.num2;
      case actions.Addition:
        return action.num1 + action.num2;
      case actions.Reset:
        return 0;
      default:
        return state;
    }
  }
  function handleClick(value) {
    if (!isNaN(value)) {
      if (!operator) {
        setNum1((prev) => prev + value);
      } else {
        setNum2((prev) => prev + value);
      }
    }
    if (value == "+" || value == "-" || value == "*" || value == ":") {
      setOperator(value);
    }
    if (value === "AC") {
      setNum1("");
      setNum2("");
      setOperator(null);
      dispatch({ type: "RESET" });
    }
    if (value === "." && !num1.includes(".")) {
      setNum1((prev) => prev + value);
    }
  }

  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <main className="bg-[#feebe7] rounded-3xl p-5 w-[300px] mx-auto mt-5 font-bold text-2xl">
      <div className="bg-gray-400 col-span-4 p-4 mb-2 text-right">
        {state !== 0 ? state : num1 || num2 || 0}
      </div>

      <div className="grid grid-cols-4">
        <div className="p-4 text-center" onClick={() => handleClick("AC")}>
          AC
        </div>
        <div className="p-4 text-center" onClick={() => handleClick("+/-")}>
          +/-
        </div>
        <div className="p-4 text-center" onClick={() => handleClick("%")}>
          %
        </div>
        <div
          className="p-4 text-center bg-[#f54927] text-white"
          onClick={() => handleClick(":")}
        >
          :
        </div>

        <div className="p-4 text-center" onClick={() => handleClick("7")}>
          7
        </div>
        <div className="p-4 text-center" onClick={() => handleClick("8")}>
          8
        </div>
        <div className="p-4 text-center" onClick={() => handleClick("9")}>
          9
        </div>
        <div
          className="p-4 text-center bg-[#f54927] text-white"
          onClick={() => handleClick("*")}
        >
          X
        </div>

        <div className="p-4 text-center" onClick={() => handleClick("4")}>
          4
        </div>
        <div className="p-4 text-center" onClick={() => handleClick("5")}>
          5
        </div>
        <div className="p-4 text-center" onClick={() => handleClick("6")}>
          6
        </div>
        <div
          className="p-4 text-center bg-[#f54927] text-white"
          onClick={() => handleClick("-")}
        >
          -
        </div>

        <div className="p-4 text-center" onClick={() => handleClick("1")}>
          1
        </div>
        <div className="p-4 text-center" onClick={() => handleClick("2")}>
          2
        </div>
        <div className="p-4 text-center" onClick={() => handleClick("3")}>
          3
        </div>
        <div
          className="p-4 text-center bg-[#f54927] text-white"
          onClick={() => handleClick("+")}
        >
          +
        </div>

        <div
          className="p-4 text-center col-span-2 "
          onClick={() => handleClick("0")}
        >
          0
        </div>
        <div className="p-4 text-center" onClick={() => handleClick(".")}>
          .
        </div>
        <div
          className="p-4 text-center bg-[#f54927] text-white"
          onClick={() => handleClick("=")}
        >
          =
        </div>
      </div>
    </main>
  );
}
