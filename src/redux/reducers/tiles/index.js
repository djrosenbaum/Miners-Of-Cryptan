import newGame from './NEW_GAME';

const tiles = (state = [], action) => {
  if (action.type === 'NEW_GAME') {
    return newGame(state, action);
  }
  return state;
};

export default tiles;
