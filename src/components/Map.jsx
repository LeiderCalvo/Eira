import React from 'react';
import ReactMapGL, {Source, Layer}from 'react-map-gl';
import {heatmapLayer} from '../utils/map-style';
import data from '../utils/dataCali';
import ControlPanel from './ControlPanel';
import '../styles/Map.css'
import FireStore from '../utils/FireStore';

class Map extends React.Component {
    
    constructor(props){
        super(props);
        const current = new Date().getTime();
        this.state = {
            viewport: {
                latitude: 3.414,
                longitude: -76.533,
                zoom: 12,
                bearing: 0,
                pitch: 0,
                mapboxApiAccessToken: 'pk.eyJ1IjoibGVpZGVyY2Fsdm8iLCJhIjoiY2s4MGNlbHZ4MGRwZzNlcGExMmo3cXF6YSJ9.V2d9VILjJixw_LEjcT7L9g'
            },
            allDay: true,
            startTime: current,
            endTime: current,
            selectedTime: current,
            earthquakes: null
        }
        this._handleChangeDay = this._handleChangeDay.bind(this);
        this._handleChangeAllDay = this._handleChangeAllDay.bind(this);
    }

    convertdata(data){
        /*data = {
            type: "FeatureCollection",
            crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
            features: data.slice(1, 20)
        };*/
        //console.log(data.slice(1, 20));
        //data = JSON.stringify(data);
        const features = data.features;
        const endTime = features[0].properties.time;
        const startTime = features[features.length - 1].properties.time;

        this.setState({
            data: data,
            earthquakes: data,
            endTime,
            startTime,
            selectedTime: endTime
        }
        //, ()=>console.log(this.state.data)
        );
    }

    componentDidMount() {
        //esto no deberia ir aqui porque descarga la info cada que vuelve a landing
        /*
        FireStore.ManageData('get', 'collection', 'data', undefined, undefined, (succes, response)=>{
            console.log(response, succes);
            if(succes && response.empty === false){
                let dat = response.docs.map(doc => {
                    let temp = doc.data();
                    temp.geometry.type = "Point";
                    //temp.geometry.coordinates = [ -151.5129, 63.1016, 0.0 ];
                    temp.geometry.coordinates = [ temp.geometry.coordinates[1], temp.geometry.coordinates[0], 0.0 ];
                    temp.properties.mag = Math.random() * 6;
                    return temp;
                });
                
                this.convertdata(dat)
            }
        });*/
        this.convertdata(data)
    }

    _handleChangeDay = time => {
        this.setState({selectedTime: time});
        if (this.state.earthquakes) {
        this.setState({data: this.filterFeaturesByDay(this.state.earthquakes, time)});
        }
    };

    _handleChangeAllDay = allDay => {
        this.setState({allDay});
        if (this.state.earthquakes) {
        this.setState({
            data: allDay
            ? this.state.earthquakes
            : this.filterFeaturesByDay(this.state.earthquakes, this.state.selectedTime)
        });
        }
    };

    filterFeaturesByDay(featureCollection, time) {
        const date = new Date(time);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const features = featureCollection.features.filter(feature => {
          const featureDate = new Date(feature.properties.time);
          return (
            featureDate.getFullYear() === year &&
            featureDate.getMonth() === month &&
            featureDate.getDate() === day
          );
        });
        return {type: 'FeatureCollection', features};
    }

    render(){
        const {viewport, data, allDay, selectedTime, startTime, endTime} = this.state;
        return (
            <div className='map-container'>
            <ReactMapGL {...viewport}
                width='100%'
                height='100%'
                onViewportChange={viewport => this.setState({viewport})} >
                {data && (
                    <Source type="geojson" data={data}>
                        <Layer {...heatmapLayer} />
                    </Source>
                )}
            </ReactMapGL>

            <ControlPanel
                banner={this.props.banner}
                containerComponent={this.props.containerComponent}
                startTime={startTime}
                endTime={endTime}
                selectedTime={selectedTime}
                allDay={allDay}
                onChangeDay={this._handleChangeDay}
                onChangeAllDay={this._handleChangeAllDay}
            />
            </div>
        )
    }
}

export default Map;