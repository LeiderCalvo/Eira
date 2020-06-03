var sub_nav_btns = document.querySelectorAll('.btn_sub_nav');
var dashs = document.querySelectorAll('.dash');

sub_nav_btns.forEach((sub, i) => {
    sub.onclick = e => {
        showDash(i);
    }
});

function showDash(i) {
    sub_nav_btns.forEach(s => s.classList.remove('selected'));
    sub_nav_btns[i].classList.add('selected');
    dashs.forEach(d => d.classList.remove('visible'));
    dashs[i].classList.add('visible');
}

window.onload = e => {
    showDash(0);
    var gen_rec = document.querySelector('.gen_rec');
    x_close_esp_Rec.onclick = closeGenRec;

    function getImg(toClose) {
        let img = document.createElement('img');
        img.classList.add('close');
        img.src = toClose ? "./images/close.svg" : "./images/community/up_rank.svg";
        img.onclick = toClose ? closeGenRec : openEspRec;
        return img;
    }

    function closeGenRec() {
        gen_rec.innerHTML = `<div class="row_color"></div>
        <div class="row" id='row_xclose'>
            <p id="date_today"></p>
        </div>`;
        let row = document.querySelector('#row_xclose');
        row.appendChild(getImg())
    }

    function openEspRec() {
        gen_rec.innerHTML = `<div class="row_color"></div>
        <div class="row" id='row_xclose'>
            <p id="date_today"></p>
        </div>
    
        <h5 class='title'>¿Que vemos en el mapa?</h5>
    
        <ul class="desc">
        <li>En el norte, noroeste y noreste de Cali se han evidenciado los niveles más altos de contaminantes respecto a otros sectores de la ciudad.</li>
        <li>Aún hay zonas de la ciudad sin mediciones y tú nos puedes ayudar a ofrecer más información.</li>
        <li> Las horas pico son los momentos de mayor riesgo. Estas se dan en horarios entre las 6:00 a.m. y las 8:00 a.m. y entre las 5:30 p.m. y las 8:00 p.m.</li>
        </ul>`;
        let row = document.querySelector('#row_xclose');
        row.appendChild(getImg(true))
    }


    /////map
    var filterEl = document.querySelector('#filterEl');
    let idLayers = ['airQuality-circles', 'earthquakes-heat2', 'earthquakes-heat3', 'earthquakes-heat4', 'earthquakes-heat5', 'earthquakes-heat6'];

    filterEl.addEventListener('change', e => {
        map.setLayerZoomRange('airQuality-circles', 13, 30);
        let polutionLevel = parseInt(e.target.value);
        map.setFilter('airQuality-circles', 
            [
                "all",
                [
                    ">=",
                    ["get", "mag"],
                    polutionLevel
                ],
                [
                    "<",
                    ["get", "mag"],
                    polutionLevel + 1
                ]
            ]
        );

        idLayers.forEach(function (a, index) {
            if(index > 0){
                map.setLayoutProperty(
                    a,
                    'visibility',
                    polutionLevel == (index+1) ? 'visible' : 'none'
                );
            }
        });
    });

    filterDay.addEventListener('change', e => {
        let day = parseInt(e.target.value);

        map.setLayerZoomRange('airQuality-circles', 8, 30);

        idLayers.forEach(idLayer => map.setFilter(idLayer, 
            [
                "all",
                [
                    ">=",
                    ["get", "time"],
                    day
                ],
                [
                    "<",
                    ["get", "time"],
                    day + 86400000
                ]
            ]
        ) );

        idLayers.forEach(function (a, index) {
            if(index > 0){
                map.setLayoutProperty(
                    a,
                    'visibility',
                    'none'
                );
            }
        });
    });

    filterCont.addEventListener('change', e => {
        let conta = e.target.value;

        map.setLayerZoomRange('airQuality-circles', 8, 30);

        idLayers.forEach(idLayer => map.setFilter(idLayer, 
            
                [
                    "match",
                    ["get", "contaminante"],
                    conta,
                    true,
                    false
                ]
        ) );

        idLayers.forEach(function (a, index) {
            if(index > 0){
                map.setLayoutProperty(
                    a,
                    'visibility',
                    'none'
                );
            }
        });
    })
}

