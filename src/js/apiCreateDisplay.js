import Display from './display.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XBIx2qt671Lm11ijDgEw/scores/';
export default class ApiIntegration {
    static createGame = () => {
      const game = {
        name: 'Algorithms Challenge',
      };
      fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
        method: 'POST',
        body: JSON.stringify(game),
        headers: {
          'Content-type': 'application/json; charset= UTF-8',
        },
      });
    }

    static refreshGame = (players, leaderboard) => {
      fetch(url).then((respone) => respone.json()).then((json) => {
        players = json.result;
        Display.displayScores(players, leaderboard);
      });
    }

    static addData = async (data) => {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset= UTF-8',
        },
      });

      const { result } = await res.json();
      return result;
    }
}