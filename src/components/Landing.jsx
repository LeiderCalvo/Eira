import React, {useState} from 'react';
import '../styles/Landing.css'
import STORE from '../stores/Store';
import Testimonies from './Testimonies';
import Map from './Map';

function Landing() {
    const [banner, setBanner] = useState(0);
    return <div className="preLanding">
            <div className="banner" style={{display: banner==0?'block' : 'none'}}>
                <h1>Calidad del Aire</h1>
                <p>Tiempo real</p>

                <h5>Gracias a la <strong>labor de la ciudadanía,</strong> se logra medir <strong>de manera confiable</strong> la calidad del aire que <strong>respiramos a diario en la ciudad.</strong></h5>
                <button onClick={()=>setBanner(1)}>>></button>

                <p className='location'>Cali, Colombia</p>
            </div>
            <div className="banner two" style={{display: banner==1?'flex' : 'none'}}>
                <p>Navega por <strong>tú ciudad</strong> y entérate como puedes contribuir a su cuidado</p>
                <button onClick={()=>setBanner(2)}>>></button>
            </div>
            <Map banner={banner}/>
        <article className="Landing container">
        <div className="container description">
            <h6>Soñamos con una Cali donde <strong>todos los ciudadanos nos comprometemos</strong> a aportar para cuidar la <strong>calidad del aire que respiramos</strong></h6>
        </div>

        <h4>¿Cómo puedo contribuir?</h4>
        <p>Contribuir a tener un mejor aire y así mismo una mejor calidad de vida es muy fácil.</p>

        <div className="advices row row-cols-2">
            {STORE.GeneralAdvices.map( (adv, i) => 
                <div className="advice col" key={i+'adv'}>
                    <h5>{adv.title}</h5>
                    <ul>{ adv.advices.map( (subAdv, i) => <li key={i+'subAdv'}>{subAdv}</li> )} </ul>
                </div>
            )}
        </div>

        <h4>¿Que logramos cuando contribuimos?</h4>
        <p>Contribuir a tener un mejor aire y así mismo una mejor calidad de vida es muy fácil.</p>
        
        <div className='row beneficios'>
            <h6 className='col'>Ciudadanía más informada</h6>
            <h6 className='col'>Impactar de forma positiva nuestro entorno</h6>
            <h6 className='col'>Desarrollar políticas públicas efectivas</h6>
        </div>

        <Testimonies/>
        
        <h4>¿Cómo trabajamos?</h4>
        <p>Hacemos de la ciudad, un gran equipo unido por la calidad del aire.</p>

        <div className="stages row">
            <div className="col">
                {STORE.ProyectStages.map( (stage, i) =>
                    <div key={i+"stage"}>
                        <h6>Etapa {i+1}</h6>
                        <h5>{stage.title}</h5>
                        <p>{stage.description}</p>
                    </div>)
                }
            </div>
            <div className="images col">
                <img className='cero' src="./images/vinculation.svg" alt=""/>
                <img className='uno' src="./images/monitoring.svg" alt=""/>
                <img className='dos' src="./images/visualization.svg" alt=""/>
                <img className='tres' src="./images/action.svg" alt=""/>
            </div>
        </div>

        <section className='call-to-action container'>
            <h4>¿Quieres hacer más por ti, tu comunidad y la ciudad?</h4>
            <p>Únete y participa en una red de voluntarios que a través de pequeñas acciones, buscan impactar y empoderar a otros ciudadanos.</p>

            <button className='btn-2'>Ùnete</button>
            <a>¿Quieres aportar de otra manera? <strong>Haz una donanción</strong></a>
        </section>

        <section className='stakeholders row'>
            <img src="./images/mtnm.svg" alt="mtnm"/>
            <img src="./images/cicloamigos.svg" alt="cicloamigos"/>
            <img src="./images/dagma.svg" alt="dagma"/>
        </section>


    </article></div>
}

export default Landing;