import React from 'react';
//import './App.css';

import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import FireBaseSerivces from '../utils/FireBaseSerivces';
import FireStore from '../utils/FireStore';
import Nav from './Nav';
import Landing from './Landing';
import Loading from './Loading';
import Footer from './Footer';

class App extends React.Component {

  constructor(props){
    super(props);
    FireBaseSerivces.init();
    /*
    this.state = {
      data: null
    }

    setInterval(()=>FireStore.ManageData('add', 'collection', 'data', 
    {
      pm2: Math.random(),
      pm10: Math.random(),
      humedity: Math.random()
    }, undefined, ()=>{}), 60000);

    FireStore.listener('collection', 'data' ,(data)=>{
      this.setState({data});
    });    */
  }

  render(){
    return (
        <Router basename="">
          <Nav/>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/comolohacemos" component={Landing} />
            <Route exact path="/donaciones" component={Landing} />
            <Route exact path="/comunidad" component={Landing} />
            <Route exact path="/login" component={Landing} />
          </Switch>
          <Footer/>
        </Router>
    );
  }
};

export default App;

{/*
        <section className="intro">
          <img src="" alt=""/>

          <div className="">
            <h4>Álvaro Vasquez</h4>
            <p>Cicloamigos</p>
          </div>

          <div className="">
              <div className="">
                <p>Rango</p>
                <img src="" alt=""/>
              </div>
              <div className="">
                <p>Principiante</p>
                <span>Barra</span>
              </div>
          </div>
        </section>


        <h3 className='title'>Datos</h3>
        <section className="datos">
          {
              this.state.data.map( (doc, i) => 
              <div className='data' index={i}>
                <h4>Registro: {doc.id}</h4>
                <hr/>
                <p className="pm2"><strong>PM 2.5:</strong> {doc.data().pm2}</p>
                <p className="pm10"><strong>PM 10:</strong> {doc.data().pm10}</p>
                <p className="humedity"><strong>Humendad:</strong> {doc.data().humedity}</p>
              </div>)
          }
        </section>
        */}