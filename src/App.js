import React, { Component } from 'react';
import './App.css';
import { Navigation } from './components/Navigation.component';
import { Switch, Route } from 'react-router-dom';
import { Home } from './components/Home.component';
import { List } from './components/List.component';
import { Details } from './components/Details.component';
import { data } from './components/data';

class App extends Component {
  render() {
    return (
      // <Router>
      <div className="App">
        <Navigation/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/list' render={props => (<List data={data}/>)}/>
            <Route path='/details/:name' render={ props => (<Details data={data}{...props} />)} />
        </Switch>
      </div>
    );
  }
}

export default App;
