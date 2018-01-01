import generateNewGame from './generators/generateNewGame';
import generateNewLayout from './layout/generator/generateNewLayout';
import generateSVG from './layout/generator/generateSVG';
import store from './redux/store';
import appendSVG from './layout/svg/appendSVG';

function startNewGame(settings) {
  generateNewGame(settings)
    .then(generateNewLayout)
    .then(generateSVG)
    .then(appendSVG)
    .then(() => {
      console.log('success!');
      console.log(store);
    })
    .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('play').addEventListener('click', () => {
    document.getElementById('intro').style.display = 'none';
    // store.dispatch({
    //   type: 'START_NEW_GAME',
    //   settings: {
    //     color: 'orange',
    //     totalPlayers: 3,
    //   },
    // });
    startNewGame({
      players: {
        color: 'orange',
        totalPlayers: 3,
      },
    });
  });
});
