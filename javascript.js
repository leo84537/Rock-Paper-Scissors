console.log("YESSSIR");
let humanScore = 0;
let machineScore = 0;

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random()*3);
    return choices[random];
}

function getHumanChoice(){
    const decision = prompt("Dude pick your choice already (rock, paper, or scissors?)");
    return decision;
}

function initiateRound(human, machine){
    human = human.toLowerCase();
    machine = machine.toLowerCase();
    
    switch (human){
        case "rock":
            if (machine == "paper") {
                machineScore++;
                console.log("YOU LOST BOZO!");
            } else if (machine == "scissors") {
                humanScore++;
                console.log("bro got lucky lol +1");
            } else {
                console.log("boooooring, its a tie...");
            }
            break;
        case "paper":
            if (machine == "scissors") {
                machineScore++;
                console.log("YOU LOST BOZO!");
            } else if (machine == "rock") {
                humanScore++;
                console.log("bro got lucky lol +1");
            } else {
                console.log("boooooring, its a tie...");
            }
            break;
        case "scissors":
            if (machine == "rock") {
                machineScore++;
                console.log("YOU LOST BOZO!");
            } else if (machine == "paper") {
                humanScore++;
                console.log("bro got lucky lol +1");
            } else {
                console.log("boooooring, its a tie...");
            }
            break;
    }
}


let compdecision = getComputerChoice();
let humandecision = getHumanChoice();

console.log(`COMPUTER: ${compdecision}`);
console.log(`HUMAN: ${humandecision}`);
initiateRound(humandecision, compdecision);
