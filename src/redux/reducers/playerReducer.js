function addSettlement(state, action) {
  return state.map((player, index) => {
    if (index === action.index) {
      return Object.assign({}, player, {
        settlements: [...player.settlements, action.coordinate],
      });
    }
    return player;
  });
}

const playerReducer = (state = [], action) => {
  if (action.type === 'ADD_SETTLEMENT') {
    return addSettlement(state, action);
  }
  return state;
};

export default playerReducer;
