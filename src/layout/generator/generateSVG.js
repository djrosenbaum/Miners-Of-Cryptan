const _ = require('lodash');
const { buildHexagons } = require('../svg/buildHexagons.js');
const { buildSegments } = require('../svg/buildSegments.js');
const { buildNodes } = require('../svg/buildNodes.js');

function generateSVG(gameboard) {
  return new Promise((resolve) => {
    const svg = {};
    svg.hexagons = buildHexagons(gameboard);
    svg.segments = buildSegments(gameboard);
    svg.nodes = buildNodes(gameboard);

    resolve(_.merge(gameboard, { svg }));
  });
}

module.exports = {
  generateSVG,
};
