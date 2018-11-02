import React, { Component } from 'react';

import './App.css';
import Controller from './Controller'

import LightSwitch from './LightSwitch'
import Selector from './Selector'
import Light from './Light';
import LightCount from './LightCount'

class App extends Component {

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
      isOn: false,
      counter: 1,
      // controllers: []  // *edit
    }


  }

  handleCountChange = (e) => {
    this.setState({
      counter: e.target.value
    })
  }

  addSwitch = () => {
      let items = [];

      for (let i = 0; i < this.state.counter; i++) {
      items.push(<div key={i}>
        <Controller {...this.state}
              onSwitched={this.handleSwitch1}
              onSwitched2={this.handleSwitch2}
              optionToggle={this.optionToggle}
              handleLight={this.handleLight}
               />

               </div>);
    }
    return items

    // *EDIT :
    // this.setState({
    //   controllers: items
    // })
  };


  handleLight = () => {
    this.setState({
      isOn: true
    })
  }

  handleSwitch1 = () => {
    this.setState( (prevState, props) => {
      return {
          firstLightOn: !prevState.firstLightOn
      }
    }
    )
  }

   handleSwitch2 = () => {
    this.setState( (prevState, props) => {
      return {
        secondLightOn: !prevState.secondLightOn
      }
    }
    )
  }

  optionToggle = (index, e) => {
    const options = [...this.state.options];
    options[index].toggled = !options[index].toggled;

    this.setState({ options });
  }

  changeOn = () => {
    this.setState({
      isOn: true
    })
    console.log(this.state)
  }


  render() {

    const light1 = this.state.firstLightOn
    const light2 = this.state.secondLightOn

    let onOff = "X"
    let lightStyle="light off main-light"

    if (this.state.isOn) {
      onOff = "O"
    }



    // AND
    if (this.state.options[0].toggled) {
      if ( light1 && light2  ) {
        onOff = "O"
        lightStyle= "light on main-light"
        this.changeOn()

      }
    }

  // OR
      if (this.state.options[1].toggled) {
        if ( (light1 && !light2 )|| (!light1 && light2 ) || (light1 && light2)  ) {
          onOff = "O"
          lightStyle= "light on main-light"
        }
      }

  //XOR
  if (this.state.options[2].toggled) {
    if ( (light1 && !light2 )|| (!light1 && light2 )  ) {
      onOff = "O"
      lightStyle= "light on main-light"
    }
  }


    return (
      <div className="App">
      // <div> {this.state.controllers} </div>  EDIT

        <Light isOn={this.state.isOn} style={lightStyle} >
        {onOff}
        </Light>
        <LightCount counter={this.state.counter}
          handleCountChange={this.handleCountChange}
          addSwitch={this.addSwitch}/>
      </div>
    );
  }
}

export default App;
