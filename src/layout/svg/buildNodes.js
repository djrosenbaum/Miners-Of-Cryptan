import _ from 'lodash';

function buildPointsArray(gameboard) {
  return _.uniqWith(_.flattenDepth(gameboard.layout.hexagons
    .map(hexagon => (hexagon.points)), 1), _.isEqual);
}

function buildNodes(gameboard) {
  return buildPointsArray(gameboard).map((point) => {
    const [cx, cy] = point;
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('r', 0.5);
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);

    return circle;
  });
}

export default buildNodes;
