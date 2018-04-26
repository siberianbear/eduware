import React, { Component } from 'react';
import './popup-intro.css';

import UseBttn from './use-button';


class PopupIntro extends Component {

  constructor(props) {
      super(props);
      // this.myRef = this.myRef;
      // var hohoho = this.props.theCall;
      this.state = {
        popupState: "",
        // clicker, web, web-disconnect
        // popupType: this.props.theCall
        popupType: this.props.call2Show
      };
      this.buttonOnClick = this.buttonOnClick.bind(this);
      this.installEduware = this.installEduware.bind(this);

      // this.theCall.bind(this);
    }

  // switchState (arg) {
  //   this.setState({popupType: this.props.theCall});
  // }

  // componentDidMount() {
  //   this.setState({popupType:this.props.theCall});
  // }

  componentWillMount() {
    // console.log(this.props.theCall);
    this.setState({popupType:this.props.call2Show});
  }

  // componentWillUpdate(){
  //   // console.log("so I'm here")
  //   this.props.theCall;
  // }
  // componentDidUpdate(){
  //   console.log("I'm updated")
  // }


  buttonOnClick (theBttn) {

    // let theState = !this.state.popupState ? "none" : "";

    // if (this.state.popupState === "none") {
    //   this.setState({popupState: ""});
    // }
    // else {
    //   this.setState({popupState: "none"});
    // }
    // this.setState({popupState: ""});
    // this.props.theCall("none");

    this.props.callToParentScreen("none", theBttn);
  }

  installEduware (theBttn) {
    console.log("Install Eduware button has been clicked");
  }

  render() {

    // if (this.state.popupState === "none") {
    //   return;
    // }


    // this.state.popupType ? console.log(this.state.popupType) : console.log(this.state.popupType)

    // console.log(this.state.popupType);
    // console.log(this.props.theCall)
    
        //  <div>{this.state.popupType}</div> : <div> Loading ... </div>

    let popupContent;

    // console.log(this.props.theCall);

    const popupContentEduwareClicker =
      <div id="popup-intro">
        <div id="popup-intro-message">
          Eduware Connect Not Installed
        </div>

        <div id="install-eduware-bttn-wrapper">
          <UseBttn bttnTitle="Install Eduware Connect" onSelect={this.installEduware}/>
        </div>
        
        <UseBttn bttnTitle="Close" onSelect={this.buttonOnClick}/>
      </div>;

    const popupContentWeb =
      <div id="popup-intro">
        <div id="popup-intro-message">
          <div>Please specify a teacher access password</div>
          <div className="popup-intro-message-sub-text">we will ask you for this access key when you try to connect to this session as a teacher</div>
          <input type="password"/>
        </div>
        <UseBttn bttnTitle="Close" onSelect={this.buttonOnClick}/>
      </div>;

    const popupContentWebDisconnect =
      <div id="popup-intro">
        <div id="popup-intro-message">
          Oops! <br />
          You were disconnected from the Web.
        </div>
        <UseBttn bttnTitle="Close" onSelect={this.buttonOnClick}/>
      </div>;

    // switch (this.props.theCall) {
    if (this.props.call2Show === "none") {
      console.log("no one popup need to be shown")
    }
    else {
      switch (this.props.call2Show) {
        case "clicker":
          popupContent = popupContentEduwareClicker;
        break;
        case "web":
          popupContent = popupContentWeb;
        break;
        case "web-disconnect":
          popupContent = popupContentWebDisconnect;
        break;
        default:
        console.log("something is wrong with switch-case inside of popup-intro.js (render)")
      }
    }
    

    return (
        <div>
          {popupContent}
        </div>
      );
    }
  }

export default PopupIntro;