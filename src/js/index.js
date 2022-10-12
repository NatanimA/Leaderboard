import '../index.css';
import ApiIntegration from './apiCreateDisplay.js';

const scoreTable = document.querySelector('#sores-table');
const refreshButton = document.querySelector('#refresh-btn');
const form = document.querySelector('form');
const playerName = document.getElementById('playerName');
const playerScore = document.getElementById('playerScore');

let players;
ApiIntegration.refreshGame(players, scoreTable);

refreshButton.addEventListener('click', () => {
  ApiIntegration.refreshGame(players, scoreTable);
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = playerName.value;
  const point = playerScore.value;

  const playerScores = {
    user: name,
    score: point,
  };

  await ApiIntegration.addData(playerScores);
  await ApiIntegration.refreshGame(playerScores, scoreTable);
  form.reset();
});