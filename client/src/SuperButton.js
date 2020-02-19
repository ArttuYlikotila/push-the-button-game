import React from 'react';
import './SuperButton.css';
import { showReward } from './Messages';

export default class SuperButton extends React.Component {
   constructor() {
      super();
      this.updateCredits = this.updateCredits.bind(this);
   }
   
   // Function that updates the credits according to the response from the server
   updateCredits(event) {
      event.preventDefault();

      // Ask the server if there is a reward
      fetch('/click').then(response => {
         if (response.ok) {
            return response.json();
         }
         else {
            throw Error(`Request rejected with status ${response.status}`);
         }
      }).then(response => {
         // If there is a reward, show a message to user
         if (response.reward !== 0) {
            showReward(response.reward);
            // Update the users credits according to the reward
            this.props.setCredits(response.reward);
         }
         // Pay one credit for the push
         this.props.setCredits(-1);
         // Update the amount estimated clicks for the next reward
         this.props.setNextReward(response.estimate);
      },
         error => console.error(error)
      );
   }
 
   render() {
      return (
         <div className='superbtn-container'>
            <button type='button' id='superbtn' onClick={this.updateCredits}>THE BUTTON</button>
         </div>
      )
   }
}