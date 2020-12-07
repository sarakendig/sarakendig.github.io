let player = {
    currentChoice: null
};
let computer = {
    currentChoice: null
};

let resultText = document.querySelector("#resultText");

const choice = ["Lapis", "Papyrus", "Scalpellus"];


function computerChooses() {
    randomIndex = Math.floor(Math.random() * choice.length);
    computer.currentChoice = choice[randomIndex];
}

function playerChoosesLapis() {
    console.log("You chose lapis");
    player.currentChoice = choice[0];
    compare();
}

function playerChoosesPapyrus() {
    console.log("You chose papyrus");
    player.currentChoice = choice[1];
    compare();
}

function playerChoosesScalpellus() {
    console.log("You chose scalpellus");
    player.currentChoice = choice[2];
    compare();
}


function compare() {
    computerChooses();
    if (computer.currentChoice === player.currentChoice) {
        showResults("It's a tie! You and Computer both chose " + computer.currentChoice);
    } else if (computer.currentChoice === choice[0]) {
        if (player.currentChoice === choice[1]) {
            showResults("You chose " + player.currentChoice + " Computer chose " + computer.currentChoice + " You win!");
        } else {
            showResults("Computer chose " + computer.currentChoice + " You chose " + player.currentChoice + " Computer wins!");
        }
    } else if (computer.currentChoice === choice[1]) {
        if (player.currentChoice === choice[2]) {
            showResults("You chose " + player.currentChoice + " Computer chose " + computer.currentChoice + " You win!");
        } else {
            showResults("Computer chose " + computer.currentChoice + " You chose " + player.currentChoice + " Computer wins!");
        }
    } else if (computer.currentChoice === choice[2]) {
        if (player.currentChoice === choice[0]) {
            showResults("You chose " + player.currentChoice + " Computer chose " + computer.currentChoice + " You win!");
        }
    } else {
        showResults("Computer chose " + computer.currentChoice + " You chose " + player.currentChoice + " Computer wins!");
    }
}


function showResults(results) {
    resultText.innerText = results;
}

document.querySelector("#Lapis").addEventListener("click", playerChoosesLapis);
document.querySelector("#Papyrus").addEventListener("click", playerChoosesPapyrus);
document.querySelector("#Scalpellus").addEventListener("click", playerChoosesScalpellus);

compare();