import React from 'react';
import STORE from '../stores/Store';
import Testimonies from './Testimonies';

function Landing() {
    return <article className="Landing">
        <p>Soñamos con una Cali donde <strong>todos los ciudadanos nos comprometemos</strong> a aportar para cuidar la <strong>calidad del aire que respiramos</strong></p>

        <h2>¿Cómo puedo contribuir?</h2>
        <p>Contribuir a tener un mejor aire y así mismo una mejor calidad de vida es muy fácil.</p>

        <div className="wrap">
            {STORE.GeneralAdvices.map( (adv, i) => 
                <div className="" key={i+'adv'}>
                    <h3>{adv.title}</h3>
                    <ul>{ adv.advices.map( (subAdv, i) => <li key={i+'subAdv'}>{subAdv}</li> )} </ul>
                </div>
            )}
        </div>

        <h2>¿Que logramos cuando contribuimos?</h2>
        <p>Contribuir a tener un mejor aire y así mismo una mejor calidad de vida es muy fácil.</p>
        
        <div>
            <h4>Ciudadanía más informada</h4>
            <h4>Impactar de forma positiva nuestro entorno</h4>
            <h4>Desarrollar políticas públicas efectivas</h4>
        </div>

        <Testimonies/>
        
        <h2>¿Cómo trabajamos?</h2>
        <p>Hacemos de la ciudad, un gran equipo unido por la calidad del aire.</p>

        <div className="colums">
            <div className="colum">
                {STORE.ProyectStages.map( (stage, i) =>
                    <div key={i+"stage"}>
                        <h4>Etapa {i+1}</h4>
                        <h3>{stage.title}</h3>
                        <p>{stage.description}</p>
                    </div>)
                }
            </div>
            <div className="colum"></div>
        </div>


    </article>
}

export default Landing;