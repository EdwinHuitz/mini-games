import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Nbar from './components/navBar/navBar'
import Ttt from './components/ticTacToe/tic-tac-toe'
function App(props) {
  return (
    <div className="App">
      <Nbar />
      <Switch>
        <Route path="/tic-tac-toe" component={Ttt} />
      </Switch>
      <footer className="btm">
      </footer>
    </div>
  );
}

export default App;
