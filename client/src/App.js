import './App.scss';

import React from 'react';
import { Typography } from '@material-ui/core';

import JobOffers from './components/JobOffers';
import Filters from './components/Filters';

const baseUrl = "http://localhost:4000/github";
const metadataUrl = "http://localhost:4000/meta/";

class App extends React.Component {
  constructor(){
    super();
    this.fetchData = this.fetchData.bind(this);
    this.fetchMeta = this.fetchMeta.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.setFilters = this.setFilters.bind(this);
    this.state = {
      offers: [],
      currentPage: 1,
      filters: { pageSize: 10 },
      meta: { pageCount: 1 }
    };
  }

  fetchMeta(key){
    // @TOdo handle key
    fetch(metadataUrl).then((res) => { return res.json()}).then((resJson) => {
      this.setState((pState) => {
        return { ...pState, meta: {
          pageCount: Math.ceil(parseInt(resJson.countall)/pState.filters.pageSize)}
        }});
    }).catch((error) => { alert("Server error or unreachable | " + error) });
  }

  fetchData(newPage){
    const query = `?page=${newPage}&pagesize=${this.state.filters.pageSize}`;
    let dataSource = baseUrl + query;
    fetch(dataSource)
      .then((res) => { return res.json()}).then((resJson) => {
        this.setState((pState) => { return { ...pState, offers: resJson } });
      }).catch((error) => {
        alert("Server error or unreachable | " + error)
      }).finally(() => {
        // console.log(this.state)
        // console.log("F:",this.state.offers[0].title)
        // console.log("L:",this.state.offers[this.state.filters.pageSize-1].title)
      }
    );
  }

  componentDidMount(){
    this.fetchMeta();
    this.fetchData(this.state.currentPage);
  }

  nextPage() {
    this.fetchData(this.state.currentPage + 1)
    this.setState((pState) => { return { ...pState, currentPage: pState.currentPage + 1 } })
  };
  prevPage() {
    this.fetchData(this.state.currentPage - 1)
    this.setState((pState) => { return { ...pState, currentPage: pState.currentPage - 1 } })
  };

  setFilters(newFilters){
    this.setState((pState) => { return { ...pState, filters: newFilters } })
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
            <Filters data={this.state.filters} stateHandler={this.setFilters}/>
          </aside>
          <JobOffers
            offers={this.state.offers}
            handleNext={this.nextPage}
            handlePrev={this.prevPage}
            page={this.state.currentPage}
            pages={this.state.meta.pageCount}
          />
        </main>
      </div>
    );
  }

}

export default App;
