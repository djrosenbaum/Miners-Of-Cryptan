const _ = require('lodash');

function generateTerrainTiles(terrains) {
  const terrainArray = [];
  _.forEach(terrains, function forEach(terrain, key) {
    _.times(terrain.total, function times() {
      terrainArray.push(key);
    });
  });
  return _.shuffle(terrainArray);
}

const terrains = {
  hill: {
    total: 3,
    produces: 'brick'
  },
  forest: {
    total: 4,
    produces: 'wood'
  },
  mountain: {
    total: 3,
    produces: 'stone'
  },
  field: {
    total: 4,
    produces: 'wheat'
  },
  pasture: {
    total: 4,
    produces: 'sheep'
  },
  desert: {
    total: 1
  }
};

terrains.tiles = generateTerrainTiles(terrains);

module.exports = {
  terrains
};
