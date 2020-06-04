const db_rec = [{
    dir: 'Cl. 18 #122-135 - Cra. 85 #46-51',
    distancia: 20,
    similars: 3,
    ica: 'Bueno',
    color: '#07D00F'
},
{
    dir: 'Cra. 5 #46-51 - Cll 48 Cra 83E',
    distancia: 9,
    similars: 6,
    ica: 'Moderado',
    color: '#FFE661'
},
{
    dir: 'Cra. 85 #46-51 - Cl. 18 #122-135',
    distancia: 30,
    similars: 2,
    ica: 'Muy Dañino',
    color: '#FF514D'
}/*,
{
    dir: 'Cra. 4 #4-22 - Cll 23 Cra 5',
    distancia: 19,
    similars: 7,
    ica: 'Malo',
    color: 'rgb(209,201,91)'
},
{
    dir: 'Cll 5- Cll 23 Cra 8',
    distancia: 15,
    similars: 2,
    ica: 'Bueno',
    color: '#07D00F'
}*/]
const coordenadas = [
    {
    'type': 'Feature',
    'properties': {
        'color': '#07D00F',
        'idd': 0
    },
    'geometry': {
        'type': 'LineString',
        'coordinates': [
            [-76.530865, 3.342852],
            [-76.53023, 3.35056 ],
            [-76.530472, 3.359481],
            [-76.5319, 3.36372],
            [-76.529588, 3.367518],
            [-76.528414, 3.387799],
            [ -76.529918, 3.387799],
        ]
    },
},
{
    'type': 'Feature',
    'properties': {
        'color': '#FFE661',
        'idd': 1
    },
    'geometry': {
        'type': 'LineString',
        'coordinates': [
            [-76.528729, 3.413091],
            [-76.527261, 3.417918],
            [ -76.520953, 3.419023],
            [-76.508433, 3.419816],
            [-76.506453, 3.42386],
            [-76.505607, 3.423515]
        ]
    },
},
{
    'type': 'Feature',
    'properties': { 
        'color': '#FF514D',
        'idd': 2
    },
    'geometry': {
        'type': 'LineString',
        'coordinates': [
            [-76.523334, 3.381971],
            [ -76.524421, 3.382049],
            [ -76.524265, 3.385344],
            [ -76.524402, 3.386651],
            [ -76.522818, 3.401541],
            [ -76.522433, 3.401207],
            [ -76.521636, 3.401485],
        ]
    },
}]

if (localStorage.getItem('isCurrentUser') !== 'true') {
    window.location.href = '/';
}

window.addEventListener('load', w => {
    var sn_items = document.querySelectorAll('.sn_item');
    var dashs = document.querySelectorAll('.dash');
    showDash(2);
    
    sn_items.forEach((sub, i) => {
        sub.onclick = e => showDash(i);
    });

    let user = JSON.parse(localStorage.getItem('user'));
    document.querySelectorAll('.user_name').forEach(e => {
        e.innerText = user.user;
    });


    function showDash(i) {
        sn_items.forEach(s => s.classList.remove('selected'));
        sn_items[i].classList.add('selected');
        dashs.forEach(d => d.classList.remove('visible'));
        dashs[i].classList.add('visible');
    }


    var reco_cont = document.querySelector('.recorridos');
    var arr_rec = [];
    db_rec.forEach((rec, j) => {
        let div = document.createElement('div');
        div.classList.add('recorrido');
        j === 0 && div.classList.add('selected');
        div.innerHTML = `
            <div class='mark' style='background-color: ${rec.color};'></div>
            <p class='dir'>${rec.dir}</p>
            <p>Distancia: ${rec.distancia} km</p>
            <p>Personas que han hecho este recorrido: ${rec.similars}</p>
            <p class='ica'>Índice de calidad del aire: ${rec.ica}</p>
        `;
        div.onclick = e => clickRec(j);
        arr_rec.push(div);
        reco_cont.appendChild(div);
    });

    function clickRec(i) {
        arr_rec.forEach(r => r.classList.remove('selected'));
        arr_rec[i].classList.add('selected');
        map.setFilter('lines', 
            [
                "all",
                [
                    "==",
                    ["get", "idd"],
                    i
                ]
            ]
        );
    }



    //Creating map
    mapboxgl.accessToken = 'pk.eyJ1IjoibGVpZGVyY2Fsdm8iLCJhIjoiY2s4MGNlbHZ4MGRwZzNlcGExMmo3cXF6YSJ9.V2d9VILjJixw_LEjcT7L9g';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-76.54, 3.39, 0],
        zoom: 12,
    });

    //map controls
    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'bottom-right');

    map.on('load', function () {
        map.addSource('lines', {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': coordenadas
            }
        });

        map.addLayer({
            'id': 'lines',
            'type': 'line',
            'source': 'lines',
            'paint': {
                'line-width': 3,
                'line-color': ['get', 'color']
            }
        });
    });


    ////////////////
    actual_reto.onclick = e => {
        actual_reto.innerText = 'Reto aceptado¡'
        actual_reto.classList.add('aceptado');
    }

    shareResult = document.querySelector('#share'),
    redes = document.querySelector('#shareInfo');

    shareResult.onclick = ()=> {
        redes.style.display = redes.style.display === 'flex'? 'none' : 'flex';
    };
})
