import React from 'react';
import { Component } from 'react';

import Offer from './Offer';

export default class JobOffers extends Component {
  constructor(props){
    super();
  }
  
  render(){
    
    return (
      <div className="job-offer-list">
      {
        this.props.offers.map(
          offer => <Offer key={offer.id} data={offer} />
        )
      }
      </div>
    );
  }
}