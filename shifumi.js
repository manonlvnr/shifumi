// étape 1 choix pierre/feuille/ciseaux

const { Select } = require('enquirer'); //require = librairie et entre parenthèse = API de la librairie

async function getUserChoice() {
  const prompt = new Select({
    name: 'element',
    message: 'chose your element',
    choices: ['rock', 'paper', 'cisors'],
  });

  const response = await prompt
    .run()
    .then((answer) => {
      return answer;
    })
    .catch(console.error);
  return response;
}

async function main() {
  const response = await getUserChoice();
  //console.log('response: ', response);
}

main();
