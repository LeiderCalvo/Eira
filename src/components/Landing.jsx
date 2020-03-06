import React from 'react';
import '../styles/Landing.css'
import STORE from '../stores/Store';
import Testimonies from './Testimonies';

function Landing() {
    return <article className="Landing container">
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
            <div className="col"></div>
        </div>

        <section className='call-to-action container'>
            <h4>¿Quieres hacer más por ti, tu comunidad y la ciudad?</h4>
            <p>Únete y participa en una red de voluntarios que a través de pequeñas acciones, buscan impactar y empoderar a otros ciudadanos.</p>

            <button className='btn-2'>Ùnete</button>
            <a>¿Quieres aportar de otra manera? <strong>Haz una donanción</strong></a>
        </section>

        <section>
            <img src="" alt=""/>
            <img src="" alt=""/>
            <img src="" alt=""/>
        </section>


    </article>
}

export default Landing;