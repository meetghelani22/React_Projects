import React, { useState } from "react";

const Newcalc = () => {
  const [input, setInput] = useState("");

  const handleClick1 = (e) => {
    setInput(input.concat(e.target.name));
    // console.log(setInput);
    console.log(input);
  };
  const clear = () => {
    setInput("");
  };
  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <div className="container bs rounded-4 p-5">
            <div className="mb-2">
              <form action="" className="row">
                <input
                  type="text"
                  value={input}
                  className="py-2 inpt"
                  readOnly
                />
              </form>
            </div>
            <div className="buttons">
              <div className="d-flex justify-content-between mb-2">
                <button name="1" className="c-btn" onClick={handleClick1}>
                  1
                </button>
                <button name="2" className="c-btn" onClick={handleClick1}>
                  2
                </button>
                <button name="3" className="c-btn" onClick={handleClick1}>
                  3
                </button>
                <button className="c-btn" name="+" onClick={handleClick1}>
                  +
                </button>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <button name="4" className="c-btn" onClick={handleClick1}>
                  4
                </button>
                <button name="5" className="c-btn" onClick={handleClick1}>
                  5
                </button>
                <button name="6" className="c-btn" onClick={handleClick1}>
                  6
                </button>
                <button className="c-btn" name="-" onClick={handleClick1}>
                  -
                </button>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <button name="7" className="c-btn" onClick={handleClick1}>
                  7
                </button>
                <button name="8" className="c-btn" onClick={handleClick1}>
                  8
                </button>
                <button name="9" className="c-btn" onClick={handleClick1}>
                  9
                </button>
                <button className="c-btn" name="*" onClick={handleClick1}>
                  *
                </button>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <button className="c-btn" onClick={clear}>
                  C
                </button>
                <button name="0" className="c-btn" onClick={handleClick1}>
                  0
                </button>
                <button className="c-btn" onClick={calculate} id="input">
                  =
                </button>
                <button className="c-btn" name="/" onClick={handleClick1}>
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

export default Newcalc;
