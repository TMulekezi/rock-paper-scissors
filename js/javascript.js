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
    const result = document.querySelector('.result');
    if (playerChoice === computerChoice) {
        console.log(`Draw! Both players picked ${playerChoice}`);
        result.textContent = `Draw! Both players picked ${playerChoice}`;
        return 3;
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            console.log(`You Loose! ${computerChoice} beats ${playerChoice}`);
            result.textContent = `You Loose! ${computerChoice} beats ${playerChoice}`;
            return 2;
        } else {
            console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
            result.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
            return 1;
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log(`You Loose! ${computerChoice} beats ${playerChoice}`);
            result.textContent = `You Loose! ${computerChoice} beats ${playerChoice}`;
            return 2;
        } else {
            console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
            result.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
            return 1;
        }
    } else if (playerChoice === "scissors"){
        if (computerChoice === "rock") {
            console.log(`You Loose! ${computerChoice} beats ${playerChoice}`);
            result.textContent = `You Loose! ${computerChoice} beats ${playerChoice}`;
            return 2;
        } else {
            console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
            result.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
            return 1;
        }
    } else {
        console.log("Invalid player selection");
    }
}





function setImage(image, player) {
    const actor = document.querySelector(`.${player}`);
    
    if (actor.classList.contains("active")) {
        
        const img = document.querySelector(`.${player} .image`);
        img.src = `images/${image}.jpeg`;
        img.alt = `image of ${image}`;
        return;
    }
    
    const img = document.createElement('img');
    img.classList.add("image");
    img.src = `images/${image}.jpeg`;
    img.alt = `image of ${image}`;
    img.setAttribute("style", "height: 70px; width: 70px");

    actor.appendChild(img);
    actor.classList.toggle("active");
}


function play(e) {
    let word = this.classList.value;
    const choices = word.split(" ");
    let playerChoice = choices[1];
    let computerChoice = getComputerChoice();
    setImage(computerChoice,"computer");
    setImage(playerChoice, "player");
    incrementScore(playerScore, computerScore, playRound(playerChoice, computerChoice));
}

function incrementScore(playerScore, computerScore, result) {
    if (result === 1) {

    } else if (result === 2) {

    }
}

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', play));

