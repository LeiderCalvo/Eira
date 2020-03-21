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
import Forum from './Forum';
import Log from './Log';
import Profile from './Profile';

class App extends React.Component {

  constructor(props){
    super(props);
    FireBaseSerivces.init();
    /*
    this.state = {
      data: null
    }

    

    FireStore.listener('collection', 'data' ,(data)=>{
      this.setState({data});
    });
    {
      pm2: Math.random(),
      pm10: Math.random(),
      humedity: Math.random()

      "type": "FeatureCollection",
      "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
      "features": [
        {"properties": { "id": "ak16994521", "mag": 2.3, "time": 1507425650893 }, "geometry": { "type": "Point", "coordinates": [ -151.5129, 63.1016, 0.0 ] } }
      }
      
     //FireStore.delet();
      setInterval( () => {
        const id = FireStore.createID('data');
        FireStore.ManageData('set', 'doc', id.path,
          {
            "properties": {
              "id": id.id,
              "mag": Math.random() * 7,
              "time": Date.now()
            },
            "geometry": {
              "coordinates": [
                Math.random() * (3.614 - 3.311) + 3.311,
                Math.random() * ((-76.573) - (-76.366)) + (-76.366), 0.0 ]
              }
          },
        undefined, ()=>{}) },
      200);
      */
  }

  render(){
    return (
        <Router basename="Eira">
          <Log/>
          <Nav/>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/comolohacemos" component={Landing} />
            <Route exact path="/donaciones" component={Landing} />
            <Route exact path="/perfil" component={Profile} />
            <Route exact path="/foro" component={Forum} />
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