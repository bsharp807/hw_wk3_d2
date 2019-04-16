document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded!');

  const rock = document.querySelector('#rock');
  const paper = document.querySelector('#paper');
  const scissors = document.querySelector('#scissors')
  const outcome = document.querySelector('#result')
  const computerText = document.querySelector('#computers-choice');
  const playertText = document.querySelector('#players-choice');


  rock.addEventListener('click', (event) => {
    const computerChoice = rand(options);
    const playerChoice = event.target.value;
    const outcome = document.querySelector('#result')
    document.querySelector('#computers-choice').textContent = `The computer went with ${computerChoice}.`
    document.querySelector('#players-choice').textContent = `You have chosen ${playerChoice}.`
    if(computerChoice != 'rock'){
      if(computerChoice === 'scissors'){
        outcome.textContent = `YOUR WINNER!`
      } else {outcome.textContent = `YOUR LOSER! BOOO!`};
    } else {outcome.textContent = `DRAW! HOW BORING!`};
  });
  paper.addEventListener('click', (event) => {
    const computerChoice = rand(options);
    const playerChoice = event.target.value;
    const outcome = document.querySelector('#result')
    document.querySelector('#computers-choice').textContent = `The computer went with ${computerChoice}.`
    document.querySelector('#players-choice').textContent = `You have chosen ${playerChoice}.`
    if(computerChoice != 'paper'){
      if(computerChoice === 'rock'){
        outcome.textContent = `YOUR WINNER!`
      } else {outcome.textContent = `YOUR LOSER! BOOO!`};
    } else {outcome.textContent = `DRAW! HOW BORING!`};
  });
  scissors.addEventListener('click', (event) => {
    const computerChoice = rand(options);
    const playerChoice = event.target.value;
    const outcome = document.querySelector('#result')
    document.querySelector('#computers-choice').textContent = `The computer went with ${computerChoice}.`
    document.querySelector('#players-choice').textContent = `You have chosen ${playerChoice}.`
    if(computerChoice != 'scissors'){
      if(computerChoice === 'paper'){
        outcome.textContent = `YOUR WINNER!`
      } else {outcome.textContent = `YOUR LOSER! BOOO!`};
    } else {outcome.textContent = `DRAW! HOW BORING!`};
  });
});

const options = ['rock', 'paper', 'scissors'];

const rand = (array) => {
  return array[Math.floor((Math.random() * Math.floor(array.length)))];
};

/*
const rockThrow = (array) => {
  const computerChoice = rand(array);
  const playerChoice = event.target.value;
  computerText.textContent = `The computer went with ${computerChoice}.`
  playerText.textContent = `You have chosen ${playerChoice}.`
  if(computerChoice != 'rock'){
    if(computerChoice === 'scissors'){
      outcome.textContent = `YOUR WINNER!`
    } else {outcome.textContent = `YOUR LOSER! BOOO!`};
  } else {outcome.textContent = `DRAW! HOW BORING!`};
};

const scissorThrow = (array) => {
  const computerChoice = rand(options);
  const playerChoice = event.target.value;
  computerText.textContent = `The computer went with ${computerChoice}.`
  playerText.textContent = `You have chosen ${playerChoice}.`
  if(computerChoice != 'scissors'){
    if(computerChoice === 'paper'){
      outcome.textContent = `YOUR WINNER!`
    } else {outcome.textContent = `YOUR LOSER! BOOO!`};
  } else {outcome.textContent = `DRAW! HOW BORING!`};
};

const paperThrow = (array) => {
  const computerChoice = rand(options);
  const playerChoice = event.target.value;
  computerText.textContent = `The computer went with ${computerChoice}.`
  playerText.textContent = `You have chosen ${playerChoice}.`
  if(computerChoice != 'paper'){
    if(computerChoice === 'rock'){
      outcome.textContent = `YOUR WINNER!`
    } else {outcome.textContent = `YOUR LOSER! BOOO!`};
  } else {outcome.textContent = `DRAW! HOW BORING!`};
}
*/
