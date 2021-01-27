function getRoundResult(playerResponse, computerResponse, score) {
  score.roundPlayed = score.roundPlayed + 1;
  if (playerResponse === computerResponse) {
    console.log('Draw!');
  } else if (
    (playerResponse === 'rock' && computerResponse === 'cisors') ||
    (playerResponse === 'cisors' && computerResponse === 'paper') ||
    (playerResponse === 'paper' && computerResponse === 'rock')
  ) {
    score.player = score.player + 1;
    console.log('Player wins this round!');
  } else {
    score.computer = score.computer + 1;
    console.log('Computer wins this round!');
  }
  return score;
}

function getFinalScore(score) {
  if (score.player === 3) {
    console.log('You win !');
  } else if (score.computer === 3) {
    console.log('You lose !');
  }
}

module.exports = {
  getFinalScore,
  getRoundResult,
};
