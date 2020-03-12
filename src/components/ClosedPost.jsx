import React from 'react';

function ClosedPost(props) {
    return <article className="ClosedPost container">
        <div className="row">
            <h5 className='col'>{props.param.title}</h5>
            <p className='col-md-auto'>Time</p>
        </div>
        <p className='name'>{props.param.userName}, {props.param.topic}</p>
        <p>{props.param.descrip}</p>

        <div className="actions row">
            <button>Like</button>
            <button>Comentar</button>
            <button>Compartir</button>
            <button>Denunciar</button>
        </div>
    </article>
}

export default ClosedPost;