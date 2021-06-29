const Board = ({ state }) => {
  const { positionPlayerOne, positionPlayerTwo, snakes, ladders } = state;
  console.log(positionPlayerOne, positionPlayerTwo);
  const n = 10;
  let newBoard = [];
  const createNewBoard = () => {
    for (var i = 0; i < n; i++) {
      let row = [];
      for (var j = 0; j < n; j++) {
        if (i % 2 === 0) {
          row.push(
            <div
              className={
                10 * i + j + 1 === Number(positionPlayerOne) &&
                10 * i + j + 1 === Number(positionPlayerTwo)
                  ? "board-col both"
                  : 10 * i + j + 1 === Number(positionPlayerOne)
                  ? "board-col playerOne"
                  : 10 * i + j + 1 === Number(positionPlayerTwo)
                  ? "board-col playerTwo"
                  : snakes[10 * i + j + 1] !== undefined
                  ? "board-col snake"
                  : ladders[10 * i + j + 1] !== undefined
                  ? "board-col ladder"
                  : "board-col"
              }
              key={10 * i + j + 1}
            >
              {10 * i + j + 1}
            </div>
          );
        } else {
          row.unshift(
            <div
              className={
                10 * i + j + 1 === Number(positionPlayerOne) &&
                10 * i + j + 1 === Number(positionPlayerTwo)
                  ? "board-col both"
                  : 10 * i + j + 1 === Number(positionPlayerOne)
                  ? "board-col playerOne"
                  : 10 * i + j + 1 === Number(positionPlayerTwo)
                  ? "board-col playerTwo"
                  : snakes[10 * i + j + 1] !== undefined
                  ? "board-col snake"
                  : ladders[10 * i + j + 1] !== undefined
                  ? "board-col ladder"
                  : "board-col"
              }
              key={10 * i + j + 1}
            >
              {10 * i + j + 1}
            </div>
          );
        }
      }
      newBoard.push(row);
    }
  };
  createNewBoard();
  return <div className="board">{newBoard}</div>;
};

export default Board;
