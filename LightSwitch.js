import React, { Component } from 'react';

const LightSwitch = (props) => {
  render() {
    let switchClass = props.isOn ? "switch switch-1 on" : "switch switch-1 off";
    let offOn = props.isOn ? "ONN" : "OFFF"
    return (
    <div className="light-switch">
      <button
        className={switchClass}
        onClick={props.onSwitched}
        >{offOn}
      </button>
     </div>
    )
  }
}


export default LightSwitch
