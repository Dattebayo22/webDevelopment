const buttons = document.querySelectorAll('.myButton');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const playerChoice = document.getElementById('playerChoice');
const computerChoice = document.getElementById('computerChoice');
const result = document.getElementById('result');
let urWeapon;
let urpoints=0;
let computerpoints = 0;
const weapons = ["rock", "paper", "scissors"];

function selection(select) {
    if (select === "rock") {
        urWeapon = "rock";
    } else if (select === "paper") {
        urWeapon = "paper";
    } else {
        urWeapon = "scissors";
    }
    const computerWeapon = weapons[Math.floor(Math.random() * 3)];
    playerChoice.innerHTML = `Player: ${urWeapon.toUpperCase()}`;
    computerChoice.innerHTML = `Computer: ${computerWeapon.toUpperCase()}`;
    if (urWeapon === computerWeapon) {
        result.innerHTML = "Draw";
    } else if (urWeapon === "rock" && computerWeapon === "paper") {
        result.innerHTML = "You Win";
        urpoints+=1;
        playerScore.innerHTML = `Player Score: ${urpoints}`;
    } else if (urWeapon === "paper" && computerWeapon === "scissors") {
        result.innerHTML = "You Win";
        urpoints+=1;
        playerScore.innerHTML = `Player Score: ${urpoints}`;
    } else if (urWeapon === "scissors" && computerWeapon === "rock") {
        result.innerHTML = "You Win";
        urpoints+=1;
        playerScore.innerHTML = `Player Score: ${urpoints}`;
    } else {
        result.innerHTML = "You Lose";
        computerpoints+=1;
        computerScore.innerHTML = `Computer Score: ${computerpoints}`;
    }
}
buttons.forEach((button) => {
    button.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'hsl(180, 100%, 90%)';
    });
});

buttons.forEach((button) => {
    button.addEventListener('mouseout', (e) => {
        e.target.style.backgroundColor = 'hsl(180, 100%, 70%)';
    });
});

