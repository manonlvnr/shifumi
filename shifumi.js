// étape 1 choix pierre/feuille/ciseaux

const { Select } = require('enquirer'); //require = librairie et entre parenthèse = API de la librairie
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

function choose() {
  var index = Math.floor(Math.random() * choices.length);
  //console.log('choices[index]: ', choices);
  return choices[index];
}

async function main() {
  const playerResponse = await getUserChoice();
  const computerResponse = choose();
  console.log('Computer response :', computerResponse);
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
}

main();
