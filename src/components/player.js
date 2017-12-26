function player(payload) {
  return {
    settlements: [],
    cities: [],
    roads: [],
    harbors: [],
    specialCards: [],
    developmentCards: [],
    resourceCards: [],
    type: payload.type,
    color: payload.color
  };
}

module.exports = {
  player
};
