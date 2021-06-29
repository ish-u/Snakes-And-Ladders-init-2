const reducer = (state, action) => {
  switch (action.type) {
    case "ROLL":
      return {
        ...state,
        positionPlayerOne: action.payload.positionPlayerOne,
        positionPlayerTwo: action.payload.positionPlayerTwo,
        turn: action.payload.nextTurn,
        quote: action.payload.quote,
      };
    case "WINNER":
      return {
        ...state,
        turn: 0,
        positionPlayerOne: action.payload === 1 ? 100 : state.positionPlayerOne,
        positionPlayerTwo: action.payload === 2 ? 100 : state.positionPlayerTwo,
        winner: action.payload,
        quote: "Refresh to Restart Game xD ",
      };
    default:
      Error("YOU DID SOMETHING YOU WERE NOT SUPPOSE TO DO");
      break;
  }
};

export default reducer;
