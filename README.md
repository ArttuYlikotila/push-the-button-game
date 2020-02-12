# The amazing push-the-button-game

This project is still a work in progress.

## Link to game

TBD

## Game rules and logic
This simple game is played in a web browser by pushing a button.
Pushing the button costs always one credit. Player has a chance to get a 
reward of extra credits when they push the button. Players start with 20
credits. If a player runs out of credits, the game is over and the
player is presented a chance to quit or start a new game.

The game rewards the players with the following logic:

- 5 extra credits with every 10th push of a button

- 40 extra credits with every 100th push of a button

- 250 extra credits with every 500th push of a button

The game is intended to be played with multiple players at the same time. Each player playing 
the game is increasing the same server side counter that will determine if a reward is given.
Because of potentially multiple players playing the game at the same time, it might seem random 
when the game is giving a reward from a single players point of view. In essence this is a game
of luck.

The game remembers the players amount of credits even if the browser is closed and reopened 
if the players browser history is enabled.

## Installation

TBD
