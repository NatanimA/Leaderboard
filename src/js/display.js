export default class Display {
    static sortingFunction = (a, b) => parseFloat(b.score) - parseFloat(a.score)

    static displayScores = (player, display) => {
      const scores = player.sort(this.sortingFunction);
      display.innerHTML = '';
      scores.forEach((element) => {
        display.innerHTML += `<span class="score">${element.user}: ${element.score}</span>`;
      });
    }
}