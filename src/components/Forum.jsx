import React from 'react';
import InputPost from './InputPost';
import STORE from '../stores/Store';
import ClosedPost from './ClosedPost';
import '../styles/Forum.css'

class Forum extends React.Component {

    constructor(props){
        super(props);
        this.state = { intro: true, currentRol: '' }
    }

    render = () => this.state.intro?
    <article className="Welcome Forum container">
        <h1>Bienvenido a nuestro foro</h1>
        <div className="row">
            <img src="./images/forumWelcome.svg" alt="welcom"/>
            <div className="colum">
                <p>Aquí podrás encontrar información acerca de la labor y opinión de los diferentes voluntarios del proyecto y como se encuentra la ciudad, no sólo en temas de calidad del aire sino también movilidad, transporte sostenible, infraestructura, etc...</p>
                <h5>¡Esta es tu voz, nuestra voz!</h5>
                <p>Selecciona tu perfil</p>

                <select onChange={e => this.setState({currentRol: e.target.value})} value={this.state.currentRol} >
                    <option hidden>Seleccionar...</option>
                    {STORE.UserRols.map((rol, i) =>
                    <option key={i} value={rol.titulo}>{rol.titulo}</option>)}
                </select>
                
                <button onClick={()=>{
                    if(this.state.currentRol==='') return;
                    this.setState({intro: false});
                }}>Siguiente</button>
            </div>  
        </div>
    </article>
    :
    <article className="Forum container">
        <InputPost/>
        
        <div className="filters container "> <div className="row">
            <h6 className='col-2'>Colectivo</h6>
            <select name="select" className='col-2'>
                {['Biciarte','Cicloamigos'].map(
                    (item, i) => <option key={i} value={item}>{item}</option>
                )}
            </select>

            <h6 className='col-2'>Tema</h6>
            <select name="select" className='col-2'>
                {['Escoge un tema','Calidad del Aire', 'Infraestructura vial', 'Transporte sostenible'].map(
                    (item, i) => <option key={i} value={item}>{item}</option>
                )}
            </select>
        </div></div>

        {STORE.Posts.map( (item, i) => <ClosedPost key={i} param={item}/> )}
    </article>
}

export default Forum;