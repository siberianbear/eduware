import React, { Component } from 'react';
import './popup-intro.css';

import UseBttn from './use-button';


class PopupIntro extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     bttn1State: false,
  //     bttn2State: false,
  //     bttn3State: false,
  //   };

  //   // This binding is necessary to make `this` work in the callback
  //   this.buttonOnClick = this.buttonOnClick.bind(this);
    
  // }

  // buttonOnClick (target, state1) {
  // buttonOnClick (theBttn) {
    
  //   // this.setState({bttn1State: false, bttn2State: false, bttn3State: false});

  //   switch(theBttn) {
  //     case "clicker":
  //       !this.state.bttn1State ? this.setState({bttn1State: true}) : this.setState({bttn1State: false});
  //       break;
  //     case "web":
  //       !this.state.bttn2State ? this.setState({bttn2State: true}) : this.setState({bttn2State: false});
  //       break;
  //     case "virtual":
  //       !this.state.bttn3State ? this.setState({bttn3State: true}) : this.setState({bttn3State: false});
  //       break;

  //     default:
  //       console.log("something is going wrong at switch-block under buttonOnClick-function in participants-button-block.js");
  //   }

    // console.log(target + ": " + this.state.bttn1State);
    // this.setState({bttn3State: true});
  // }

  render() {
    return (
        <div id="popup-intro">

          <div id="popup-intro-message">
          Oops! <br />
          You were disconnected from the Web.
          </div>

          {/*<UseBttn status={this.state.bttn1State} bttnTitle="Close" onSelect={this.buttonOnClick} /> */}
          <UseBttn bttnTitle="Close" />
              
        </div>
      );
    }
  }

export default PopupIntro;