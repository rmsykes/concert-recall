import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AllBands from './components/allBands'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/band" component={AllBands}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
