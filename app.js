const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
}
const players = [p1, p2];

const resetButton = document.querySelector('#resetButton');
const winningScoreSelector = document.querySelector('#winningScore');
let winningScore = parseInt(winningScoreSelector.value);
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver && player.score < winningScore) {
        player.score += 1;
        player.display.textContent = player.score;
    }
    if (player.score === winningScore) {
        isGameOver = true;
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
}

function reset() {
    isGameOver = false;
    for (let player of players) {
        player.score = 0;
        player.display.textContent = 0;
        player.display.classList.remove('has-text-success', 'has-text-danger');
        player.button.disabled = false;
    }
}

p1.button.addEventListener('click', function() {
    updateScores(p1, p2);
})
p2.button.addEventListener('click', function() {
    updateScores(p2, p1);
})

resetButton.addEventListener('click', reset);

winningScoreSelector.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})
