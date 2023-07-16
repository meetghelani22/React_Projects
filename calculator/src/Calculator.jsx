import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState(0);
  const [prev, setprevNum] = useState(0);
  const [operator, setOperator] = useState("");
  console.log("Input is : ", input);
  function handleClick(value) {
    setInput(value);
    console.log("setInput is : ", value);
  }
  function handleClear() {
    setInput(0);
    setprevNum(0);
  }
  function handleOperator(value) {
    // console.log(value);
    setOperator(value);
    setprevNum(input);
    // setInput(0);
    let result;
    if (operator === "+") {
      result = parseFloat(prev) + parseFloat(input);
      console.log("Value of Prev is : ", prev);
      console.log("Value of Input is : ", input);
      console.log("Value of Result is : ", result);
      setInput(result);
      setprevNum(result);
    } else if (operator === "-") {
      result = parseFloat(prev) - parseFloat(input);
      // setInput(result);
      // setprevNum(result);
    }
  }
  function handleEqual() {
    /*     let result;
    if (operator === "+") {
      result = parseFloat(prev) + parseFloat(input);
    } else if (operator === "-") {
      result = parseFloat(prev) - parseFloat(input);
    } else if (operator === "*") {
      result = parseFloat(prev) * parseFloat(input);
    } else if (operator === "/") {
      result = parseFloat(prev) / parseFloat(input);
    } else {
      result = parseFloat(input);
    }
    console.log(result);
    setInput(result);
    setprevNum("");
    setOperator(""); */
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <div className="container bs rounded-4 p-5">
            <div className="row mb-2">
              <input
                type="text"
                className="py-2 inpt"
                value={input || prev}
                readOnly
              />
            </div>
            <div className="buttons">
              <div className="d-flex justify-content-between mb-2">
                <button className="c-btn" onClick={() => handleClick("1")}>
                  1
                </button>
                <button className="c-btn" onClick={() => handleClick("2")}>
                  2
                </button>
                <button className="c-btn" onClick={() => handleClick("3")}>
                  3
                </button>
                <button className="c-btn" onClick={() => handleOperator("+")}>
                  +
                </button>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <button className="c-btn" onClick={() => handleClick("4")}>
                  4
                </button>
                <button className="c-btn" onClick={() => handleClick("5")}>
                  5
                </button>
                <button className="c-btn" onClick={() => handleClick("6")}>
                  6
                </button>
                <button className="c-btn" onClick={() => handleOperator("-")}>
                  -
                </button>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <button className="c-btn" onClick={() => handleClick("7")}>
                  7
                </button>
                <button className="c-btn" onClick={() => handleClick("8")}>
                  8
                </button>
                <button className="c-btn" onClick={() => handleClick("9")}>
                  9
                </button>
                <button className="c-btn" onClick={() => handleOperator("*")}>
                  *
                </button>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <button className="c-btn" onClick={() => handleClear()}>
                  C
                </button>
                <button className="c-btn" onClick={() => handleClick("0")}>
                  0
                </button>
                <button className="c-btn" onClick={() => handleEqual("=")}>
                  =
                </button>
                <button className="c-btn" onClick={() => handleOperator("/")}>
                  /
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
