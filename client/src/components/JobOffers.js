import React, { Component } from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import Offer from './Offer';

export default class JobOffers extends Component {
  constructor(props){
    super();
  }

  render(){
    const pages = this.props.pages;
    return (
      <div className="job-offer-list">
        <div id="pagination">
          <div className="pageno">{this.props.page} / {pages}</div>
          <MobileStepper
            variant="progress"
            steps={pages}
            position="static"
            activeStep={this.props.page}
            // className={classes.root}
          nextButton={
            <Button size="small" onClick={this.props.handleNext} disabled={this.props.page === pages}>
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
              <Button size="small" onClick={this.props.handlePrev} disabled={this.props.page === 1}>
                <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
        </div>
        <div id="job-offer-list">
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