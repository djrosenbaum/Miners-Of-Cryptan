import store from '../../redux/store';
import players from '../players';
import tiles from '../tiles';
import hexagons from '../layout/hexagons';

function newGame(settings) {
  store.dispatch({
    type: 'NEW_GAME',
    payload: {
      players: players(settings),
      tiles: tiles(),
      hexagons: hexagons(),
    },
  });
}

export default newGame;


// function startNewGame(settings) {
//   newGame(settings)
// .then(newLayout)
// .then(generateSVG)
// .then(appendSVG)
//     .then(() => {
//       console.log('success!');
//     })
//     .catch(err => console.error(err));
// }
