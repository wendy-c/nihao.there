import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'myscript/dist/myscript.min.css';
import Main from "./Main";
import Lessons from "./Lessons";
import Lesson from "./Lesson";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/lessons" component={Lessons}/>
          <Route path="/lessons/:number" component={Lesson}/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
