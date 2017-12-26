const { generateNewGame } = require('./generators/generateNewGame.js');

function layoutBoard(game) {
  console.log('layout board!');
  console.log(game);
}

function startNewGame() {
  generateNewGame({
    players: {
      color: 'orange',
      totalPlayers: 3
    }
  }).then((game) => {
    layoutBoard(game);
  });
}

startNewGame();
