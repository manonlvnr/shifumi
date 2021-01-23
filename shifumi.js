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
  console.log('choices[index]: ', choices);
  return choices[index];
}

async function main() {
  const playerResponse = await getUserChoice();
  const computerResponse = choose();
  console.log('Computer response :', computerResponse);
}

main();
