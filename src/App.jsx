import React, { Component } from 'react';
import './stylesheets/styles.css'

import Bios from './components/Bios'

class App extends Component {
  
  render() {
    return(
      <div>
        <Bios />
      </div>
    );
  }
}

export default App;