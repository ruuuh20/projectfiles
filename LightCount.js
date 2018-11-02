import React, { Component } from 'react';


class LightCount extends Component {

  constructor(props) {
    super(props);

  }

  render() {


    return (
      <div className="value-button">


      <input className="counter"
        type="number"
        value={this.props.counter}
        onChange={this.props.handleCountChange} />
        <label style={{fontSize:"26px"}}>Controllers </label>

        {this.props.addSwitch()}
      </div>
    )
  }


}

export default LightCount;
