# The amazing push-the-button-game

This game is made with React, Node.js and Express.

Game is responsive and can be played with mobile and desktop devices.

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

Pre-requisite:

You need Node.js and NPM installed on your computer.

- Clone or download this repository

- Open a terminal (command line) in the root folder of the repository and run command `npm install`

- Change folder by running command `cd client`

- In the folder "client" run command `npm install`

- Go back to the root folder by running command `cd ..`

- In the root directory of the repository run command `node app.js`

- Open another terminal in the folder "client"

- In the folder "client" run command `npm start`

- A local version of the game should start running in your web browser
