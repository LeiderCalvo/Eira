import React from 'react';
//import './App.css';

import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { observer } from 'mobx-react';
import FireBaseSerivces from '../utils/FireBaseSerivces';
import FireStore from '../utils/FireStore';

const App = observer( class App extends React.Component {

  constructor(props){
    super(props);
    FireBaseSerivces.init();

    this.state = {
      data: null
    }

    /*setInterval(()=>FireStore.ManageData('add', 'collection', 'data', 
    {
      pm2: Math.random(),
      pm10: Math.random(),
      humedity: Math.random()
    }, undefined, ()=>{}), 60000);*/

    FireStore.listener('collection', 'data' ,(data)=>{
      this.setState({data});
    });    
  }

  render(){
    return (
      this.state.data? <div className="App">
        {
            this.state.data.map( (doc, i) => 
            <div className='data' index={i}>
              <h3>Registro: {doc.id}</h3>
              <p className="pm2"><strong>PM 2.5:</strong> {doc.data().pm2}</p>
              <p className="pm10"><strong>PM 10:</strong> {doc.data().pm10}</p>
              <p className="humedity"><strong>Humendad:</strong> {doc.data().humedity}</p>
            </div>)
        }

        
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
      </div> : <div className="App">Cargando ...</div>
    );
  }
});

export default App;