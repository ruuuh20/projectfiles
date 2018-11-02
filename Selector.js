import React, { Component } from 'react';

 class Selector extends Component {
	constructor(props){
    super(props);
    // this.state = {
    	// options: [
      // 	{text: 'and', toggled: false},
      //   {text: 'or', toggled: false},
      //   {text: 'xor', toggled: false}
      // ]
    // }
  }


  render() {
    return (
    	<div className="selector-group">
        {this.props.options.map((word, i) =>
        	<div key={i}>
        	  <label className="control control-radio">{word.text} <input type="radio" name="groupName" onChange={(e) => this.props.toggle(i, e)} />

            </label>
        	</div>
        )}

      </div>
    )
  }
}

export default Selector;
