import React, { Component } from 'react';
import './use-button.css';

class UseBttn extends Component {

    // constructor(props) {
        // super(props);
        // this.state = {isToggleOn: this.props.status};
        // This binding is necessary to make `this` work in the callback
        // this.SwitchBttnState = this.SwitchBttnState.bind(this);
    // }
    constructor(props) {
        super(props);
        this.state = {inProcess: false};
    }

    // componentDidMount() {
    //     this.state = {isToggleOn: false};
    // }
    
    SwitchBttnState() {
        // this.props.onSelect(this.props.bttnTitle, this.state.isToggleOn);

        // !this.props.status ? this.setState({isToggleOn: true}) : this.setState({isToggleOn: false});
        // console.log(this.state.to);
        // this.setState(prevState => ({
        //     value: prevState.value + 1
        //   }));
        // this.handleChange(this.props);
        // this.handleChange(this.state);

        // this.props.onSelect(this);

        // this.props.onSelect(this.props.bttnTitle, this.props.status);
        this.props.onSelect(this.props.bttnTitle);
        
        // console.log(this.state.isToggleOn);
        // this.setState(prevState => ({
        //   isToggleOn: !prevState.isToggleOn
        // }));
        
      }

    // ButtonAction(target) {
    //     // e.preventDefault();
    //     this.SwitchBttnState();
    //     // console.log('\'' + target + '\' button was clicked');
    // }

    render() {
      return (
            // <div className={!this.props.status ? "use-button":"use-button active"} onClick={(e) => this.ButtonAction(this.props.bttnTitle)}>
            <div className={!this.props.status ? "use-button":"use-button active active inprocess"} onClick={(e) => this.SwitchBttnState()}>
                <div className="use-bttn-title">
                    {this.props.bttnTitle}
                    <div className={!this.props.status ? "use-button-status none":"use-button-status"}>{!this.state.inProcess ? "Connecting..." : "Connected"}</div>
                </div>
            </div>
      );
    }
  }

export default UseBttn;