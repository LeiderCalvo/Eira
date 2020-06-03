var mediciones = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    /*"autosize": {
        "type": "fit",
        //"resize": true,
        "contains": "padding"
    },*/
    //"title": "Número y tipo de medicones de calidad del aire (mayo 24 a junio 06 - 2020)",
    "data": {
        "url": "utils/dataCali.json",
        "format": {
            "property": "features"
        }
    },
    "transform": [
        { "calculate": "(datum.properties.mag-2)/(7-2)", "as": "properties.mag2" }
    ],
    "vconcat": [
        {
            "width": "container",
            "encoding": {
                "color": {
                    "condition": {
                        "title": "Contaminante",
                        "field": "properties.contaminante",
                        "scale": {
                            "domain": ["pm25", "pm10", "co2", "ICA"],
                            "range": ["#e7ba52", "#aec7e8", "#1f77b4", "#9467bd"]
                        },
                        "selection": "brush",
                        "type": "nominal",
                        //"legend": null
                    },
                    "value": "lightgray"
                },
                "size": {
                    "title": "Magnitud",
                    "field": "properties.mag2",
                    "type": "quantitative"
                },
                "x": {
                    "axis": { "title": "fecha", "format": "%d" },
                    "field": "properties.time",
                    //"timeUnit": "monthdatehours",
                    "type": "temporal",
                },
                "y": {
                    "axis": { "title": "Medición estandariazda" },
                    "field": "properties.mag2",
                    "scale": { "domain": [0, 1] },
                    "type": "quantitative"
                }
            },
            "mark": "point",
            "selection": { "brush": { "type": "interval" } },
            "transform": [{ "filter": { "selection": "click" } }]
        },
        {
            "width": "container",
            "encoding": {
                "color": {
                    "condition": {
                        "field": "properties.contaminante",
                        "scale": {
                            "domain": ["pm25", "pm10", "co2", "ICA"],
                            "range": ["#e7ba52", "#aec7e8", "#1f77b4", "#9467bd"]
                        },
                        "selection": "click",
                        "type": "nominal"
                    },
                    "value": "lightgray"
                },
                "x": { "aggregate": "count", "type": "quantitative" },
                "y": { "title": "tipo de contaminante", "field": "properties.contaminante", "type": "nominal" }
            },
            "mark": "bar",
            "selection": { "click": { "encodings": ["color"], "type": "multi" } },
            "transform": [{ "filter": { "selection": "brush" } }]
        }
    ]
};
vegaEmbed('#mediciones', mediciones);

var vinculados = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "width": "container",
    "data": {
        "values": [
            { "Activity": "Empresas", "amoung": 2 },
            { "Activity": "Voluntarios", "amoung": 8 }
        ]
    },
    "height": { "step": 40 },
    "mark": "bar",
    "encoding": {
        "x": { "field": "amoung", "type": "quantitative", "title": null },
        "y": { "field": "Activity", "type": "nominal", "sort": "-x", "title": null }
    }
}
vegaEmbed('#vinculados', vinculados);

let arr = [...new Array(500)].map(e => { return { "dist": Math.ceil(Math.random() * (30 - 5) + 5) } });
var kilometros = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "data": {
        "values": arr
    },
    "transform": [{
        "bin": true,
        "field": "dist",
        "as": "bin_IMDB_Rating"
    }, {
        "aggregate": [{ "op": "count", "as": "count" }],
        "groupby": ["bin_IMDB_Rating", "bin_IMDB_Rating_end"]
    }, {
        "filter": "datum.bin_IMDB_Rating !== null"
    }, {
        "sort": [{ "field": "bin_IMDB_Rating" }],
        "window": [{ "op": "sum", "field": "count", "as": "cumulative_count" }],
        "frame": [null, 0]
    }],
    "encoding": {
        "x": {
            "field": "bin_IMDB_Rating", "type": "quantitative",
            "scale": { "zero": false },
            "title": "kilometros por viaje"
        },
        "x2": { "field": "bin_IMDB_Rating_end" }
    },
    "layer": [{
        "mark": "bar",
        "encoding": {
            "y": { "field": "cumulative_count", "type": "quantitative", "title": "kilometros acumulados" }
        }
    }, {
        "mark": { "type": "bar", "color": "yellow", "opacity": 0.5 },
        "encoding": {
            "y": { "field": "count", "type": "quantitative" }
        }
    }]
}
vegaEmbed('#kms', kilometros);

