import React from 'react';

const Light = (props) => {


  render() {

    const lightClass = props.isOn ? "light on" : "light off";
    const offOrOn = props.isOn ? "ONNNN" : "OFFFF"  // ? stays on off
    return (
      <div className="row">
        <div className={props.style}>{props.children} </div>
        <div>
        </div></div>
    )
  }
}


export default Light;
