import React from 'react';
import './NextEstimate.css';

export default class NextEstimate extends React.Component {
   constructor() {
      super();
      this.state = {
         showEstimate: false,
      };
   }

   // Hide the estimate about the next reward when the component mounts
   componentDidMount() {
      this.setState({showEstimate: false});
   }

   // Show the estimate about the next reward when the estimation changes
   componentDidUpdate(prevProps) {
      if (this.props.estimate !== prevProps.estimate) {
         this.setState({showEstimate: true});
      }
   }

   render() {
      let term = 'clicks';

      if (this.props.estimate === 1) {
         term = 'click';
      }

      return (
         <div className={`estimate ${this.state.showEstimate ? 'estimate-shown' : 'estimate-hidden'}`}>
            <p>Next win might be {this.props.estimate} {term} away</p>
         </div>         
      );
   }
}