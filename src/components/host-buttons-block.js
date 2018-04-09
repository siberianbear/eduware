import React, { Component } from 'react';
import './host-buttons-block.css';

import UseBttn from './use-button';


class HostButtonsBlock extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bttn1State: false,
      bttn2State: false,
      bttn3State: false,
      bttn4State: false,
    };

    // This binding is necessary to make `this` work in the callback
    this.buttonOnClick = this.buttonOnClick.bind(this);
    
  }

  // buttonOnClick (target, state1) {
  buttonOnClick (theBttn) {
    
    this.setState({bttn1State: false, bttn2State: false, bttn3State: false, bttn4State: false});

    switch(theBttn) {
      case "clicker":
        !this.state.bttn1State ? this.setState({bttn1State: true}) : this.setState({bttn1State: false});
        // console.log(target + ": " + this.state.bttn1State);
        break;
      case "web":
        !this.state.bttn2State ? this.setState({bttn2State: true}) : this.setState({bttn2State: false});
        break;
      case "mouse":
        !this.state.bttn3State ? this.setState({bttn3State: true}) : this.setState({bttn3State: false});
        break;
      case "virtual":
        !this.state.bttn4State ? this.setState({bttn4State: true}) : this.setState({bttn4State: false});
        break;

      default:
        console.log("something is going wrong at switch-block under buttonOnClick-function in host-button-block.js");
    }

    // console.log(target + ": " + this.state.bttn1State);
    // this.setState({bttn3State: true});
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
        <div id="host-buttons-block">

          <div id="host-buttons-block-header">The host will control this session using...</div>

          <div id="host-buttons-row">
            <div className="host-button-item">
              <UseBttn status={this.state.bttn1State} bttnTitle="clicker" onSelect={this.buttonOnClick} />
              <div className="host-button-item-description">
                Use a clicker that's connected to this computer
              </div>
            </div>
            <div className="host-button-item">
              <UseBttn status={this.state.bttn2State} bttnTitle="web" onSelect={this.buttonOnClick} />
              <div className="host-button-item-description">
                Use an iPhone, Kindle, Laptop and other web devices
              </div>
            </div>
            <div className="host-button-item">
              <UseBttn status={this.state.bttn3State} bttnTitle="mouse" onSelect={this.buttonOnClick} />
              <div className="host-button-item-description">
                Use this computer with a mouse &amp; keyboard
              </div>
            </div>
            <div className="host-button-item">
              <UseBttn status={this.state.bttn4State} bttnTitle="virtual" onSelect={this.buttonOnClick} />
              <div className="host-button-item-description">
                Use a virtual clicker to simulate the experience
              </div>
            </div>
          </div>
        </div>
      );
    }
  }





export default HostButtonsBlock;