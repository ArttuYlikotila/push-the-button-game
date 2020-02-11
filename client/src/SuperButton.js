import React from 'react';
import { showReward } from './Messages';

class SuperButton extends React.Component {
   constructor(props) {
      super(props);
 
      this.updateCredits = this.updateCredits.bind(this);
   }
   
   // Function that updates the credits according to the response from the server
   updateCredits(event) {
      event.preventDefault();
 
      // Ask the server if there is a reward
      fetch('/click').then(response => {
         if (response.ok) {
            return response.text();
         }
         else {
            throw Error(`Request rejected with status ${response.status}`);
         }
      }).then(reward => {
         // If there is a reward, show a message to user
         if (reward !== '-1') {
            showReward(reward);
            // Update the users credits according to the reward minus one credit for the push
            this.props.setCredits(parseInt(reward - 1));
         }
         else {
            // Pay one credit for the push
            this.props.setCredits(parseInt(reward));
         }
      },
         error => console.error(error)
      );
   }
 
   render() {
      return (
         <div className='btn-container'>
            <button type='button' id='superbtn' onClick={this.updateCredits}>THE BUTTON</button>
         </div>
      )
   }
}

export default SuperButton;