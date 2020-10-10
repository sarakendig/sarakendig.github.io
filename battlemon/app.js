const Game = {
    start(playerName) {
        this.reset(playerName);
        this.setupArena();
    },

    reset(playerName) {
        switch (playerName) {
            case "Pikachu":
                player = new Pokemon(playerName, 70, 'pika ball', 30);
                console.log("Pikachu is made")
                break;
            case "Bulbasaur":
                player = new Pokemon(playerName, 70, 'vine whip', 50);
                console.log("Bulbasaur is made")
                break;
            case "Eevee":
                player = new Pokemon(playerName, 70, 'bite', 20);
                console.log("Eevee is made")
                break;
            case "Charmander":
                player = new Pokemon(playerName, 70, 'fire fang', 20);
                console.log("Charmander is made")
                break;
        }
    }

}


class Pokemon {
    constructor(name, hp, move, damage) {
        this.name = name;
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
    constructor(name, hp, move, damage) {
        this.playerName = playerName;
        this.hp = hp;
        this.move = move;
        this.damage = damage;
    }

}
let enemy;

class Enemy extends Pokemon {
    constructor(name, hp, move, damage) {
        this.enemyName = enemyName;
        this.hp = hp;
        this.move = move;
        this.damage = damage;
    }
}
// console.log(Game.reset())