import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AllBands from './components/AllBands'
import OneBand from './components/OneBand'
import AllVenues from './components/AllVenues'
import OneVenue from './components/OneVenue'
import AllConcerts from './components/AllConcerts'
import OneConcert from './components/OneConcert'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/band" component={AllBands}/>
          <Route path="/band/:bandId" component={OneBand}/>
          <Route exact path="/venue" component={AllVenues}/>
          <Route path="/venue/:venueId" component={OneVenue}/>
          <Route exact path="/concert" component={AllConcerts}/>
          <Route exact path="/concert/:concertId" component={OneConcert}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
