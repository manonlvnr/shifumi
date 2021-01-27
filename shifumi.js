// import { getRoundResult, getFinalScore } from './score';
const { getRoundResult, getFinalScore } = require('./score');
const { Select } = require('enquirer');

const CHOICES = ['rock', 'paper', 'cisors'];

async function getUserChoice() {
  const prompt = new Select({
    name: 'element',
    message: 'chose your element',
    choices: CHOICES.slice(),
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
  var index = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[index];
}

async function continueToPlay() {
  const prompt = new Select({
    name: 'continueToPlay',
    message: 'Do you want to play again ?',
    choices: ['yes', 'no'],
  });

  const response = await prompt
    .run()
    .then((answer) => {
      return answer;
    })
    .catch(console.error);
  if (response === 'yes') {
    return true;
  } else {
    process.exit(0);
  }
}

async function main() {
  let score = { player: 0, computer: 0, roundPlayed: 0 };
  let play = true;
  while (play) {
    const playerResponse = await getUserChoice();
    const computerResponse = getRundomComputerChoice();
    console.log('computer choice: ', computerResponse);
    getRoundResult(playerResponse, computerResponse, score);
    if (score.player === 3 || score.computer === 3) {
      await continueToPlay();
      console.log('\n\n\n');
      score = { player: 0, computer: 0, roundPlayed: 0 };
    }
  }
  getFinalScore(score);
}

main();
