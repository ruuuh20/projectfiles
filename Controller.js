import React, { Component } from 'react';
import LightSwitch from './LightSwitch'
import Selector from './Selector'
import Light from './Light';
import LightCount from './LightCount'

class Controller extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
          {text: 'and', toggled: false},
          {text: 'or', toggled: false},
          {text: 'xor', toggled: false}
        ],
      firstLightOn: false,
      secondLightOn: false,
      isOn: false
    }
  }

  handleSwitch1 = () => {
    this.setState( (prevState, props) => {
      return {
          firstLightOn: !prevState.firstLightOn
      }

    }, this.runThis()
  )
  }

   handleSwitch2 = () => {
    this.setState( (prevState, props) => {
      return {
        secondLightOn: !prevState.secondLightOn
      }

    }, this.runThis()
)

  }

  optionToggle = (index, e) => {
    const options = [...this.state.options];
    options[index].toggled = !options[index].toggled;

    this.setState({ options });
  }


runThis = () => {

  const light1 = this.state.firstLightOn
  const light2 = this.state.secondLightOn


  if (light1 && light2 ) {
    if ( this.props.options[0].toggled  ) {

      this.setState({

        isOn: true
      }, () => console.log("testing"))
    } else {
      console.log("toggled but not on")
    }

  } else {
    console.log(this.state, "nope")
  }
  }

  render() {

    const light1 = this.state.firstLightOn
    const light2 = this.state.secondLightOn

    let onOff = "X"
    let lightStyle="light off small"


  // AND
  if (this.state.options[0].toggled) {
    if ( (light1 && light2) ) {

      onOff = "O"
      lightStyle= "light on small"
    }
  }


// OR
    if (this.state.options[1].toggled) {
      if ( (light1 && !light2 )|| (!light1 && light2 ) || (light1 && light2)  ) {

        onOff = "O"
        lightStyle= "light on small"

      }
    }

//XOR
if (this.state.options[2].toggled) {
  if ( (light1 && !light2 )|| (!light1 && light2 )  ) {

    onOff = "O"
    lightStyle= "light on small"
  }
}

    return (
        <div className="controller row">
          <LightSwitch style={lightStyle} {...this.props}
            isOn={this.state.firstLightOn}
            onSwitched={this.handleSwitch1}
            />

              <Selector options={this.state.options} toggle={this.optionToggle}/>
             <LightSwitch style={lightStyle} {...this.props}
              isOn={this.state.secondLightOn}
              onSwitched={this.handleSwitch2}
              >{onOff}
            </LightSwitch>

             <Light isOn={this.state.isOn} style={lightStyle}></Light>
        </div>
    )
  }

}

export default Controller;
