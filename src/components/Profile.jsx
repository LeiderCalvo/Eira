import React from 'react';
import '../styles/Profile.css'

const Profile =  props => <article className="Profile container"><div className="grap row">
    <section className="aside col-4">
        <div className="row">
            <h6>Alvaro Vasquez</h6>
            <p>Cicloamigos</p>
        </div>
        <p className='age'>39 años</p>
        <img src="./images/chica.svg" alt="img"/>
        <span>progress</span>
        <p>principiante<strong>, 5200 exp</strong></p>

        <p>“Es increíble que todos juntos reportando datos sobre la calidad del aire, generemos tanto bienestar”</p>
        <div className="actions container">
            <div className="action row">
                <p>Recorridos</p><img src="./images/arrow.svg" alt=""/></div>
            <div className="action row">
                <p>Datos</p><img src="./images/arrow.svg" alt=""/></div>
            <div className="action row">
                <p>Retos</p><img src="./images/arrow.svg" alt=""/></div>
        </div>
    </section>

    <section className="actions col-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita porro magni necessitatibus tempora cumque id fugiat et impedit! Quisquam ipsa quos quas. Quidem, aspernatur omnis! Eius provident voluptatibus id modi.
    </section>
    </div></article>

export default Profile;