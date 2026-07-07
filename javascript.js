console.log("YESSSIR");
let humanScore = 0;
let machineScore = 0;

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random()*3);
    return choices[random];
}

function getHumanChoice(){
    let decision = prompt("Dude pick your choice already (rock, paper, or scissors?)");
    const choices = ["rock", "paper", "scissors"];
    if (!(choices.includes(decision.toLowerCase()))){
        decision = tryAgain();
    }
    return decision;
}

function tryAgain(){
    let decision = prompt("Try again bozo, bro cannot spell (rock, paper, or scissors?)");
    const choices = ["rock", "paper", "scissors"];
    if (!(choices.includes(decision.toLowerCase()))){
        console.log("Try again bozo, bro cannot spell");
        decision = tryAgain();
    }
    return decision;
}
const roundres = document.querySelector(".roundresult");

function initiateRound(human, machine){
    human = human.toLowerCase();
    machine = machine.toLowerCase();
    
    switch (human){
        case "rock":
            if (machine == "paper") {
                machineScore++;
                roundres.textContent = "YOU LOST BOZO!";
            } else if (machine == "scissors") {
                humanScore++;
                roundres.textContent = "bro got lucky lol +1";
            } else {
                roundres.textContent = "boooooring, its a tie...";
            }
            break;
        case "paper":
            if (machine == "scissors") {
                machineScore++;
                roundres.textContent = "YOU LOST BOZO!";
            } else if (machine == "rock") {
                humanScore++;
                roundres.textContent = "bro got lucky lol +1";
            } else {
                roundres.textContent = "boooooring, its a tie...";
            }
            break;
        case "scissors":
            if (machine == "rock") {
                machineScore++;
                roundres.textContent = "YOU LOST BOZO!";
            } else if (machine == "paper") {
                humanScore++;
                roundres.textContent = "bro got lucky lol +1";
            } else {
                roundres.textContent = "boooooring, its a tie...";
            }
            break;
    }
}

function playGame(){
    for (let i = 0; i <=4; i++){
        let compdecision = getComputerChoice();
        let humandecision = getHumanChoice();
        console.log(`COMPUTER: ${compdecision}`);
        console.log(`HUMAN: ${humandecision}`);
        initiateRound(humandecision, compdecision);
    }
    if (humanScore > machineScore) {
        console.log("bro actually won lol");
        console.log(`Your score: ${humanScore} and your opponent's: ${machineScore} `);
    } else {
        console.log("you did not win loser, why did you think you would win LOL!");
        console.log(`Your score: ${humanScore} and your opponent's: ${machineScore} `);
    }
    console.log("END GAME");
}

const gameres = document.querySelector(".gameresult");
const finalscore = document.querySelector(".finalscore");

function checkEndGame(){
    if (Math.max(humanScore, machineScore) === 5){
        if (humanScore > machineScore) {
            gameres.textContent = "bro actually won lol";
            finalscore.textContent = `Your score: ${humanScore} and your opponent's: ${machineScore} `;
        } else {
            gameres.textContent = "you did not win loser, why did you think you would win LOL!";
            finalscore.textContent = `Your score: ${humanScore} and your opponent's: ${machineScore} `;
        }
    }
}

const rockbutton = document.querySelector(".rock");
const paperbutton = document.querySelector(".paper");
const scissorsbutton = document.querySelector(".scissors");

const user = document.querySelector(".userscore");
const computer = document.querySelector(".computerscore");
const userchoice = document.querySelector(".userchoice");
const computerchoice = document.querySelector(".computerchoice");

rockbutton.addEventListener('click', function(e){
    console.log("rock button clicked");
    e.preventDefault();
    const c = getComputerChoice();
    initiateRound("rock", c);
    user.textContent = "Your Score: " + String(humanScore);
    computer.textContent = "Robot Score: " + String(machineScore);
    userchoice.textContent = "Your Choice: Rock";
    computerchoice.textContent = `Computer Choice: ${c}`;
    checkEndGame();
    
})
paperbutton.addEventListener('click', function(e){
    console.log("paper button clicked");
    e.preventDefault();
    const c = getComputerChoice();
    initiateRound("paper",c);
    user.textContent = "Your Score: " + String(humanScore);
    computer.textContent = "Robot Score: " + String(machineScore);
    userchoice.textContent = "Your Choice: Paper";
    computerchoice.textContent = `Computer Choice: ${c}`;
    checkEndGame();
})
scissorsbutton.addEventListener('click', function(e){
    console.log("scissors button clicked");
    e.preventDefault();
    const c = getComputerChoice();
    initiateRound("scissors",c);
    user.textContent = "Your Score: " + String(humanScore);
    computer.textContent = "Robot Score: " + String(machineScore);
    userchoice.textContent = "Your Choice: Scissors";
    computerchoice.textContent = `Computer Choice: ${c}`;
    checkEndGame();
})



