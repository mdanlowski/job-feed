import React from 'react';
import './App.css';

import JobOffers from './components/JobOffers';

const mockJobs = [
  {id: 1, title: "Java architect", company: "A Company"},
  {id: 69, title: "Python Developer", company: "Google"},
]

function App() {
  return (
    <div className="App">
      <JobOffers offers={mockJobs} />
    </div>
  );
}

export default App;
