function addSettlement(state, action) {
  return state.map((player, index) => {
    if (index === action.index) {
      return {
        ...player,
        settlements: [...player.settlements, action.coordinate],
      };
    }
    return player;
  });
}

export default addSettlement;
