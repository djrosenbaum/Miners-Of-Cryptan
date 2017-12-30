// const _ = require('lodash');
const { generateNewGame } = require('./generators/generateNewGame.js');
const { generateNewLayout } = require('./layout/generator/generateNewLayout.js');
const { generateSVG } = require('./layout/generator/generateSVG.js');
const { initStore } = require('./redux/store/initStore.js');
const { appendSVG } = require('./layout/svg/appendSVG.js');

const settings = {
  players: {
    color: 'orange',
    totalPlayers: 3,
  },
};

function startNewGame() {
  generateNewGame(settings)
    .then(generateNewLayout)
    .then(initStore)
    .then(generateSVG)
    .then(appendSVG)
    .then((gameboard) => {
      window.gameboard = gameboard;

      console.log('success!');
      console.log(gameboard);

      // dispatch settlement placement
      gameboard.store.dispatch({
        type: 'ADD_SETTLEMENT',
        index: 0,
        coordinate: [169.9, 55],
      });
    });
}

document.addEventListener('DOMContentLoaded', () => {
  startNewGame();
});
