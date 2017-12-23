const helper = require('../helpers/helpers.js');
const { terrains } = require('../../src/components/terrain/terrain.js');
const assert = require('assert');

describe('Terrains', function describeTerrains() {
  describe('Terrain Deck', function describeTerrainDeck() {
    function checkTotal(terrainType, total) {
      assert.equal(helper.countTotal(terrains.tiles, terrainType), total);
    }

    it('Should have 19 total terrain tiles', function test() {
      assert.equal(terrains.tiles.length, 19);
    });

    it('Should have 3 hills', function test() {
      checkTotal('hill', 3);
    });

    it('Should have 4 forests', function test() {
      checkTotal('forest', 4);
    });

    it('Should have 3 mountains', function test() {
      checkTotal('mountain', 3);
    });

    it('Should have 4 fields', function test() {
      checkTotal('field', 4);
    });

    it('Should have 4 pastures', function test() {
      checkTotal('pasture', 4);
    });

    it('Should have 1 desert', function test() {
      checkTotal('desert', 1);
    });
  });
});
