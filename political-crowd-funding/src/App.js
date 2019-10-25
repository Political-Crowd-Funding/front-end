import React from 'react';
import NavBar from './components/NavBar';
import { useAuth0 } from './components/Auth0/Auth0';

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
      <header className="App-header">
        <NavBar/>
        <h1>Political Crowd Funding</h1>
      </header>
    </div>
  );
}

export default App;