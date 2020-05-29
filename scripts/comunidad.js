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
}, {
    id: '4444444444j93h4938h4',
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

const inter_colors = ['FD9797', 'FEE99D', '53FF64', 'FEBD3E', '8A8787', '1F0C56'];

window.addEventListener('load', w => {
    const post_wrapper = document.querySelector('.posts-wrapper');
    posts.forEach(e => addNewPost(e));

    function addNewPost(post) {
        let postCont = document.createElement('div');
        let amountInter = post.likes + post.comments.length;
    
        postCont.classList.add('post');
        postCont.innerHTML = `
            <div class="title row"> <p>${post.author}</p> <p>Hace ${post.time} horas</p> </div>
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
    }

    function createInteractions(amount) {
        let arr = [... new Array(amount>6? 6 : amount)];
        let interactions = arr.map( (e, i) => {
            return `<span style="background-color: #${inter_colors[i]};">${i === (arr.length - 1) ? ('+ ' + amount) : ''}</span>`
        });
    
        return interactions.reduce((a,b) => a + b);
    }
})