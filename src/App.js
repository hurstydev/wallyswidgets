import React, { Component } from 'react';
import Navbar               from './Components/Navbar.js'
import WidgetCalculator     from './Components/WidgetCalculator.js'
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
          packs: [ 250, 500, 1000, 2000, 5000 ]
      };
    }

  render() {
    return (

      <div className="App">
        <Navbar />
        <WidgetCalculator packs={this.state.packs}/>
      </div>

    );
  }
}

export default App;
