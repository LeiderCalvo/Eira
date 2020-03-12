import React from 'react';
import InputPost from './InputPost';
import STORE from '../stores/Store';
import ClosedPost from './ClosedPost';
import '../styles/Forum.css'

class Forum extends React.Component {

    render = () => <article className="Forum container">
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