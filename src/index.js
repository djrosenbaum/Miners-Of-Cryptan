const _ = require('lodash');
const { generateNewGame } = require('./generators/generateNewGame.js');
const { generateNewLayout } = require('./layout/generator/generateNewLayout.js');
const { generateSVG } = require('./layout/generator/generateSVG.js');

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
    .then((gameboard) => {
      const catan = document.getElementById('catan');
      _.each(gameboard.svg.hexagons, (group) => {
        catan.appendChild(group);
      });

      _.each(gameboard.svg.segments, (segment) => {
        catan.appendChild(segment);
      });

      _.each(gameboard.svg.nodes, (node) => {
        catan.appendChild(node);
      });
      console.log('success!');
      console.log(gameboard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  startNewGame();
});
