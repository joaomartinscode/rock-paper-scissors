let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
   // Randomly select a choice for the computer
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]; 
}

function getHumanChoice(){
    // Get the user choice from the keyboard
    let userChoice;
    do {
        userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    } while (!['rock', 'paper', 'scissors'].includes(userChoice));
    return userChoice;
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

function playGame(){
    // Play the game for 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`Round ${i + 1}:`);
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    // Determine the overall winner
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("Computer is the overall winner!");
    } else {
        console.log("It's an overall tie!");
    }
}

playGame();