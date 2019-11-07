import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AllBands from './components/AllBands'
import OneBand from './components/OneBand'
import AllVenues from './components/AllVenues'
import OneVenue from './components/OneVenue'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/band" component={AllBands}/>
          <Route path="/band/:bandId" component={OneBand}/>
          <Route exact path="/venue" component={AllVenues}/>
          <Route exact path="/venue/:venueId" component={OneVenue}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
