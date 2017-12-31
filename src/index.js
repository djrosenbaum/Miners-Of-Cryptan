import game from './game/game';
import generateNewGame from './generators/generateNewGame';
import generateNewLayout from './layout/generator/generateNewLayout';
import generateSVG from './layout/generator/generateSVG';
import initStore from './redux/store/initStore';
import appendSVG from './layout/svg/appendSVG';

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
    .then(() => {
      console.log('success!');
      console.log(game);

      game.store.dispatch({
        type: 'ADD_SETTLEMENT',
        index: 0,
        coordinate: [169.9, 55],
      });
    });
}

document.addEventListener('DOMContentLoaded', () => {
  startNewGame();
});
