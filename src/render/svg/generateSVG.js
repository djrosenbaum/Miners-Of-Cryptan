import buildHexagons from './buildHexagons';
import buildSegments from './buildSegments';
import buildNodes from './buildNodes';

function generateSVG() {
  return {
    hexagons: buildHexagons(),
    segments: buildSegments(),
    nodes: buildNodes(),
  };
}

export default generateSVG;
