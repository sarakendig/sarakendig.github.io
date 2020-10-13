// Game Mechanics
const Game = {
    start(playerName) {
        this.reset(playerName);
        this.setupArena();
    },

    reset(playerName) {
        switch (playerName) {
            case "Pikachu":
                player = new Pokemon(playerName, 70, 'pika ball', 30);
                // console.log("Pikachu is made")
                break;
            case "Bulbasaur":
                player = new Pokemon(playerName, 70, 'vine whip', 50);
                // console.log("Bulbasaur is made")
                break;
            case "Eevee":
                player = new Pokemon(playerName, 70, 'bite', 20);
                // console.log("Eevee is made")
                break;
            case "Charmander":
                player = new Pokemon(playerName, 70, 'fire fang', 20);
                // console.log("Charmander is made")
                break;
        }

        changePage('choose', 'main','arena');
        
    },

    setupArena() {
    let grabActionsBox = $('#actionsBox')
    let grabTextBox = $('#textbox')
    let grabEnemyStats = $('#enemystats')
    let grabPlayerStats = $('#playerstats')
    let grabPlayer = $('#player')
    let grabEnemy = $('#enemy')

    
    },

   
}

let changePage = (show, hide, hide2) => {
    div1 = document.getElementById(show);
    div2 = document.getElementById(hide);
    div3 = document.getElementById(hide2);

    div1.style.display = "block";
    div2.style.display = "none";
    div3.style.display = "none";
}

// Pokemon class

class Pokemon {
    constructor(hp, move, damage) {
        this.hp = hp;
        this.move = move;
        this.damage = damage;
    }

    attack(enemy) {
        enemy.hp -= this.move
        enemy.announceHealth()
    }
}

let player;

class Player extends Pokemon {
    constructor(playerName) {
        this.playerName = playerName;
    }

}
let enemy;

class Enemy extends Pokemon {
    constructor(enemyName) {
        this.enemyName = enemyName;
    }
}
// console.log(Game.reset())




// jQuery

$(() => {
    

});


//citing

///css-tricks.com for how to make a div clickable and flexbox use
// https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

// https://code.sololearn.com/W3087wxM8ov3/#js