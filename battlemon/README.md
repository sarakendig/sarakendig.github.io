# Battle'mon

Battle'mon is a turn based battle game styled after the popular Pokemon series. 


## Game
[Click to play](https://epic-jackson-af0413.netlify.app/#)


## How to Play

Player chooses a card which matches their desired battle partner.This will then send the player 
into another screen where they can decide if they want to continue with their choice or pick another Pokemon.
When the player finally chooses to start the battle, they will be put into the arena. Player will then choose to attack. 
The game is over when player or enemy reaches an HP of 0.

## Game Mechanics

In order to switch easily between characters, both player and enemy, I  used switch statements. This allows the code to execute a statement based on a specific case. In example, for the choosing the player we use the playerName parameter and pass through the pokemon name as the case. For each case we are creating a new Player which can be used in the game.

To manage the change between the divs i used [this](https://code.sololearn.com/W3087wxM8ov3/#js) function from sololearn then had it run via an event listener.

My fight function is how I have the attacks working. I used an if statement inside a while loop to check if it was the players turn. If it is the players turn we subtracted the player damage from the enemy hp, when the players turn is done we move on to the enemies turn which runs the code with opposite information. Using another if statement I check for the HP, and alert the player if they have won or lost based on who reaches 0 HP first.


## What I'd Like to Add 
- [ ] Add items to heal pokemon
- [ ] Add an HP progress bar via bootstrap
- [ ] Have the enemy and player hp show up in the dom on the respected boxes after each attack
- [ ] Use the textbox to display the alert
- [ ] Use a pokemon API to allow more pokemon to be used in the game
- [ ] Add attack shake animations
- [ ] Improve CSS


