let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
   // Randomly select a choice for the computer
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]; 
}

function playRound(humanChoice, computerChoice){
    // Compare the choices and determine the winner
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return "You win!";
    } else {
        computerScore++;
        return "Computer wins!";
    }
}

function updateScoreboard(result, humanChoice, computerChoice){
    const resultDiv = document.querySelector('.result');
    const scoreDiv = document.querySelector('.score');

    resultDiv.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. ${result}`;
    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5) {
        alert("You win the game!");
        resetGame();
    } else if (computerScore === 5) {
        alert("Computer wins the game!");
        resetGame();
    }
}

function playGame(){
    // Event listener to call the playRound function
    const choices = document.querySelectorAll('.choice');
    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const humanChoice = choice.id;
            const computerChoice = getComputerChoice();
            const result = playRound(humanChoice, computerChoice);
            updateScoreboard(result, humanChoice, computerChoice);
        });
    });
}

playGame();