import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AllBands from './components/AllBands'
import OneBand from './components/OneBand'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/band" component={AllBands}/>
          <Route path="/band/:bandId" component={OneBand}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
