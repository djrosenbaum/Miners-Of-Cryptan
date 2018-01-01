import newGame from './NEW_GAME';
// import addSettlement from './addSettlement';

const players = (state = [], action) => {
  if (action.type === 'NEW_GAME') {
    return newGame(state, action);
  }
  return state;
};

export default players;
