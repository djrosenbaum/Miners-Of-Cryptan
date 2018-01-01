import _ from 'lodash';

const excludedCoordinates = ['0_0', '0_4', '4_0', '4_1', '4_3', '4_4'];

function generateGrid(columns, rows) {
  return _.flatten(_.times(columns, column => (
    _.times(rows, row => (
      [column, row]
    )).filter(val => (
      excludedCoordinates.indexOf(val.join('_')) === -1
    ))
  )));
}

export default generateGrid;
