import React, { Component } from 'react';
import './participants-buttons-block.css';

import UseBttn from './use-button';


class ParticipantsButtonsBlock extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bttn1State: false,
      bttn2State: false,
      bttn3State: false,
    };

    // This binding is necessary to make `this` work in the callback
    this.buttonOnClick = this.buttonOnClick.bind(this);
    
  }

  // buttonOnClick (target, state1) {
  buttonOnClick (theBttn) {
    
    // this.setState({bttn1State: false, bttn2State: false, bttn3State: false});

    switch(theBttn) {
      case "clicker":
        !this.state.bttn1State ? this.setState({bttn1State: true}) : this.setState({bttn1State: false});
        break;
      case "web":
        !this.state.bttn2State ? this.setState({bttn2State: true}) : this.setState({bttn2State: false});
        break;
      case "virtual":
        !this.state.bttn3State ? this.setState({bttn3State: true}) : this.setState({bttn3State: false});
        break;

      default:
        console.log("something is going wrong at switch-block under buttonOnClick-function in participants-button-block.js");
    }

    // console.log(target + ": " + this.state.bttn1State);
    // this.setState({bttn3State: true});
  }

  render() {
    return (
        <div id="participant-buttons-block">

          <div id="participant-buttons-block-header">Participants will response using...</div>

          <div id="participant-buttons-row">
            <div className="participant-button-item">
              <UseBttn status={this.state.bttn1State} bttnTitle="clicker" onSelect={this.buttonOnClick} />
              <div className="participant-button-item-description">
                Use a clicker that's connected to this computer
              </div>
            </div>
            <div className="participant-button-item plus">+</div>
            <div className="participant-button-item">
              <UseBttn status={this.state.bttn2State} bttnTitle="web" onSelect={this.buttonOnClick} />
              <div className="participant-button-item-description">
                Use an iPhone, Kindle, Laptop and other web devices
              </div>
            </div>
            <div className="participant-button-item plus">+</div>
            <div className="participant-button-item">
              <UseBttn status={this.state.bttn3State} bttnTitle="virtual" onSelect={this.buttonOnClick} />
              <div className="participant-button-item-description">
                Use a virtual clicker to simulate the experience
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

export default ParticipantsButtonsBlock;