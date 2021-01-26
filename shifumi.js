const { Select } = require('enquirer');
const choices = ['rock', 'paper', 'cisors'];

async function getUserChoice() {
  const prompt = new Select({
    name: 'element',
    message: 'chose your element',
    choices: choices.slice(),
  });

  const response = await prompt
    .run()
    .then((answer) => {
      return answer;
    })
    .catch(console.error);
  return response;
}

function getRundomComputerChoice() {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

let playerWinRound = 'Player wins this round!';
let computerWinRound = 'Computer wins this round!';
let draw = 'Draw!';

function getRoundResult(playerResponse, computerResponse) {
  if (playerResponse === computerResponse) {
    return draw;
  } else if (
    (playerResponse === 'rock' && computerResponse === 'cisors') ||
    (playerResponse === 'cisors' && computerResponse === 'paper') ||
    (playerResponse === 'paper' && computerResponse === 'rock')
  ) {
    return playerWinRound;
  } else return computerWinRound;
}
let round = 0;
let playerScore = 0;
let computerScore = 0;
let playerWinGame = 'Player wins the game! Congratulations!';
let computerWinGame = 'Computer wins the game! Congratulations!';

function getRoundScore(resultRound) {
  round++;
  if (resultRound === playerWinRound) {
    return playerScore++;
  } else if (resultRound === draw) {
    return playerScore++ && computerScore++;
  } else {
    return computerScore++;
  }
}

function getFinalScore(playerScore, computerScore) {
  if (playerScore === 3) {
    return playerWinGame;
  } else if (computerScore === 3) {
    return computerWinGame;
  }
}

async function main() {
  const playerResponse = await getUserChoice();
  const computerResponse = getRundomComputerChoice();
  console.log('computer choice: ', getRundomComputerChoice());
  const roundResult = getRoundResult();
  console.log('round result :', getRoundResult());
}

main();
