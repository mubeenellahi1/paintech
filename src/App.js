import React from 'react';
import Home from './components/Home/Home'
import Gallery from './components/Gallery/Gallery'
import About from './components/About/About'
import SalesCondition from './components/SalesCondition/SalesCondition'
import Prices from './components/Prices/Prices'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> <Home /></Route>
        <Route path="/gallery"><Gallery /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/terms"><SalesCondition /></Route>
        <Route path="/prices"><Prices /></Route>
      </Switch>
    </Router>
  );
}

export default App;
