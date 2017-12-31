import _ from 'lodash';
import game from '../../game/game';

function appendSVG() {
  return new Promise((resolve) => {
    const catan = document.getElementById('catan');

    _.each(game.svg.hexagons, (group) => {
      catan.appendChild(group);
    });

    _.each(game.svg.segments, (segment) => {
      catan.appendChild(segment);
    });

    _.each(game.svg.nodes, (node) => {
      catan.appendChild(node);
    });

    resolve(game);
  });
}

export default appendSVG;
