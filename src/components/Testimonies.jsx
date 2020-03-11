import React from 'react';
//import { observer } from 'mobx-react';
import STORE from '../stores/Store';
import '../styles/Testimonies.css';

class Testimonies extends React.Component {
    constructor(props){
        super(props);
        this.interval = this.interval.bind(this);
        let time = setInterval(this.interval, 20000);

        this.state = {
            count: 0,
            timeout: time
        }
    }

    interval () {
        this.setState( (prev) =>{ 
            return {count : prev.count < STORE.Testimonies.length - 1? (prev.count + 1) : 0 }
        });
    }
    
    render(){
        const testimony = STORE.Testimonies[this.state.count];
        return <section className="Testimonies container">

                <div className="testimonie row">
                    <img src="./images/chica.svg" alt="img"/>
                    <div className="items">
                        <h4>{testimony.name}</h4>
                        <div className='des'>{testimony.team}, {testimony.exp}</div>
                        <p>"{testimony.quote}"</p>
                    </div>
                </div>

                <div className='tick-marks'>
                    {STORE.Testimonies.map((elem, index) => {
                        return <div className={index === this.state.count ? 'selected' : ''} key={index}
                            onClick={() => {
                                clearInterval(this.state.timeout);
                                let temp = setInterval(this.interval, 10000);
                                this.setState({count: index, timeout: temp});
                            }}></div>
                    })}
                </div>
        </section>
    }
}
export default Testimonies;
//export default observer(Testimonies);