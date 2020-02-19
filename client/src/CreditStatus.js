import React from 'react';
import './CreditStatus.css';

export default function CreditStatus(props) {
   return (
      <div className='credits' id = {props.gameOver ? 'hidden' : ''}>
         <p>You have currently {props.credits} credits</p>
      </div>
   );
}