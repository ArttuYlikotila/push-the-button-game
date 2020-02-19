import React from 'react';
import Game from './Game';
import NavBar from './NavBar';
import Footer from './Footer';

export default class App extends React.Component {
   render() {
      return (
         <div>
            <NavBar />
            <Game />
            <Footer />
         </div>
      );
   }
}