var describers = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "data": {
        "url": "utils/dataCali.json",
        "format": {
            "property": "features"
        }
    },
    "transform": [
        { "calculate": "(datum.properties.mag-2)/(7-2)", "as": "properties.mag2" }
    ],
    "encoding": {
        "color": {
            "condition": {
                "selection": "hover",
                "field": "properties.contaminante",
                "type": "nominal",
                "legend": null
            },
            "value": "grey"
        },
        "opacity": {
            "condition": {
                "selection": "hover",
                "value": 1
            },
            "value": 0.2
        }
    },
    "width": 'container',
    "layer": [{
        "description": "transparent layer to make it easier to trigger selection",
        "selection": {
            "hover": {
                "type": "single",
                "on": "mouseover",
                "empty": "all",
                "fields": ["properties.contaminante"],
                "init": { "properties.contaminante": "pm25" }
            }
        },
        "mark": { "type": "line", "strokeWidth": 8, "stroke": "transparent" }
    },
    {
        "mark": "line"
    },
    {
        "encoding": {
            "x": {
                "field": "properties.time", "type": "temporal", //"timeUnit": "hoursminutes",
                "title": "Horas del día"
            },
            "y": { "field": "properties.mag2", "type": "quantitative", "title": "Medición estandarizada" },
            "color": {
                "field": "properties.contaminante", "type": "nominal", "scale": {
                    "domain": ["pm25", "pm10", "co2", "ICA"],
                    "range": ["#e7ba52", "#aec7e8", "#1f77b4", "#9467bd"]
                }
            }
        },
        "layer": [
            { "mark": "line" },
            {
                "selection": {
                    "label": {
                        "type": "single",
                        "nearest": true,
                        "on": "mouseover",
                        "encodings": ["x"],
                        "empty": "none"
                    }
                },
                "mark": "point",
                "encoding": {
                    "opacity": {
                        "condition": { "selection": "label", "value": 1 },
                        "value": 0
                    }
                }
            }
        ]
    },
    {
        "transform": [{ "filter": { "selection": "label" } }],
        "selection": { "click": { "encodings": ["color"], "type": "multi" } },
        "layer": [
            {
                "mark": { "type": "rule", "color": "gray" },
                "encoding": {
                    "x": {
                        "type": "temporal", "timeUnit": "hoursminutes",
                        "field": "properties.time", "aggregate": "min"
                    }
                }
            },
            {
                "encoding": {
                    "text": { "type": "quantitative", "field": "properties.mag2" },
                    "x": {
                        "type": "temporal", //"timeUnit": "hoursminutes",
                        "field": "properties.time"
                    },
                    "y": { "type": "quantitative", "field": "properties.mag2" }
                },
                "layer": [
                    {
                        "mark": {
                            "type": "text",
                            "stroke": "white",
                            "strokeWidth": 2,
                            "align": "left",
                            "dx": 5,
                            "dy": -5
                        }
                    },
                    {
                        "mark": { "type": "text", "align": "left", "dx": 5, "dy": -5 },
                        "encoding": {
                            "color": {
                                "type": "nominal",
                                "field":
                                    "properties.contaminante",
                                "range": ["#e7ba52", "#aec7e8", "#1f77b4", "#9467bd"]
                            }
                        }
                    }
                ]
            }
        ]
    }
    ]
}

vegaEmbed('#describers', describers);