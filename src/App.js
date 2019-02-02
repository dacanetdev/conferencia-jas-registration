import React from 'react';
import './App.css';
import Routes from './routes';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Conferencia JAS 2019</h1>
        <Routes></Routes>
      </div>
    );
  }
}

export default App;
