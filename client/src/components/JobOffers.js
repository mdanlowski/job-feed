import React, { Component } from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import Offer from './Offer';

export default class JobOffers extends Component {
  constructor(props){
    super();
    this.state = { activeStep: 0 };
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }
  handleNext() {
    this.setState((pState) => { return { activeStep: pState.activeStep + 1 } })
  };
  handleBack() {
    this.setState((pState) => { return { activeStep: pState.activeStep - 1 } })
  };

  render(){
    const pageCount = 10;

    return (
      <div className="job-offer-list">
        <div id="pagination">
          <MobileStepper
            variant="progress"
            steps={6}
            position="static"
            activeStep={this.state.activeStep}
            // className={classes.root}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === pageCount}>
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
              <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
        </div>
        {
          this.props.offers.map(
            offer => <Offer key={offer.id} data={offer} />
          )
        }
      </div>
    );
  }
}