import React from 'react';
import '../styles/Donations.css'

class Donations extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isMoney: true,
            isSplah: false,
            notification: '',
            name: '', typeDoc: '', doc: '', email: '', subject: '', amount: ''
        }
        this.handleDonar = this.handleDonar.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleDonar(){
        for (const key in this.state) {
            if (this.state.hasOwnProperty(key)) {
                if(this.state[key] === '' && key  !== 'notification'){
                    this.setState({notification: 'Por favor llene todos los campos'})
                    return
                };
            }
        }
        
        this.setState({isSplah: true})
    }

    handleChange(prop, val){
        let temp = {};
        temp[prop] = val;
        this.setState(temp);
    }

    render(){
        const { name, typeDoc, doc, email, subject, amount } = this.state;
        return <article className="Donations">

            <div className="splahs" style={{display: this.state.isSplah? 'flex' : 'none'}}>
                <div className="message">
                    <img src="./images/logo.svg" alt=""/>
                    <p>{this.state.isMoney? 'Tu danación se ha realizado con éxito' : 'Para finalizar, puedes llevar tus donaciones a la siguiente dirección:'}</p>
                    <h5>{this.state.isMoney? '!Es momento de sentirte orgulloso¡' : 'Cra. 3 # 56 - 30 - Secretaria de movilidad de Cali'}</h5>
                    <button onClick={()=>{
                        this.state.isMoney?
                            /*fetch('https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu',
                                { method: 'POST',
                                mode: 'no-cors',
                                cache: 'default' })*/
                            window.location.href = 'https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu'
                        :
                            this.setState({isSplah: false});
                    }}>Aceptar</button>
                </div>
            </div>

            <div className="banner">
                <img src="./images/DonationsBanner.svg" alt="banner"/>
                <h1>EIRA, de ciudadanos para ciudadanos</h1>

                <h5>Con tu ayuda, podremos seguir aportando a que Cali tenga <strong>ciudadanos mejor informados</strong> y que se <strong>tomen mejores decisiones</strong> respecto a la calidad del aire de nuestra ciudad.</h5>

                {/* <button>Donar</button>*/}

                <p className='location'>Cali, Colombia</p>
            </div>

            <section className="form row">

                <div className="first">
                    <h4>¿Qué deseas donar?</h4>
                        <div>
                            <img src={"./images/money"+(this.state.isMoney? 1 : 0)+".svg"} alt="" onClick={()=>this.setState({isMoney: true})}/>
                            <p>Dinero</p>
                        </div>
                        <div className="">
                            <img src={"./images/helmet"+(this.state.isMoney? 0 : 1)+".svg"} alt="" onClick={()=>this.setState({isMoney: false})}/>
                            <p>Equipo</p>
                        </div>
                </div>
                <div className="second">
                    <h4>Información personal</h4>
                    <input type="text" placeholder='Nombre Completo' value={name} onChange={(e)=>this.handleChange('name', e.target.value+'')}/>
                    <select onChange={(e)=>this.handleChange('typeDoc', e.target.value+'')}>
                        <option hidden>Tipo de Documento</option>
                        <option value='cc'>Cedula de Ciudadanía</option>
                        <option value='cx'>Cedula de Extranjera</option>
                        <option value='cc'>Tarjeta de Identidad</option>
                    </select>
                    <input type={this.state.isMoney ? "number" : "text"} placeholder='Nª de identificación' value={doc} onChange={(e)=>this.handleChange('doc', e.target.value+'')}/>
                    <input type="email" placeholder='Correo electrónico' value={email} onChange={(e)=>this.handleChange('email', e.target.value+'')}/>
                    <input type={this.state.isMoney ? "number" : "text"} placeholder={this.state.isMoney ? 'Monto a donar' : 'Elemento a donar'} value={subject} onChange={(e)=>this.handleChange('subject', e.target.value+'')}/>
                    <input type="text" placeholder={this.state.isMoney ? 'Medio de pago' : 'cantidad'} value={amount} onChange={(e)=>this.handleChange('amount', e.target.value+'')}/>
                </div>
            </section>
            <button className='btnDonar' onClick={this.handleDonar} >Donar</button>
            <p className='not'>{this.state.notification !== '' ? this.state.notification : ''}</p>
        </article>
    }
}

export default Donations;