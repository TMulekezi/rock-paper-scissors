function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1);

    if (choice === 1) {
        return "paper";
    } else if (choice === 2) {
        return "rock";
    } else {
        return "scissors";
    }
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.trim().toLowerCase();
    if (playerChoice === computerChoice) {
        console.log(`Draw! Both players picked ${playerChoice}`);
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            console.log(`You Loose! ${computerChoice} beats ${playerChoice}`);
        } else {
            console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log(`You Loose! ${computerChoice} beats ${playerChoice}`);
        } else {
            console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
        }
    } else if (playerChoice === "scissors"){
        if (computerChoice === "rock") {
            console.log(`You Loose! ${computerChoice} beats ${playerChoice}`);
        } else {
            console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
        }
    } else {
        console.log("Invalid player selection");
    }
}

function game() {
    for (let i = 0; i < 5; i ++) {
        let userInput = prompt("Rock Paper Scissors?")
        playRound(userInput, getComputerChoice());
    }
}

game();
