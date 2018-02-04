import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import 'myscript/dist/myscript.min.css';
import Lessons from "./Lessons";
import Lesson from "./Lesson";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/lessons" component={Lessons}/>
          <Route path="/lessons/:number" component={Lesson}/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
