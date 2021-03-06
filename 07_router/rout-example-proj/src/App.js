import React, { Component } from 'react';

//Components libraries:
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";

//CSS libs:
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <BrowserRouter >
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/:post_id' component={Post}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
