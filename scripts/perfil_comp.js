const volsDB = [{
    date: '12/03/2020',
    name: 'Daniel Arboleda',
    meditions: 20,
    kms: 24
},
{
    date: '20/03/2020',
    name: 'Alvaro vasquez',
    meditions: 17,
    kms: 80
},
{
    date: '07/04/2020',
    name: 'Lucia Ramirez',
    meditions: 15,
    kms: 67
},
{
    date: '22/06/2020',
    name: 'Andrea Torres',
    meditions: 15,
    kms: 33
},
{
    date: '13/05/2020',
    name: 'Pablo Garzon',
    meditions: 10,
    kms: 16
},
{
    date: '06/04/2020',
    name: 'Lina Bustamante',
    meditions: 9,
    kms: 12
}]

if (localStorage.getItem('isCurrentUser') !== 'true') {
    window.location.href = '/';
}

window.addEventListener('load', w => {
    logout.onclick = e => {
        localStorage.clear();
        window.location.href = '/';
    };

    var sn_items = document.querySelectorAll('.sn_item');
    var dashs = document.querySelectorAll('.dash');
    showDash(0);
    
    sn_items.forEach((sub, i) => {
        sub.onclick = e => showDash(i);
    });

    let user = JSON.parse(localStorage.getItem('user'));
    user_id.innerText = '@' + user.id;
    user_sector.innerText = user.sector + ' - ' + '30 voluntarios';
    document.querySelectorAll('.user_name').forEach(e => {
        e.innerText = user.user;
    });

    function showDash(i) {
        sn_items.forEach(s => s.classList.remove('selected'));
        sn_items[i].classList.add('selected');
        dashs.forEach(d => d.classList.remove('visible'));
        dashs[i].classList.add('visible');
    }

    let cont =  document.querySelector('.comp_vol');
    ///////finder
    finder.oninput = e => {
        let val = e.target.value.toLowerCase();
        cont.innerHTML = '';
        let arr = [...volsDB];
        arr = arr.filter(vol => {
            return vol.name.toLowerCase().substring(0, val.length) === val
        });

        arr.forEach(vol => createVol(vol));
    }

    ///////// voluntarios
    volsDB.forEach(vol => createVol(vol));

    function createVol(vol) {
        let sect = document.createElement('section');
        sect.classList.add('row');
        sect.classList.add('cont');

        sect.innerHTML = `<img src="images/community/perf_min_${vol.name.replace(' ', '').toLowerCase()}.svg" alt="">
        <div>
            <h4>${vol.name}</h4>
            <p>Vinculado al proyecto desde ${vol.date}</p>
            <h6>${vol.meditions} medicones</h6>
            <h6>${vol.kms} kms recorridos</h6>
        </div>`;

        cont.appendChild(sect);
    }

    ///////////plots
    var volComs = {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "data": {
            "values": [
                { "comp": "Celsia", "amoung": 20 },
                { "comp": "Emcali", "amoung": 15 },
                { "comp": "Alcaldía de Cali", "amoung": 47 },
                { "comp": "Panadería La Kuty", "amoung": 9 },
                { "comp": "Juan Sangría", "amoung": 4 },
                { "comp": "Gases de Occidente", "amoung": 29 },
                { "comp": "Comfandi", "amoung": 30 },
                { "comp": "Bavaria", "amoung": 16 },
            ]
        },
        "mark": {"type": "line", "color": '#3DA9FC'},
        "height": { "step": 60 },
        "width": "container",
        "encoding": {
          "x": {"field": "comp", "type": "nominal", "title": null},
          "y": {"field": "amoung", "type": "quantitative", "title": "Nº de voluntarios"}
        }
    }
    vegaEmbed('#volComs', volComs);

    var medComps = {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        //"width": "container",
        "data": {
            "values": [
                { "Activity": "Celsia", "amoung": 25 },
                { "Activity": "Emcali", "amoung": 13 },
                { "Activity": "Alcaldía de Cali", "amoung": 17 },
                { "Activity": "Panadería La Kuty", "amoung": 9 },
                { "Activity": "Juan Sangría", "amoung": 12 },
                { "Activity": "Gases de Occidente", "amoung": 17 },
                { "Activity": "Comfandi", "amoung": 9 },
                { "Activity": "Bavaria", "amoung": 5 },
            ]
        },
        "height": { "step": 60 },
        "width": "container",
        "encoding": {
            "x": { "field": "amoung", "type": "quantitative", "title": null },
            "y": { "field": "Activity", "type": "nominal", "sort": "-x", "title": null, "axis": null }
        },
        "layer": [{
            "mark": {"type": "bar", "color": '#3DA9FC'},
            "encoding": {
              "x": {
                "field": "amoung",
                "type": "quantitative",
                "scale": {"domain": [0, 30]},
              }
            }
          }, {
            "mark": {"type": "text", "align": "left", "x": 5},
            "encoding": {
              "text": {
                "field": "Activity",
                "type": "nominal"
              }
            }
        }]
    }
    vegaEmbed('#medComps', medComps);
});