import _ from 'lodash';
import store from '../../redux/store';
import graphicLocation from '../../config/graphicLocation';
import probability from '../../config/probability';

const ns = 'http://www.w3.org/2000/svg';
let game;

function buildHexagons() {
  game = store.getState();

  return game.layout.hexagons.map((hexagon) => {
    const tile = _.find(game.tiles, { grid: hexagon.coordinate.join('_') });
    const group = document.createElementNS(ns, 'g');

    const polygon = document.createElementNS(ns, 'polygon');
    polygon.setAttribute('points', hexagon.points.join(' '));
    polygon.classList.add('gameTile');
    group.appendChild(polygon);

    const circle = document.createElementNS(ns, 'circle');
    circle.setAttribute('r', 0.5);
    circle.setAttribute('cx', hexagon.centerPoint[0]);
    circle.setAttribute('cy', hexagon.centerPoint[1]);
    circle.classList.add('centerPoint');
    group.appendChild(circle);

    const tileNumber = tile.number;
    if (tileNumber) {
      const text1 = document.createElementNS(ns, 'text');
      text1.setAttribute('x', hexagon.centerPoint[0]);
      text1.setAttribute('y', hexagon.centerPoint[1]);
      text1.setAttribute('dy', 15);
      text1.setAttribute('text-anchor', 'middle');
      text1.classList.add('tileNumber');
      text1.textContent = tileNumber;
      group.appendChild(text1);
    }

    if (probability[tileNumber]) {
      const text2 = document.createElementNS(ns, 'text');
      text2.setAttribute('x', hexagon.centerPoint[0]);
      text2.setAttribute('y', hexagon.centerPoint[1]);
      text2.setAttribute('dy', 20);
      text2.setAttribute('text-anchor', 'middle');
      text2.classList.add('tileProbability');
      text2.textContent = Array(probability[tileNumber]).fill('\u2022').join('');
      group.appendChild(text2);
    }

    if (probability[tileNumber]) {
      const terrain = document.createElementNS(ns, 'image');
      terrain.setAttributeNS('http://www.w3.org/1999/xlink', 'href', graphicLocation[tile.terrain]);
      terrain.setAttribute('width', '35');
      terrain.setAttribute('x', hexagon.centerPoint[0] - 17);
      terrain.setAttribute('y', hexagon.centerPoint[1] - 25);
      terrain.classList.add('tileTerrain');
      group.appendChild(terrain);
    }

    return group;
  });
}

export default buildHexagons;
