import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// "use buttons components"
import HostButtonsBlock from './components/host-buttons-block';
import ParticipantsButtonsBlock from './components/participants-buttons-block';

// Intro screen
import PopupIntro from './components/popup-intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">LivePoll App</h1>
        </header>

          {/* "Host control block" component */} 
          <HostButtonsBlock />

          <ParticipantsButtonsBlock />

          <PopupIntro />

      </div>

    );
  }
}

export default App;
