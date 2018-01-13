import newGame from './create/newGame';

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
