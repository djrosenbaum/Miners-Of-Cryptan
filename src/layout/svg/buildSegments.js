import _ from 'lodash';

function buildSegmentsArray(gameboard) {
  const segmentArray = _.flattenDepth(gameboard.layout.hexagons.map((hexagon) => {
    const [p1, p2, p3, p4, p5, p6] = hexagon.points;
    return [
      [p1, p2],
      [p2, p3],
      [p3, p4],
      [p4, p5],
      [p5, p6],
      [p6, p1],
    ];
  }), 1);

  return _.uniqBy(segmentArray, (segment) => {
    const segmentCopy = _.clone(segment);
    return _.flatten(segmentCopy).sort().join(',');
  });
}

function buildSegments(gameboard) {
  return buildSegmentsArray(gameboard).map((segment) => {
    const [x1, y1] = segment[0];
    const [x2, y2] = segment[1];
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    return line;
  });
}

export default buildSegments;
