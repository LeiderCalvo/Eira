import React from 'react';
//import './App.css';

import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { observer } from 'mobx-react';
import STORE from '../stores/Store';

const App = observer( function App() {
  setTimeout(() => {
    STORE.setText('increibe');
  }, 10000);
  return (
    <div className="App">
      {STORE.text}
      {/* decomentar el router al probar que funciona 
      <Router basename="">
        <header>
          {//maybe you need a logo or nav right here to be always present
          }
        </header>

        <Switch>
          <Route exact path="/" component={} />
        </Switch>

        <footer>
          {//maybe your footer should be always present
          }
        </footer>
      </Router>
        */}
    </div>
  );
});

export default App;