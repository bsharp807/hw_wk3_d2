document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded!');

  const rock = document.querySelector('#rock');
  const paper = document.querySelector('#paper');
  const scissors = document.querySelector('#scissors')
  const outcome = document.querySelector('#result')
  const computerText = document.querySelector('#computers-choice');
  const playerText = document.querySelector('#players-choice');
  const totalWins = document.querySelector('#total');

  let total = 0;

  const addWinsTotal = () => {
    total += 1;
    totalWins.textContent = `Wins So Far: ${total}`;
  }

  const rockThrow = (array) => {
    const computerChoice = rand(array);
    const playerChoice = event.target.value;
    computerText.textContent = `The computer went with ${computerChoice}.`
    playerText.textContent = `You have chosen ${playerChoice}.`
    if(computerChoice != 'rock'){
      if(computerChoice === 'scissors'){
        outcome.textContent = `YOUR WINNER!`
        addWinsTotal();
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
        addWinsTotal();
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
        addWinsTotal();
      } else {outcome.textContent = `YOUR LOSER! BOOO!`};
    } else {outcome.textContent = `DRAW! HOW BORING!`};
  };

  rock.addEventListener('click', (event) => {
    rockThrow(options);
  });

  paper.addEventListener('click', (event) => {
    paperThrow(options);
  });

  scissors.addEventListener('click', (event) => {
    scissorThrow(options);
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
