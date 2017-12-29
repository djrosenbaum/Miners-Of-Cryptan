// const _ = require('lodash');
const { generateNewGame } = require('./generators/generateNewGame.js');
const { generateNewLayout } = require('./layout/generator/generateNewLayout.js');
const { generateSVG } = require('./layout/generator/generateSVG.js');
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
    .then(generateSVG)
    .then(appendSVG)
    // .then(setupPhase)
    .then((gameboard) => {
      console.log('success!');
      console.log(gameboard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  startNewGame();
});
