var if_log = document.querySelector('#if_log');
window.addEventListener('storage', function (e) {
    //console.log(e.key); console.log(e.oldValue); console.log(e.newValue); console.log(e.url); console.log(JSON.stringify(e.storageArea));

    if (e.key === 'log_display') {
        if_log.style.display = e.newValue;
    }

    if (e.key === 'user') {
        updateLocal();
    }
});

function updateLocal() {
    console.log('updateLocal');
    if(localStorage.getItem('isCurrentUser') === 'true'){
        let user = JSON.parse(localStorage.getItem('user'));
        init_sesion.classList.remove('log');
        init_sesion.classList.add('user');
        init_sesion.innerText = user.user;
        init_sesion.onclick = e => window.location.href = 'perfil.html';
    }
}

window.addEventListener('load', e => {
    updateLocal();

    //display logging
    document.querySelectorAll('.log').forEach(e => {
        e.addEventListener('click', i => {
            localStorage.setItem('logtype', e.dataset.logtype ? e.dataset.logtype : 0);
            localStorage.setItem('log_display', 'block');
            if_log.style.display = 'block';
        });
    });

    //testimony sliders
    let testimonies = [{
        quote: 'Ahora la ciudadanía está más informada y puede cuidar de sí mismo para prevenir problemas de tipo respiratorio',
        name: 'Humberto Puertas',
        rol: 'Medico General'
    },
    {
        quote: 'Cuando me uní como voluntaria me dieron incluso implementos básicos como el casco para bicicleta',
        name: 'Aura Valencia',
        rol: 'Voluntaria Eira'
    },
    {
        quote: 'Gracias a Eira, ahora podemos complementar la información de calidad del aire para generar mejores políticas públicas.',
        name: 'Claudia María Buitrago',
        rol: 'Directora del DAGMA'
    },
    {
        quote: 'Ser voluntaria no me ha impedido continuar con mis labores, incluso me ha ayudado a cuidarme más cuando lo hago',
        name: 'Monica Estrada',
        rol: 'Voluntaria Eira'
    },
    {
        quote: 'Siempre quise aportar mi grano de arena por el medio ambiente, y por fín encontré el medio para hacerlo.',
        name: 'Santiago Rosero',
        rol: 'Voluntario Eira'
    }];

    testimonies = testimonies.reduce((a,v)=>a.splice(Math.floor(Math.random() * a.length), 0, v) && a, []);
    testimonies = testimonies.slice(0,3);

    const testomny = document.querySelector('.testimony');
    var tickMarks = document.querySelector('.tickMarks'), count = 0;
    let time = testomny ? setInterval(interval, 5000) : undefined;
    testomny && setTestimony(testimonies[count])

    function setTestimony(t) {
        createTickMarks();
        tesm_quote.innerText = `“${t.quote}”`;
        tesm_name.innerHTML = `${t.name}, <strong>${t.rol}</strong>`;
        tesm_img.src = `images/testimonies/${t.name.replace(/ /g, "").toLocaleLowerCase()}.svg`;

        testomny.appendChild(tickMarks);
    }

    function createTickMarks() {
        tickMarks.innerHTML = '';
        testimonies.forEach((e, index) => {
            let mark = document.createElement('div');
            mark.onclick = e => mark_onclick(index);
            count === index && mark.classList.add('selected');
            tickMarks.appendChild(mark);
        })
    }

    function mark_onclick(index) {
        clearInterval(time);
        time = setInterval(interval, 5000);
        count = index;
        setTestimony(testimonies[index]);
    }

    function interval() {
        count = count < testimonies.length - 1 ? (count + 1) : 0;
        setTestimony(testimonies[count])
    }
})

/*
*Faltó cambiar las fotos del banner del primer landing y el de voluntarios, que  no salga siempre la misma foto.

*En el mapa es posible que solo salgan direcciones de Cali? (Como para acomodar luego)

*Complementar la info de lo que sale en que cada zona. Que diga como esta la calidad del aire en esa zona y la recomendación. Como está en el figma. Yo te ayudo buscando más metáforas para utilizar

*El texto del paso 2 hay que cambiar especificando los lugares donde se puede acercar y que en el perfil no hay ningún identificador entonces hay que acomodar eso.

[8:56 a. m., 5/6/2020] Daniel: Pana, yo creo que la última cosa por hacer aparte de lo que dijiste, es poner la gráfica principal de datos históricos en el landing principal. Como mostrando un poquito de lo que tenemos y que haya un botón que lo lleve a datos históricos por si quiere saber más
[8:57 a. m., 5/6/2020] Daniel: Y lo otro es los nombres de los ejes de las gráficas, fijarse en que inicien en mayúscula y estén escritos en español

*/