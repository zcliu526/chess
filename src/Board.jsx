import React, { useState } from "react";
import Square from "./Square";

function getNextPlayer(squares) {
  const filledSqaures = squares.filter((item) => item === "X" || item === "O");
  const filledNumber = filledSqaures.length;
  const nextPlayer = filledNumber % 2 === 0 ? "X" : "O";
  return nextPlayer;
}

function calculateWinner(squares) {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const winCondition = winConditions[i];
    const [a, b, c] = winCondition;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return `${squares[a]} is winner`;
    }
  }
  const filledSqaures = squares.filter((item) => item === "X" || item === "O");
  if(filledSqaures.length === 9) {
    return "No One Won"
  }
  return null;
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const nextPlayer = getNextPlayer(squares);

  const winner =  calculateWinner(squares);
  
  const status = winner ? winner : `Next player: ${nextPlayer}`;

  const clickHandler = (index) => {
    const currentSquare = squares[index];
    if (currentSquare === null && !winner) {
      const newSquares = squares.slice();
      newSquares[index] = nextPlayer;
      setSquares(newSquares);
    }
  };

  return (
    <>
      <div>{status}</div>
      <div className="board-row">
        <Square value={squares[0]} index={0} onClick={clickHandler} />
        <Square value={squares[1]} index={1} onClick={clickHandler} />
        <Square value={squares[2]} index={2} onClick={clickHandler} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} index={3} onClick={clickHandler} />
        <Square value={squares[4]} index={4} onClick={clickHandler} />
        <Square value={squares[5]} index={5} onClick={clickHandler} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} index={6} onClick={clickHandler} />
        <Square value={squares[7]} index={7} onClick={clickHandler} />
        <Square value={squares[8]} index={8} onClick={clickHandler} />
      </div>
      <button onClick={() => {setSquares(Array(9).fill(null))}}>Reset Game</button>
    </>
  );
}

export default Board;
