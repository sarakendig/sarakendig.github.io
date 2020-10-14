// Game Mechanics
const Game = {
    start(playerName) {
        this.reset(playerName);
        this.setupArena(playerName);
    },

    reset(playerName) {
        switch (playerName) {
            case "Pikachu":
                player = new Pokemon(playerName, 70, "pika ball", 30);
                // console.log("Pikachu is made")
                break;
            case "Bulbasaur":
                player = new Pokemon(playerName, 70, "vine whip", 50);
                // console.log("Bulbasaur is made")
                break;
            case "Eevee":
                player = new Pokemon(playerName, 70, "bite", 20);
                // console.log("Eevee is made")
                break;
            case "Charmander":
                player = new Pokemon(playerName, 70, "fire fang", 20);
                // console.log("Charmander is made")
                break;
        };
        let getChoose = $(".pokemonimg");
        getChoose.html(
            `<img src="imgs/player/${playerName.toLowerCase()}.png" class="img-player">`
        );
        $(".choose").append(getChoose);
        $('#start-game').on('click', () =>{
            changePage('arena','main','choose');
            this.setupArena();
        })

        changePage("choose", "main", "arena");
    },

    setupArena(playerName) {
        switch (playerName) {
            case "Pikachu":
                player = new Pokemon(playerName, 70, "pika ball", 30);
                // console.log("Pikachu is made")
                break;
            case "Bulbasaur":
                player = new Pokemon(playerName, 70, "vine whip", 50);
                // console.log("Bulbasaur is made")
                break;
            case "Eevee":
                player = new Pokemon(playerName, 70, "bite", 20);
                // console.log("Eevee is made")
                break;
            case "Charmander":
                player = new Pokemon(playerName, 70, "fire fang", 20);
                // console.log("Charmander is made")
                break;
        };
        
        grabActionsBox = $("#actionsBox");
        grabTextBox = $("#textbox");
        grabEnemyStats = $("#enemystats");
        grabPlayerStats = $("#playerstats");
        grabPlayer = $(".playerimg");
        grabEnemy = $(".enemyimg");


        //populate  actions box


        //populate text box, pokemon attacked and did X damage.


        //populate  player pokemon image
        grabPlayer.html(`<img src="imgs/player/${playerName.toLowerCase()}back.png" class="img-player">`
        );

        $(".playerimg").append(grabPlayer)
        $("#player").append(".playerimg")

        //populate  player stats




        //populate  enemy pokemon image
        

        //populate  enemy stats
    },

    generateEnemy(enemyName) {
        switch (enemyName) {
            case "Mew":
                enemy = new Pokemon(enemyName, 80, "psy bolt", 15);
                // console.log("Pikachu is made")
                break;
            case "Tentacool":
                enemy = new Pokemon(enemyName, 60, "wrap", 10);
                // console.log("Bulbasaur is made")
                break;
            case "Vulpix":
                enemy = new Pokemon(enemyName, 70, "flare", 20);
                // console.log("Eevee is made")
                break;
            case "Combusken":
                enemy = new Pokemon(enemyName, 70, "smash kick", 20);
                // console.log("Charmander is made")
                break;
        };
    }
};

let changePage = (show, hide, hide2) => {
    div1 = document.getElementById(show);
    div2 = document.getElementById(hide);
    div3 = document.getElementById(hide2);

    div1.style.display = "block";
    div2.style.display = "none";
    div3.style.display = "none";
};

// Pokemon class

class Pokemon {
    constructor(hp, move, damage) {
        this.hp = hp;
        this.move = move;
        this.damage = damage;
    }

    attack(enemy) {
        enemy.hp -= this.move;
        enemy.announceHealth();
    }
}

// player

let player;

class Player extends Pokemon {
    constructor(playerName) {
        this.playerName = playerName;
    }
}


//enemy

let enemy;

class Enemy extends Pokemon {
    constructor(enemyName) {
        this.enemyName = enemyName;
    }
}

const enemies = ['mew', 'combusken', 'tentacool', 'vulpix']




// console.log(Game.reset())

// jQuery

$(() => {});

//citing

///css-tricks.com for how to make a div clickable and flexbox use
// https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

// https://code.sololearn.com/W3087wxM8ov3/#js