import React from 'react';

function ClosedPost(props) {
    return <article className="ClosedPost">
        <p>Time</p>
        <h5>{props.param.title}</h5>
        <p>{props.param.userName}, {props.param.topic}</p>
        <p>{props.param.descrip}</p>

        <div className="row">
            <button>Like</button>
            <button>Comentar</button>
            <button>Compartir</button>
            <button>Denunciar</button>
        </div>
    </article>
}

export default ClosedPost;