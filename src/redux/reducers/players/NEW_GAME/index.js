function newGame(state, action) {
  console.log('newGame action:', action);
  return action.payload.players;
}

export default newGame;
