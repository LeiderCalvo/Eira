import React from 'react';
import { observer } from 'mobx-react';
import '../styles/Log.css'
import STORE from '../stores/Store';
import FireAuth from '../utils/FireAuth';
import { withRouter } from 'react-router-dom';

const Log = observer( class Log extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLogging: false,
            isReg : false,
            user: '',
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.isLogged = this.isLogged.bind(this);
    }

    componentDidMount = () => FireAuth.updateLocal();

    isLogged(isSucces, response){
        if(isSucces) {
            //STORE.displayToast('Bienvenido ' + STORE.user.name, 'success');
            STORE.setter('isLogging', false);
            this.props.history.push('/perfil');
            //console.log(response, 'succes')
        } else {
            //STORE.displayToast(response+'', 'error');
            //console.log(response+'', 'error')
        } 

        this.setState({isLogging: false})
    }

    handleClick(){
        const {isLogging, isReg, user, email, password} = this.state;
        if(!isLogging) {
            //if (email === '' || password === '') { STORE.displayToast('Por favor llene todos los campos', 'warning'); return; }
            //if (isReg && name === '') { STORE.displayToast('Por favor llene todos los campos', 'warning'); return; }
            //if (email.includes(' ') || password.includes(' ')) { STORE.displayToast('Por favor no use espacios', 'warning'); return; }
            //if (email.length < 4) { STORE.displayToast('Por favor use mas de 4 caracteres en su correo', 'info'); return; }
            //if (password.length < 6) { STORE.displayToast('Por favor use mas de 6 caracteres en su contraseña', 'info'); return; }
            
            FireAuth.Login( { user, email,  password }, isReg, this.isLogged);
            this.setState({isLogging: true})
        }
    }

    handleChange(prop, val){
        let temp = {};
        temp[prop] = val;
        this.setState(temp);
    }

    render(){
        const {isReg, user, email, password} = this.state;

        return STORE.isLogging? <article className="Log container">
            <img src="./images/close.svg" alt="close" className="close" onClick={()=>STORE.setter('isLogging', false)}/>
            <div className="container">
                <h5>{isReg? 'Registrarse' : 'Iniciar sesión'}</h5>
                <div className="row">
                    <button className='col-2'> <img src="./images/twitter.svg" alt="twitter"/> TWITTER</button>
                    <button className='col-2'> <img src="./images/facebook.svg" alt="facebook"/> FACEBOOK</button>
                    <button className='col-2'> <img src="./images/google.svg" alt="google"/> GOOGLE</button>
                </div>

                <p>ó</p>

                {isReg && <input type="text" placeholder='Usuario'
                    value={user} onChange={(e)=>this.handleChange('user', e.target.value)}/> }
                <input type="email" placeholder='Correo electrónico'
                    value={email} onChange={(e)=>this.handleChange('email', e.target.value)}/>
                <input type="password" placeholder='Contraseña'
                    value={password} onChange={(e)=>this.handleChange('password', e.target.value)}/>

                <button onClick={this.handleClick}>{isReg? 'Registrarse' : 'Iniciar sesión'}</button>

                <div className="row">
                    <p>{isReg? '¿Ya eres voluntario?' : '¿No eres voluntario aún?'}</p>
                    <p onClick={() => this.setState( prev => { return {isReg: !prev.isReg} } ) }>
                        <strong>{isReg? 'Inicia sesión' : 'Registrate'}</strong>
                    </p>
                </div>
            </div>
        </article>: null;
    }
});

export default withRouter(Log);