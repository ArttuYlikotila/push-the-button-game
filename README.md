# The amazing push-the-button-game
## Link to game

TBD

## Game rules and logic
A very simple game that is played in a web browser by pushing a button.
Players have 20 credits when they start the game and pushing the button costs
always one credit. Player has a chance to get a reward of extra credits when they
push the button. If a player runs out of credits, the game is over and the
player is presented a chance to start a new game.

The game rewards the players with the following logic:

- 5 extra credits with every 10th push of a button

- 40 extra credits with every 100th push of a button

- 250 extra credits with every 500th push of a button

The game is supposed to be played with multiple players at the same time. Each player playing the 
game is increasing the same server side counter that will determine if a reward is given.
Therefore it might seem random when the game is giving a reward from a single players point of view.

The game remembers the players amount of credits even if the browser is closed and reopened 
if the players browser history is enabled.

## Installation

TBD
