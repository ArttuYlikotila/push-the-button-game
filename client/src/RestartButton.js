import React from 'react';
import './RestartButton.css';

export default function RestartButton(props) {
   return (
      <div className='btn-container' id = {props.gameOver ? '' : 'hidden'}>
         <button hidden type='button' id='reset' onClick={props.resetGame}>Insert Credits</button>
      </div>
   );
}