import React, {PureComponent} from 'react';

export default class ControlPanel extends PureComponent {
  render() {
    const {startTime, endTime, onChangeDay, allDay, onChangeAllDay, selectedTime} = this.props;
    const day = 24 * 60 * 60 * 1000;
    const days = Math.round((endTime - startTime) / day);

    const _onChangeDay = evt => {
      const daysToAdd = evt.target.value;
      // add selected days to start time to calculate new time
      const newTime = startTime + daysToAdd * day;
      onChangeDay(newTime);
    };

    const formatTime = time => {
      const date = new Date(time);
      return `${date.getMonth() + 1} - ${date.getDate()} - ${date.getFullYear()}`;
    };

    return (
      <div className="row control-panel" style={{display: this.props.banner==2? 'flex' : 'none'}}>
        <div className="row inpts">
          <div className="row inpt"><input type="checkbox" name="PM10"/><p>PM10</p></div>
          <div className="row inpt"><input type="checkbox" name="PM2.5"/><p>PM2.5</p></div>
          <div className="row inpt"><input type="checkbox" name="CO2"/><p>CO2</p></div>
        </div>



        {/*<p>Map showing earthquakes from <b>{formatTime(startTime)}</b> to <b>{formatTime(endTime)}</b>.</p>
          <input
            type="checkbox"
            name="allday"
            checked={allDay}
            onChange={evt => onChangeAllDay(evt.target.checked)}
          />
        */}
        <div className='days-range' data-value={formatTime(selectedTime)}>
          <input type="range" min={1} max={days} step={1} onChange={_onChangeDay} />
        </div>
          {/*<datalist id="tickmarks">
            <option value="Bueno"/>
            <option value="Moderado"/>
            <option value="Desfavorable"/>
            <option value="Dañino"/>
            <option value="Muy Daniño"/>
          </datalist>*/}
      </div>
    );
  }
}