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