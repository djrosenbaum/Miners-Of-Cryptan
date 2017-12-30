import _ from 'lodash';

function appendSVG(gameboard) {
  return new Promise((resolve) => {
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

    resolve(gameboard);
  });
}

export default appendSVG;
