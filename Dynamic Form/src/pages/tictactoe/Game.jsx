// ? Tic Tac Toe Game

import React, { useState } from "react";
import "../../css/game.css";
const Game = () => {
  // * Component a Box Component
  const Box = ({ value, onSquareClick }) => {
    return (
      <button className="box" onClick={onSquareClick}>
        {value}
      </button>
    );
  };
  const displayBox = Array(9).fill(0);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextTurn, setNextTurn] = useState(true);
  function handleClick(i) {
    // * if squares[i] have data, don't do anything
    if (squares[i] || findWinner(squares)) {
      return;
    }
    const nextSquares = [...squares];
    if (nextTurn) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setNextTurn(!nextTurn);
    console.log("Original Array : ", squares);
    console.log("Dummy Array : ", nextSquares);
  }

  const findWinner = (squares) => {
    const checkMatch = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < checkMatch.length; i++) {
      const [a, b, c] = checkMatch[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  const winner = findWinner(squares);
  // * Check every element of array, if all elements in array are not null then set draw
  const draw = squares.every((items, index) => items !== null) && !winner;
  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else if (draw) {
    status = "Draw";
  }

  return (
    <div className="container-fluid bg px-0">
      <div className="drop">
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div>
            <h1 className="text-center mb-4">Tic Tac Toe</h1>
            <div className="row justify-content-center">
              <div className="col-lg-5 bs p-5 rounded-3">
                <div className="container">
                  <div className="row g-3">
                    {displayBox.map((items, index) => {
                      return (
                        <div
                          className="col-lg-4 d-flex justify-content-center"
                          key={index}
                        >
                          <Box
                            value={squares[index]}
                            onSquareClick={() => handleClick(index)}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <h1 className="text-center mt-3 mb-0">{status}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
