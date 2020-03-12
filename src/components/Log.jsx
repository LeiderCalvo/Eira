import React from 'react';
import { observer } from 'mobx-react';
import '../styles/Log.css'
import STORE from '../stores/Store';

const Log = observer( class Log extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            reg : false
        }
    }

    render(){
        return STORE.isLogging? <article className="Log container">
            <img src="./images/close.svg" alt="close" className="close" onClick={()=>STORE.setter('isLogging', false)}/>
            <div className="container">
                <h5>{this.state.reg? 'Iniciar sesión' : 'Registrarse'}</h5>
                <div className="row">
                    <button className='col-2'> <img src="./images/twitter.svg" alt="twitter"/> TWITTER</button>
                    <button className='col-2'> <img src="./images/facebook.svg" alt="facebook"/> FACEBOOK</button>
                    <button className='col-2'> <img src="./images/google.svg" alt="google"/> GOOGLE</button>
                </div>
                <p>ó</p>
                {!this.state.reg && <input type="text" placeholder='Usuario'/> }
                <input type="text" placeholder='Correo electrónico'/>
                <input type="text" placeholder='Contraseña'/>

                <button>{this.state.reg? 'Iniciar sesión' : 'Registrarse'}</button>

                <div className="row">
                    <p>{this.state.reg? '¿No eres voluntario aún?' : '¿Ya eres voluntario?'}</p>
                    <p onClick={()=> this.setState( prev => { return {reg: !prev.reg} } ) }><strong>{this.state.reg? 'Registrate' : 'Inicia sesión'}</strong></p>
                </div>
            </div>
        </article>: null;
    }
});

export default Log;