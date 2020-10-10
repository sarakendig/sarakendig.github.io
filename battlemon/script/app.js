const Game = {
    start(playerName) { 
        this.reset(playerName);
        this.setupArena();
},

reset(playerName) {
    switch (playerName) {
        case "Pikachu":
            player = new Pokemon(playerName, 70, 'pika ball', 30);
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
        enemy.hp-= this.move
        enemy.announceHealth()
    }
}

let player;
let enemy;