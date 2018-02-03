import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from "./Main";
import Lessons from "./Lessons";
import Lesson from "./Lesson";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/lessons" component={Lessons}/>
          <Route path="/lessons/:number" component={Lessons}/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
