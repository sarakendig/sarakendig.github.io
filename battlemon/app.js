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
        // let grabStart = $(".main");
        // // grabStart.html(`<h3>YOU CHOOSE:</h3><br><h5>${playerName}</h5><br><img src="imgs/player/${playerName.toLowerCase()}.png" class="img-player">`);
        
        // let h31 = $('<h1>').text("YOU CHOOSE ")
        // let pokemon = $('<h3>').text(` ${playerName.toUpperCase()}`)
        // grabStart.html(`<img src="imgs/player/${playerName.toLowerCase()}.png" class="img-player">`)
        // $(grabStart).append(h31)
        // $(grabStart).append(pokemon)
        // $(".choose").append(grabStart)
        
        
    },

    setupArena() {

    },

    changePage (show, hide, hide2) {
        div1 = document.getElementById(show);
        div2 = document.getElementById(hide);
        div3 = document.getElementById(hide2);

        div.style.display = "block";
        div.style.display = "none";
    }
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