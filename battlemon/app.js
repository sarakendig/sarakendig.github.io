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
        let grabStart = $(".main");
        grabStart.html(`<h3>YOU CHOOSE:</h3><h5>${playerName}</h5><img src="imgs/player/${playerName.toLowerCase()}.png" class="img-player">`);
        $(".choose").append(grabStart)
        
        
    },

    setupArena() {

    },
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