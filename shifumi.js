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
function getResult(playerResponse, computerResponse) {
  let result;
  if (playerResponse === computerResponse) {
    result = 'Equality';
  } else if (
    (playerResponse === 'rock' && computerResponse === 'cisors') ||
    (playerResponse === 'cisors' && computerResponse === 'paper') ||
    (playerResponse === 'paper' && computerResponse === 'rock')
  ) {
    result = 'You won !';
  } else result = 'You lose ...';
  console.log('Round result :', result);
  return result;
}
async function main() {
  const playerResponse = await getUserChoice();
  const computerResponse = getRundomComputerChoice();
  const result = getResult();
}

main();
