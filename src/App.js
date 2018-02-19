import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'myscript/dist/myscript.min.css';
import Home from "./Home";
import Nav from "./Nav";
import Lessons from "./Lessons";
import Lesson from "./Lesson";
import Notfound from "./Notfound";
import './App.css';
import * as styles from './styles';

class App extends Component {

  componentWillMount() {
    setInterval(function() {
      fetch("https://salty-basin-32861.herokuapp.com/");
    }, 300000);
  }

  render() {
    
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Nav>
            <Route exact path="/lessons" component={Lessons} />
            <Route path="/lessons/:number" component={Lesson} />
            <Route exact path="/notfound" component={Notfound} />
            <Route exact path="/" component={Home} />
            </Nav>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
