import { decorate, computed, action, observable } from 'mobx';
import GeneralAdvices from './GeneralAdvices';
import Testimonies from './Testimonies';
import ProyectStages from './ProyectStages';

class Store {

    GeneralAdvices = GeneralAdvices;
    Testimonies = Testimonies;
    ProyectStages = ProyectStages;

    constructor(){console.log(GeneralAdvices)}

    setter (prop, val) {
        this[prop] = val;
    }
   /* @observable var = '';
    @computed get currentDate(){
        return "something operationalizable";
    }*/
}

decorate(Store,
    { 
        GeneralAdvices: observable,
        Testimonies: observable,
        ProyectStages: observable,
        setter: action
    }
);

const STORE = new Store();
export default STORE;