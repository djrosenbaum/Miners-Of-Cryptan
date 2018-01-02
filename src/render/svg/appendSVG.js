import _ from 'lodash';

function appendSVG(svg) {
  const catan = document.getElementById('catan');

  _.each(svg.hexagons, (group) => {
    catan.appendChild(group);
  });

  _.each(svg.segments, (segment) => {
    catan.appendChild(segment);
  });

  _.each(svg.nodes, (node) => {
    catan.appendChild(node);
  });
}

export default appendSVG;
