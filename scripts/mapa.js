
/*let str = '';
for (let i = 0; i < 300; i++) {
    str += `{"properties": {"id": "a${Math.random().toString(36).substr(2, 9)}", "mag": ${Math.random() * (7 - 2) + 2}, "time": ${Math.random() * (1591476791397 - 1590267191397) + 1590267191397}}, "geometry": { "type": "Point", "coordinates": [-${Math.random() * (76.55 - 76.52) + 76.52}, ${Math.random() * (3.46 - 3.34) + 3.34}, 0] } },`;
}
eee.innerText = str;*/
const scale = [
    { name: 'Muy Dañino', col: 'rgb(255,81,77)' },
    { name: 'Muy Dañino', col: 'rgb(255,81,77)' },
    { name: 'Dañino', col: 'rgb(255,170,88)' },
    { name: 'Malo', col: 'rgb(209,201,91)' },
    { name: 'Moderado', col: 'rgb(148,204,138)' },
    { name: 'bueno', col: 'rgb(2,182,93)' }
];

const re_small = [
    ['El uso de bicicleta NO es adecuado en esta zona'],
    ['El uso de mascara es obligatorio debido a la mala calidad del aire'],
    ['Plante arboles, materas o busque opciones en el mercado que ayuden a purificar el aire de este espacio'],
    ['Procurar no hacer menos de 30 minutos de actividades al ire libre'],
    ['Esta es una ruta optima para el uso de bicicleta'],
    ['Este es un buen lugar para hacer deporte al aire libre']
];

//Creating map
mapboxgl.accessToken = 'pk.eyJ1IjoibGVpZGVyY2Fsdm8iLCJhIjoiY2s4MGNlbHZ4MGRwZzNlcGExMmo3cXF6YSJ9.V2d9VILjJixw_LEjcT7L9g';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-76.50, 3.44, 0],
    zoom: 12,
});

//map controls
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'bottom-right');
//locate user
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);
//buscador
var coordinatesGeocoder = function (query) {
    // match anything which looks like a decimal degrees coordinate pair
    var matches = query.match(
        /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
    );
    if (!matches) {
        return null;
    }

    function coordinateFeature(lng, lat) {
        return {
            center: [lng, lat],
            geometry: {
                type: 'Point',
                coordinates: [lng, lat]
            },
            place_name: 'Lat: ' + lat + ' Lng: ' + lng,
            place_type: ['coordinate'],
            properties: {},
            type: 'Feature'
        };
    }

    var coord1 = Number(matches[1]);
    var coord2 = Number(matches[2]);
    var geocodes = [];

    if (coord1 < -90 || coord1 > 90) {
        // must be lng, lat
        geocodes.push(coordinateFeature(coord1, coord2));
    }

    if (coord2 < -90 || coord2 > 90) {
        // must be lat, lng
        geocodes.push(coordinateFeature(coord2, coord1));
    }

    if (geocodes.length === 0) {
        // else could be either lng, lat or lat, lng
        geocodes.push(coordinateFeature(coord1, coord2));
        geocodes.push(coordinateFeature(coord2, coord1));
    }

    return geocodes;
};
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        language: 'es',
        countries: 'co',
        //cities:'cali',
        //bbox: [-76.47, 3.30,-76.56, 3.55],
        localGeocoder: coordinatesGeocoder,
        zoom: 14,
        placeholder: 'Escribe una dirección. Ej: Autopista Sur',
        mapboxgl: mapboxgl
    })
    , 'top-left');

var leyenda = document.createElement('div');
leyenda.classList.add('leyenda');
leyenda.classList.add('mapboxgl-ctrl');
leyenda.innerHTML = `${createLeyends()}`;

function createLeyends() {
    let str = '';
    scale.forEach(e => {
        str += `<div class='row'><p>${e.name}</p><div style='background-color: ${e.col};'></div></div>`;
    })
    return str;
}

document.querySelector('.mapboxgl-ctrl-bottom-right').appendChild(leyenda);

map.on('load', function () {
    map.addSource('earthquakes', {
        'type': 'geojson',
        'data': 'utils/dataCali.json'
    });

    //map.addLayer(hM(7, 'rgba(255,81,77,'), 'waterway-label');

    map.addLayer({
        'id': 'airQuality-circles',
        'type': 'circle',
        'source': 'earthquakes',
        'minzoom': 9,
        'paint': {
            // Size circle radius by earthquake magnitude and zoom level
            'circle-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                7,
                ['interpolate', ['linear'], ['get', 'mag'], 1, 1, 6, 4],
                16,
                ['interpolate', ['linear'], ['get', 'mag'], 1, 5, 6, 10]
            ],
            // Color circle by earthquake magnitude
            'circle-color': [
                'interpolate',
                ['linear'],
                ['get', 'mag'],
                2,
                'rgb(255,81,77)',
                3,
                'rgb(255,81,77)',
                4,
                'rgb(255,170,88)',
                5,
                'rgb(209,201,91)',
                6,
                'rgb(148,204,138)',
                7,
                'rgb(2,182,93)'
            ],
            'circle-stroke-color': 'white',
            'circle-stroke-width': 0.5,
            // Transition from heatmap to circle layer by zoom level
            'circle-opacity': [
                'interpolate',
                ['linear'],
                ['zoom'],
                8,
                0,
                10,
                1
            ]
        }
    },
        'waterway-label'
    );

    map.on('click', 'airQuality-circles', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        let index = Math.round(parseFloat(e.features[0].properties.mag)) - 2;
        console.log(index)
        var description = `<div class='s_rec'>
        <div class='row_color' style='background-color: ${scale[index].col};'></div>
        <h5 class='title' style='color: ${scale[index].col};'>${scale[index].name}</h5>
        <p>${re_small[index][0]}</p>
        </div>`;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'airQuality-circles', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'airQuality-circles', function () {
        map.getCanvas().style.cursor = '';
    });
});


function hM(val, col) {
    return {
        'id': 'earthquakes-heat',
        'type': 'heatmap',
        'source': 'earthquakes',
        'maxzoom': 20,
        'filter': [
            "all",
            ["==", ["get", "mag"], val]
        ],
        'paint': {
            // Increase the heatmap weight based on frequency and property magnitude
            'heatmap-weight': [
                'interpolate',
                ['linear'],
                ['get', 'mag'],
                0,
                0,
                6,
                1
            ],
            // Increase the heatmap color weight weight by zoom level
            // heatmap-intensity is a multiplier on top of heatmap-weight
            'heatmap-intensity': [
                'interpolate',
                ['linear'],
                ['zoom'],
                0,
                1,
                9,
                3
            ],
            // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
            // Begin color ramp at 0-stop with a 0-transparancy color
            // to create a blur-like effect.
            'heatmap-color': [
                'interpolate',
                ['linear'],
                ['heatmap-density'],
                0,
                'rgba(33,102,172,0)',
                0.2,
                'rgb(103,169,207)',
                0.4,
                'rgb(209,229,240)',
                0.6,
                'rgb(253,219,199)',
                0.8,
                'rgb(239,138,98)',
                1,
                'rgb(178,24,43)'
            ],
            // Adjust the heatmap radius by zoom level
            'heatmap-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                0,
                2,
                500,
                500
            ],
            // Transition from heatmap to circle layer by zoom level
            'heatmap-opacity': [
                'interpolate',
                ['linear'],
                ['zoom'],
                2,
                1,
                90,
                0
            ]
        }
    }
}