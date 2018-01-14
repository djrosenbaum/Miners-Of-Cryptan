import React from 'react';
import ReactDOM from 'react-dom';
import App from './react/App';
// import newGame from './create/newGame';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('play').addEventListener('click', () => {
//     newGame({
//       players: {
//         color: 'orange',
//         totalPlayers: 3,
//       },
//     });
//   });
// });
