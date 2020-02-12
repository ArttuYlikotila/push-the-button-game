import React from 'react';
import './App.css';
import SuperButton from './SuperButton';
import { newOrQuit } from './Messages';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         credits: 0,
         gameOver: false
      };
      this.defaultStartingCredits = 20;

      this.setDefaults = this.setDefaults.bind(this);
      this.setCredits = this.setCredits.bind(this);
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
      // Set state according to localStorage
      this.setState({credits: Number(localStorage.credits)});
   }

   setCredits(reward) {
      // Updata localStorage according to reward
      localStorage.credits = Number(localStorage.credits) + reward;
      // Set state according to localStorage
      this.setState({credits: Number(localStorage.credits)});
     
      // If credits drop to zero (or somehow below), end the game
      if (Number(localStorage.credits) <= 0) {
         this.disableGame();

         // Ask if the player wants to start a new game
         newOrQuit(this.resetGame);
      }
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
            <div className='navbar'>
               <h1>The Amazing push-the-button-for-a-chance-to-win game!</h1>
            </div>
            
            {/* Show the amount of credits to player if the game is on */}
            <div id = {this.state.gameOver ? 'hidden' : ''}>
               <CreditStatus credits = {this.state.credits}/>
            </div>
            {/* Show the button to restart the game if game is over */}
            <div className='btn-container' id = {this.state.gameOver ? '' : 'hidden'}>
               <RestartButton resetGame = {this.resetGame}/>
            </div>

            <SuperButton setCredits = {this.setCredits}/>
            
            <div className='footer'>
               <p>Information about this game can be found from <a href='https://github.com/ArttuYlikotila/Push-the-button-game'>here</a></p>
            </div>
         </div>
      );
   }
}

// Component that shows the current amount of credits to player
function CreditStatus(props) {
   return (
      <p>You have currently {props.credits} credits</p>
   );
}

// Component that shows a restart to button to player when the game is over
function RestartButton(props) {
   return (
      <button hidden type='button' id='reset' onClick={props.resetGame}>Insert Credits</button>
   );
}

export default App;
