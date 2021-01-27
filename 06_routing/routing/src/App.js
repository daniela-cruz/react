import './App.css';
import React from 'react';

import FetchRandomUser from "./FetchRandomUser";

class App extends React.Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <FetchRandomUser />
      </div>
    );
  }
}

export default App;