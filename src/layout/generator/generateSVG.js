import game from '../../game/game';
import buildHexagons from '../svg/buildHexagons';
import buildSegments from '../svg/buildSegments';
import buildNodes from '../svg/buildNodes';

function generateSVG() {
  game.svg = {
    hexagons: buildHexagons(),
    segments: buildSegments(),
    nodes: buildNodes(),
  };
}

export default generateSVG;
