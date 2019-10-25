import React from 'react';
import { useAuth0 } from './components/Auth0/Auth0';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import Components

import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';

// Import CSS

import './App.css';

function App() {

  const { loading } = useAuth0();

  if (loading) {
    return (
      <div>Loading...</div> // replace with loader-spinner
    )
  }

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <NavBar/>
          <h1>Political Crowd Funding</h1>
        </header>
        <Switch>
          <Route exact path="/"/>
          <Route path="/home" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;