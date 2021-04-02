import React, { Component } from 'react';
import './stylesheets/styles.scss'

import Bios from './components/Bios'

class App extends Component {
  
  render() {
    return(
      <div className="router">
        <Bios />
      </div>
    );
  }
}

export default App;