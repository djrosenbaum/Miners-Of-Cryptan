import newGame from './hexagons/NEW_GAME';

const initialState = {
  hexagons: [],
};

const layout = (state = initialState, action) => {
  if (action.type === 'NEW_GAME') {
    return newGame(state, action);
  }
  return state;
};

export default layout;
