let posts = [];
const inter_colors = ['FD9797', 'FEE99D', '53FF64', 'FEBD3E', '8A8787', '1F0C56'];

window.addEventListener('load', w => {
    const body = document.querySelector('body');
    const post_wrapper = document.querySelector('.posts-wrapper');

    ManageData('get', 'collection', 'posts', undefined, undefined, (success, response) => {
        //console.log(success, response);
        if(success){
            for (let i = 0; i < response.docs.length; i++) {
                //console.log(response.docs[i].id, " => ", response.docs[i].data());
                posts.push(response.docs[i].data())   
            }
            posts.forEach(e => addNewPost(e));
        }
        //console.log(response.docs[0].data())
    })

    function addNewPost(post) {
        let postCont = document.createElement('div');
        let amountInter = post.likes + post.comments.length;
        
        postCont.classList.add('post');
        postCont.innerHTML = `
            <div class="title row">
                <p class='name'>${post.author}</p>
                <p>Hace ${post.time} horas</p>
            </div>
            <p>${post.subject}</p>
            <div class="row">
                <div class="reactions row">
                ${createInteractions(amountInter)}
                </div>
                <p>${amountInter} interacciones</p>
            </div>`;

        btn = document.createElement('button');
        btn.innerText = 'Ver más';
        btn.onclick = e => ver_mas_btn_action(post.id);

        postCont.appendChild(btn);
        post_wrapper.appendChild(postCont);
    }

    function ver_mas_btn_action (id){
        let post = posts[ posts.findIndex(e => e.id === id) ];
        let idd = Math.random().toString(36).substr(2, 9);

        see_int_cont.innerHTML = `
            ${createComment(post,0)}
            <input id='${'inpt'+idd}' type="text" placeholder="Escribe tu comentario...">
            <button id='${'btn'+idd}'>Comentar</button>

            <h6>Comentarios</h6>
            <div class="commets">${createComments(post.comments, 0)}</div>`;

        let x_closer = document.createElement('img');
        x_closer.src = "../images/close.svg";
        x_closer.classList.add('close');
        x_closer.onclick = e => {
            see_interactions.style.display  =  'none';
            body.style.overflow = 'auto';
        }

        see_int_cont.appendChild(x_closer);

        let inpt = document.querySelector(`#${'inpt'+idd}`);
        document.querySelector(`#${'btn'+idd}`).onclick = e => createNewComment(inpt, id);

        see_interactions.style.display  =  'block';
        body.style.overflow = 'hidden';
    }

    function createNewComment (inpt, id){
        let index = posts.findIndex(e => e.id === id);

        let name = localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')).user : 'Seguidor';
        let comm = {
            author: name,
            time: '0',
            likes: 0,
            subject: inpt.value,
            comments: []
        }
        posts[index].comments.push(comm);
        
        ManageData('set', 'doc', 'posts/'+id, posts[index], undefined, (success, response) => {
            console.log(success, response);
            ver_mas_btn_action(id)
        });
    }

    function createComment(com, type){
        return `<div class="post" style='width: ${100 - (type*10)}%;'>
        <div class="title row">
            <div class="row">
                <div class="img">${com.author.slice(0,1)}</div>
                <p class="name">${com.author}</p>
            </div>
            <p>Hace ${com.time} horas</p>
        </div>

        <p>${com.subject}</p>

        <div class="reactions row">
            <p class="likes_count">${com.likes} Me gusta</p>
            <div class="row">
                <p><img src="../images/like_hard.svg" alt="like"> Me gusta</p>
                ${type>0? '<p><img src="images/comment.svg" alt="comment"> Comentar</p>' : ''}
                <p><img src="../images/share.svg" alt="share"> Compartir</p>
            </div>
        </div>

    </div>`;
    }

    function createComments(comments, type) {
        let coms = comments.map( (e, i) => {
            let r = createComment(e, type);
            return e.comments.length > 0? (r + createComments(e.comments, type+1)) : r;
        });

        let str = '';
        coms.forEach(e => str += e );
        return str;
    }

    function createInteractions(amount) {
        let arr = [... new Array(amount>6? 6 : amount)];
        let interactions = arr.map( (e, i) => {
            return `<span style="background-color: #${inter_colors[i]};">${i === (arr.length - 1) ? ('+ ' + amount) : ''}</span>`
        });

        let str = '';
        interactions.forEach(e => str += e );
        return str;
    }


    newPostCreatorBtn.onclick = e => {
        let npc = document.querySelector('#newPostCreator');
        let name = localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')).user : 'Seguidor';
        let post = {
            author: name,
            time: '0',
            likes: 0,
            subject: npc.value,
            comments: []
        }

        let idd = createID('posts');
        ManageData('set', 'doc', 'posts/'+idd.id, post, undefined, (success, response) => console.log(success, response));
    }
})

/*
const posts = [{
    id: 'oh34hr3u94j93h4938h4',
    author: 'Leider Calvo',
    time: '3',
    likes: 20,
    subject: 'Con 10K, para el corredor habitual, 5K, para todos los que prefieren disfrutar de un precioso circuito por la casa de campo y carreras infantiles para niños desde los 3. Cada día se hace más evidente la necesidad de tomar acciones en beneficio de nuestro ecosistema, los gobiernos alrededor del mundo buscan soluciones para mitigar la contaminación y producción de residuos, asuntos en los que el transporte público y particular tienen especial relevancia al ser una de las actividades humanas con mayor producción de residuos y gases contaminantes.',
    comments: [{
        author: 'Seguidor',
        time: '2',
        likes: 0,
        subject: 'Totalmente de acuerdo con lo que menciona Daniel. Es necesario mano dura con el transporte público.',
        comments: [{
            author: 'Daniel Arboleda',
            time: '2',
            likes: 0,
            subject: 'Gracias Luis, la idea es movilizar a la ciudadanía a que expresen su opinión.',
            comments: [],
        }]
    }]
}];

let idd = createID('posts');
ManageData('set', 'doc', 'posts/'+idd.id, posts[0], undefined, (success, response) => console.log(success, response));
*/