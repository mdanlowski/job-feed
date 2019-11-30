import './App.scss';

import React from 'react';
import { Typography } from '@material-ui/core';
import JobOffers from './components/JobOffers';

class App extends React.Component {
  constructor(){
    super();
    this.fetchData = this.fetchData.bind(this);
    this.state = { offers: [] };
  }

  fetchData(){
    let dataSource = "http://localhost:4000/github";
    fetch(dataSource)
      .then((res) => { 
        return res.json()
      }).then((resJson) => {
        this.setState( {offers: resJson.slice(0,10)} )
      }).catch((error) => {
        alert("Server error or unreachable | " + error)
      }).finally(() => {}
    );
  }

  componentDidMount(){
    this.fetchData()
  }

  render(){
    return (
      <div className="App">
        <header>
          <Typography className="App-header" variant="h1">
            Software Job Offers Machine
          </Typography>
        </header>
        <main>
          <JobOffers offers={this.state.offers} />
        </main>
      </div>
    );
  }

}

export default App;
