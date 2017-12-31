import _ from 'lodash';
import game from '../../game/game';
import buildHexagons from '../svg/buildHexagons';
import buildSegments from '../svg/buildSegments';
import buildNodes from '../svg/buildNodes';

function generateSVG() {
  return new Promise((resolve) => {
    const svg = {};
    svg.hexagons = buildHexagons();
    svg.segments = buildSegments();
    svg.nodes = buildNodes();

    _.merge(game, { svg });

    resolve(game);
  });
}

export default generateSVG;
