import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom'
import Homepage from './views/Homepage/Homepage'
import Login from './views/Login/Login'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
