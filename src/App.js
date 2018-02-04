import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import 'myscript/dist/myscript.min.css';
import Lessons from "./Lessons";
import Lesson from "./Lesson";
import './App.css';
import * as styles from './styles';
import { ImpactfulHeader, Background } from './styles';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Background color='red'>
          <ImpactfulHeader>
            <h1>Ni hao! </h1>
            <h2>你 好！</h2>
          </ImpactfulHeader>
        </Background>

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/lessons" component={Lessons} />
            <Route path="/lessons/:number" component={Lesson} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
