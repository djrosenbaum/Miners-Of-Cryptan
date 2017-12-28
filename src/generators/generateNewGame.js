const { generateGameTiles } = require('./generateGameTiles.js');
const { generatePlayers } = require('./generatePlayers.js');
const { generateRules } = require('./generateRules.js');

function generateNewGame(settings) {
  return new Promise((resolve) => {
    const gameBoard = {
      settings,
      gameTiles: generateGameTiles(),
      players: generatePlayers(settings.players),
      rules: generateRules(),
    };

    resolve(gameBoard);
  });
}

module.exports = {
  generateNewGame,
};
