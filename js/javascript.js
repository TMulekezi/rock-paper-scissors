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
        img.src = `images/${image}.gif`;
        img.alt = `image of ${image}`;
        return;
    }
    
    const img = document.createElement('img');
    img.classList.add("image");
    img.src = `images/${image}.gif`;
    img.alt = `image of ${image}`;
    img.setAttribute("style", "height: 70px; width: 70px");

    actor.appendChild(img);
    actor.classList.toggle("active");
}


function play(e) {
    const outcome = document.querySelector('.result');
    if (gameOver) {
        buttons.forEach(button => button.removeEventListener('click', play));
        
        const stage = document.querySelector(".stage");
        while (stage.firstChild) {
            stage.removeChild(stage.lastChild);
        }
        stage.textContent = "Click replay to play again";
        stage.setAttribute("style", "justify-content: center; align-items: center; gap: 10px");
        stage.appendChild(refresh);
        return;
    } 
    

    let word = this.classList.value;
    const choices = word.split(" ");
    let playerChoice = choices[1];
    let computerChoice = getComputerChoice();
    setImage(computerChoice,"computer");
    setImage(playerChoice, "player");
    
    let result = playRound(playerChoice, computerChoice);
    if (result === 1) {
        playerScore++;
    } else if (result === 2) {
        computerScore++;
    } else {
        //do nothing
    }

    const scoreboard = document.querySelector(".score-board");
    scoreboard.textContent = `Score: ${playerScore} - ${computerScore}`;

    
    if (playerScore === 5) {
        outcome.textContent = "You Win!!!";
        gameOver = true;
    } else if (computerScore === 5) {
        outcome.textContent = "You Loose :(";
        gameOver = true;
    }
    
}



let playerScore = 0;
let computerScore = 0;
let gameOver = false;




const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', play));

const refresh = document.createElement("button");
refresh.textContent = "Replay";
refresh.style.width = "60px";
refresh.style.height = "30px";

refresh.addEventListener("click",  function() {
    document.location.reload();
})
