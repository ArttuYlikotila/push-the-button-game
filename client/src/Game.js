import React from 'react';
import SuperButton from './SuperButton';
import NextEstimate from './NextEstimate';
import CreditStatus from './CreditStatus';
import RestartButton from './RestartButton';
import { newOrQuit } from './Messages';

export default class Game extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         credits: 0,
         nextReward: 10,
         gameOver: false
      };
      this.defaultStartingCredits = 20;
      this.setDefaults = this.setDefaults.bind(this);
      this.setCredits = this.setCredits.bind(this);
      this.setNextReward = this.setNextReward.bind(this);
      this.setGameStatus = this.setGameStatus.bind(this);
      this.disableGame = this.disableGame.bind(this);
      this.resetGame = this.resetGame.bind(this);
   }

   componentDidMount() {
      // If there is no browser history, use default starting value, otherwise use value from history
      if (!localStorage.credits) {
         // Set the credits to default starting value
         this.setDefaults();
      }
      else {
         // Set the credits according to browser history
         localStorage.credits = Number(localStorage.credits);
         this.setState({credits: Number(localStorage.credits)});
         
         // Disable the game if credits are zero or below according to browser history
         if (Number(localStorage.credits) <= 0) {
            this.disableGame();
         }
      }
   }

   setDefaults() {
      // Set the localStorage credits to default starting value
      localStorage.credits =  this.defaultStartingCredits;
      this.setState({credits: Number(localStorage.credits)});
   }

   setCredits(reward) {
      // Updata localStorage according to reward
      localStorage.credits = Number(localStorage.credits) + reward;
      this.setState({credits: Number(localStorage.credits)});
     
      // If credits drop to zero (or somehow below), end the game
      if (Number(localStorage.credits) <= 0) {
         this.disableGame();
         // Ask if the player wants to start a new game
         newOrQuit(this.resetGame);
      }
   }

   setNextReward(estimate) {
      // Set the estimate for the amount of clicks till the next reward
      this.setState({nextReward: estimate});
   }

   setGameStatus() {
      // Toggle gameOver state
      this.setState(prevState => ({
         gameOver: !prevState.gameOver
      }));
   }

   disableGame() {
      // Disable the superbutton
      document.getElementById('superbtn').disabled = true;
      // Change game status
      this.setGameStatus();
   }
  
   resetGame() {
      // Set the credits to default starting value
      this.setDefaults();
      // Enable the superbutton
      document.getElementById('superbtn').disabled = false;
      // Change game status
      this.setGameStatus();
   }

   render() {
      return (
         <div>            
            {/* Show the amount of credits to player only if the game is on */}
            <CreditStatus gameOver = {this.state.gameOver} credits = {this.state.credits}/>
            {/* Show the restart game button to player only if game is over */}
            <RestartButton gameOver = {this.state.gameOver} resetGame = {this.resetGame}/>
            <NextEstimate estimate = {this.state.nextReward}/>
            <SuperButton setCredits = {this.setCredits} setNextReward = {this.setNextReward}/>
         </div>
      );
   }
}