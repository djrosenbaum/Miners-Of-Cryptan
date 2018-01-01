import newGame from './create/newGame';
// import newLayout from './generate/newLayout';
// import generateSVG from './layout/generator/generateSVG';
// import store from './redux/store';
// import appendSVG from './layout/svg/appendSVG';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('play').addEventListener('click', () => {
    document.getElementById('intro').style.display = 'none';
    newGame({
      players: {
        color: 'orange',
        totalPlayers: 3,
      },
    });
  });
});
