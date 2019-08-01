import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from '../src/components/login';
import Register from './components/register';
import Addressbook from './components/addressbook';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/addressbook' component={Addressbook}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;