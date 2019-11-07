import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AllBands from './components/AllBands.jsx'
import OneBand from './components/OneBand.jsx'
import AllVenues from './components/AllVenues.jsx'
import OneVenue from './components/OneVenue.jsx'
import AllConcerts from './components/AllConcerts.jsx'
import OneConcert from './components/OneConcert.jsx'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/band" component={AllBands}/>
          <Route exact path="/band/:bandId" component={OneBand}/>
          <Route exact path="/venue" component={AllVenues}/>
          <Route exact path="/venue/:venueId" component={OneVenue}/>
          <Route exact path="/concert" component={AllConcerts}/>
          <Route exact path="/concert/:concertId" component={OneConcert}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
