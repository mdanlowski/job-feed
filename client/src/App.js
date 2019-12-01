import './App.scss';

import React from 'react';
import { Typography } from '@material-ui/core';

import JobOffers from './components/JobOffers';
import Filters from './components/Filters';

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
          <Typography className="App-header" variant="h3" component="h1">
            Software Job Offers Harvester
          </Typography>
        </header>
        <main className={"utils main"}>
          <aside className={"utils sidebar"}>
            <Filters />
          </aside>
          <JobOffers offers={this.state.offers} />
        </main>
      </div>
    );
  }

}

export default App;
