function buildHexagons(gameboard) {
  return gameboard.layout.hexagons.map((hexagon) => {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon.setAttribute('points', hexagon.points.join(' '));

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('r', 0.5);
    circle.setAttribute('cx', hexagon.centerPoint[0]);
    circle.setAttribute('cy', hexagon.centerPoint[1]);

    group.appendChild(polygon);
    group.appendChild(circle);

    return group;
  });
}

module.exports = {
  buildHexagons,
};
