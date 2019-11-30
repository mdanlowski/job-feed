import React from 'react';
import { Component } from 'react';
import { Typography } from '@material-ui/core';

import Offer from './Offer';

export default class JobOffers extends Component {
  constructor(props){
    super();
  }

  render(){

    return (
      <div className="job-offer-list">
        <Typography variant="h1">Software Jobs Machine</Typography>

        <div>
          {
            this.props.offers.map(
              offer => <Offer key={offer.id} data={offer} />
            )
          }
        </div>
      </div>
    );
  }
}