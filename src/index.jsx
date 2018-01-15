import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './react/app.jsx';
import store from './redux/store';
// import newGame from './create/newGame';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
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
