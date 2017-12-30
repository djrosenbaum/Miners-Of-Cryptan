const _ = require('lodash');
const { createStore } = require('redux');
const reducers = require('./reducers').default;

function initStore(gameboard) {
  return new Promise((resolve) => {
    const store = createStore(reducers, {
      players: gameboard.players,
    });

    resolve(_.merge(gameboard, { store }));
  });
}

module.exports = {
  initStore,
};
