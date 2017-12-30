import _ from 'lodash';
import buildHexagons from '../svg/buildHexagons';
import buildSegments from '../svg/buildSegments';
import buildNodes from '../svg/buildNodes';

function generateSVG(gameboard) {
  return new Promise((resolve) => {
    const svg = {};
    svg.hexagons = buildHexagons(gameboard);
    svg.segments = buildSegments(gameboard);
    svg.nodes = buildNodes(gameboard);

    resolve(_.merge(gameboard, { svg }));
  });
}

export default generateSVG;
