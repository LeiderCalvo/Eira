import React from 'react';
import ReactMapGL, {Source, Layer}from 'react-map-gl';
import {heatmapLayer} from '../utils/map-style';
import data from '../utils/data';
import FireBaseSerivces from '../utils/FireBaseSerivces';
import ControlPanel from './ControlPanel';
import '../styles/Map.css'

class Map extends React.Component {
    
    constructor(props){
        super(props);
        const current = new Date().getTime();

        this.state = {
            viewport: {
                latitude: 37.7577,
                longitude: -122.4376,
                zoom: 3,
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
            /*
            this.state = {
                viewport: {
                latitude: 40,
                longitude: -100,
                zoom: 3,
                bearing: 0,
                pitch: 0
            },
        
        };*/
        FireBaseSerivces.init();
        this._handleChangeDay = this._handleChangeDay.bind(this);
        this._handleChangeAllDay = this._handleChangeAllDay.bind(this);
    }

    componentDidMount() {
        const features = data.features;
        const endTime = features[0].properties.time;
        const startTime = features[features.length - 1].properties.time;

        this.setState({
            data: data,
            earthquakes: data,
            endTime,
            startTime,
            selectedTime: endTime
        });
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