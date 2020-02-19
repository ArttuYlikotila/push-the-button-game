import Swal from 'sweetalert2'

export function newOrQuit(resetGame) {
   // Ask if the player wants to start a new game or quit and
   // reset the game if player chooses to do so
   Swal.fire({
      title: 'Woe is upon you, you just used your last credit!',
      text: 'Do you wanna start a new game?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, new game is best!',
      confirmButtonColor: '#000000',
      cancelButtonText: 'No, I want to quit.',
      cancelButtonColor: '#9b2020',
      allowOutsideClick: false,
      allowEscapeKey: false,
      showClass: {
         popup: 'animated fadeInDown faster'
      },
      hideClass: {
         popup: 'animated fadeOutUp faster'
      }
   }).then((result) => {
      if (result.value) {
         resetGame();
      }
      else  if (result.dismiss === Swal.DismissReason.cancel) {
         Swal.fire({
            title: 'Sorry to hear that...',
            text: 'Hope to see you soon!',
            confirmButtonColor: '#000000',
            allowOutsideClick: false,
            allowEscapeKey: false,
            showClass: {
               popup: 'animated fadeInDown faster'
            },
            hideClass: {
               popup: 'animated fadeOutUp faster'
            }
         });
      }
   })
}

export function showReward(reward) {
   // Show the player a message about the reward sent from the server
   Swal.fire({
      title: 'You got a reward of ' + reward + ' credits!',
      text: 'Click OK to continue game.',
      confirmButtonColor: '#000000',
      allowOutsideClick: false,
      allowEscapeKey: false,
      showClass: {
         popup: 'animated fadeInDown faster'
      },
      hideClass: {
         popup: 'animated fadeOutUp faster'
      }
   }) 
}