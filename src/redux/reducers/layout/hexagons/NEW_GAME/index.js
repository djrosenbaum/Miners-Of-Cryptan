function newGame(state, action) {
  return {
    ...state,
    hexagons: action.payload.hexagons,
  };
}

export default newGame;
