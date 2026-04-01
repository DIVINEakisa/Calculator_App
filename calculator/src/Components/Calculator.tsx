import React, { useReducer, useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState(null);

  function reducer(state, action) {
    switch (action.type) {
      case "+":
        return action.num1 + action.num2;
      case "-":
        return action.num1 - action.num2;
      case "*":
        return action.num1 * action.num2;
      case "/":
        return action.num2 !== 0 ? action.num1 / action.num2 : "Error";
      case "RESET":
        return 0;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, 0);

  function handleClick(value) {
    if (!isNaN(value)) {
      if (!operator) setNum1((prev) => prev + value);
      else setNum2((prev) => prev + value);
    } else if (value === ".") {
      if (!operator && !num1.includes(".")) setNum1((prev) => prev + value);
      else if (operator && !num2.includes(".")) setNum2((prev) => prev + value);
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      if (num1) setOperator(value);
    } else if (value === "=") {
      if (num1 && num2 && operator) {
        dispatch({
          type: operator,
          num1: Number(num1),
          num2: Number(num2),
        });
        setNum1("");
        setNum2("");
        setOperator(null);
      }
    } else if (value === "AC") {
      setNum1("");
      setNum2("");
      setOperator(null);
      dispatch({ type: "RESET" });
    }
  }

  return (
    <main className="bg-[#feebe7] rounded-3xl p-5 w-[300px] mx-auto mt-5 font-bold text-2xl">
      <div className="bg-gray-400 col-span-4 p-4 mb-2 text-right">
        {state !== 0 ? state : num2 || num1 || 0}
      </div>

      <div className="grid grid-cols-4 gap-2">
        <div
          className="p-4 text-center bg-gray-300 rounded"
          onClick={() => handleClick("AC")}
        >
          AC
        </div>
        <div
          className="p-4 text-center bg-gray-300 rounded"
          onClick={() => handleClick("+/-")}
        >
          +/-
        </div>
        <div
          className="p-4 text-center bg-gray-300 rounded"
          onClick={() => handleClick("%")}
        >
          %
        </div>
        <div
          className="p-4 text-center bg-[#f54927] text-white rounded"
          onClick={() => handleClick("/")}
        >
          /
        </div>

        {/* Second row */}
        <div
          className="p-4 text-center bg-gray-200 rounded"
          onClick={() => handleClick("7")}
        >
          7
        </div>
        <div
          className="p-4 text-center bg-gray-200 rounded"
          onClick={() => handleClick("8")}
        >
          8
        </div>
        <div
          className="p-4 text-center bg-gray-200 rounded"
          onClick={() => handleClick("9")}
        >
          9
        </div>
        <div
          className="p-4 text-center bg-[#f54927] text-white rounded"
          onClick={() => handleClick("*")}
        >
          X
        </div>

        <div
          className="p-4 text-center bg-gray-200 rounded"
          onClick={() => handleClick("4")}
        >
          4
        </div>
        <div
          className="p-4 text-center bg-gray-200 rounded"
          onClick={() => handleClick("5")}
        >
          5
        </div>
        <div
          className="p-4 text-center bg-gray-200 rounded"
          onClick={() => handleClick("6")}
        >
          6
        </div>
        <div
          className="p-4 text-center bg-[#f54927] text-white rounded"
          onClick={() => handleClick("-")}
        >
          -
        </div>

        <div
          className="p-4 text-center bg-gray-200 rounded"
          onClick={() => handleClick("1")}
        >
          1
        </div>
        <div
          className="p-4 text-center bg-gray-200 rounded"
          onClick={() => handleClick("2")}
        >
          2
        </div>
        <div
          className="p-4 text-center bg-gray-200 rounded"
          onClick={() => handleClick("3")}
        >
          3
        </div>
        <div
          className="p-4 text-center bg-[#f54927] text-white rounded"
          onClick={() => handleClick("+")}
        >
          +
        </div>

        <div
          className="p-4 text-center bg-gray-200 rounded col-span-2"
          onClick={() => handleClick("0")}
        >
          0
        </div>
        <div
          className="p-4 text-center bg-gray-200 rounded"
          onClick={() => handleClick(".")}
        >
          .
        </div>
        <div
          className="p-4 text-center bg-[#f54927] text-white rounded"
          onClick={() => handleClick("=")}
        >
          =
        </div>
      </div>
    </main>
  );
}
