import React from 'react';
import InputPost from './InputPost';
import STORE from '../stores/Store';
import ClosedPost from './ClosedPost';

class Forum extends React.Component {

    render = () => <article className="Forum">
        <InputPost/>
        {STORE.Posts.map( (item, i) => <ClosedPost key={i} param={item}/> )}
    </article>
}

export default Forum;