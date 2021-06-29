import "./index.css";
import { Container, Button, ButtonGroup } from "react-bootstrap";
import { useReducer } from "react";
import reducer from "./reducer.js";
import Board from "./components/Board";

function App() {
  const initialState = {
    positionPlayerOne: 0,
    positionPlayerTwo: 0,
    winner: 0,
    turn: 1,
    snakes: {
      99: 41,
      49: 3,
      27: 5,
      43: 18,
      76: 58,
      66: 45,
      54: 31,
      89: 53,
    },
    ladders: {
      62: 81,
      42: 63,
      4: 25,
      13: 46,
      33: 49,
      50: 69,
      74: 92,
    },
    quote: "Red - Snakes | Grey - Ladders",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <Container style={{ textAlign: "center" }}>
      <Container>
        <h1>Snakes and Ladders</h1>
        <h5 className="display-4">{state.quote}</h5>
      </Container>
      <Container>
        <Board state={state} />
      </Container>
      <Container>
        <ButtonGroup size="lg">
          <Button
            onClick={() => {
              let roll = Math.floor(1 + Math.random() * 6);
              let nextPosition = state.positionPlayerOne + roll;
              let quote = `Player One rolled ${roll}`;
              if (state["snakes"][nextPosition] !== undefined) {
                quote += ` and was bitten was Snake at ${nextPosition} `;
                nextPosition = state["snakes"][nextPosition];
              }
              if (state["ladders"][nextPosition] !== undefined) {
                quote += ` and got the Ladder at ${nextPosition}`;
                nextPosition = state["ladders"][nextPosition];
              }

              if (nextPosition === 100) {
                dispatch({
                  type: "WINNER",
                  payload: 1,
                });
              } else {
                dispatch({
                  type: "ROLL",
                  payload: {
                    positionPlayerOne:
                      nextPosition < 100
                        ? nextPosition
                        : state["positionPlayerOne"],
                    positionPlayerTwo: state["positionPlayerTwo"],
                    nextTurn: 2,
                    quote: quote,
                  },
                });
              }
            }}
            disabled={state.turn !== 1}
          >
            Player 1
          </Button>
          <Button
            variant="success"
            onClick={() => {
              let roll = Math.floor(1 + Math.random() * 6);

              let nextPosition = state["positionPlayerTwo"] + roll;
              let quote = `Player Two rolled ${roll}`;

              if (state["snakes"][nextPosition] !== undefined) {
                quote += ` and was bitten was Snake at ${nextPosition} `;
                nextPosition = state["snakes"][nextPosition];
              }
              if (state["ladders"][nextPosition] !== undefined) {
                quote += ` and got the Ladder at ${nextPosition}`;
                nextPosition = state["ladders"][nextPosition];
              }

              if (nextPosition === 100) {
                dispatch({
                  type: "WINNER",
                  payload: 2,
                });
              } else {
                dispatch({
                  type: "ROLL",
                  payload: {
                    positionPlayerOne: state["positionPlayerOne"],
                    positionPlayerTwo:
                      nextPosition < 100
                        ? nextPosition
                        : state["positionPlayerTwo"],
                    nextTurn: 1,
                    quote: quote,
                  },
                });
              }
            }}
            disabled={state.turn !== 2}
          >
            Player 2
          </Button>
        </ButtonGroup>
      </Container>
      <h1 className="display-4">
        {state.winner !== 0 && `Winner - Player ${state.winner}`}
      </h1>
    </Container>
  );
}

export default App;
