import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// "use buttons components"
import HostButtonsBlock from './components/host-buttons-block';
import ParticipantsButtonsBlock from './components/participants-buttons-block';

// Intro screen
import PopupIntro from './components/popup-intro';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // clicker, web, web-disconnect
      call2Popup: "none",
      hostButtonsStates: {
        "bttn1": false,
        "bttn2": false,
        "bttn3": false,
        "bttn4": false,
      },

    };

    // This binding is necessary to make `this` work in the callback
    this.request2Screen = this.request2Screen.bind(this);
    this.updatePopupState = this.updatePopupState.bind(this);
    // this.theCall.bind(this);
  };

  request2Screen (arg) {

    if (arg === "clicker") {

      // ES6 way
      setTimeout(() => {
        this.setState({call2Popup: arg});
      }, 3000)

      //// old-way
      // setTimeout(function () {
      //   this.setState({call2Popup: arg});
      // }.bind(this), 2000)

      // this.setState({call2Popup: arg});
    }

    if (arg === "web") {
      var randomdrop = Math.floor(Math.random()*2);

      if (randomdrop === 0) {
        // this.setState({call2Popup: arg});
        setTimeout(() => {
          this.setState({call2Popup: arg});
        }, 3000)
      }
      else {
        // this.setState({call2Popup: "web-disconnect"});
        setTimeout(() => {
          this.setState({call2Popup: "web-disconnect"});
        }, 3000)
      }
      
    }
  }

  updatePopupState (arg, callerElement) {
    // console.log("argument " + arg + " & caller is: " + callerElement);
    this.setState({call2Popup: "none",
      hostButtonsStates: {
      "bttn1": false,
      "bttn2": false,
      "bttn3": false,
      "bttn4": false
    }});


    // switch (arg) {
    //   case "web":
    //     // console.log("web");
    //     this.setState({call2Popup: arg});
    //     break;
    //   case "click":
    //     // console.log("click");
    //     this.setState({call2Popup: arg});
    //     break;
    //   default:
    //   console.log("achtung");
    // }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Eduware LivePoll App</h1>
        </header>

        
          {/* Initial intro screen */} 
          <div>
              <HostButtonsBlock call2ButtonsFromParent={this.state.hostButtonsStates} callToParentScreen={this.request2Screen}/>

              <ParticipantsButtonsBlock />

              <PopupIntro call2Show={this.state.call2Popup} callToParentScreen={this.updatePopupState} />
          </div>


      </div>

    );
  }
}

export default App;
