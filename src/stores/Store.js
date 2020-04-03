import { decorate, computed, action, observable } from 'mobx';
import GeneralAdvices from './GeneralAdvices';
import Testimonies from './Testimonies';
import ProyectStages from './ProyectStages';
import Posts from './Posts';

class Store {

    GeneralAdvices = GeneralAdvices;
    UserRols = [{titulo: "Seguidor", desc: "Si sientes afinidad por nuestro proyecto y quieres estar al tanto de nuestra actividad."},
                {titulo: "Activista", desc: "Si eres un apasionado por contribuir al medio ambiente y  la ciudad, recolectando datos sobre la calidad del aire."},
                {titulo: "Promotor", desc: "Si te interesa acceder a datos abiertos sobre el medio ambiente para trabajar en proyectos propios o comunitarios."},
                {titulo: "Empresa", desc: "Si quieres aportar al cuidado del medio ambiente, ser reconocida como una entidad ambientalmente responsable  y acceder a beneficios tributarios."}]
    Testimonies = Testimonies;
    ProyectStages = ProyectStages;
    Posts = Posts;

    isLogging = false;
    user = null;

    //constructor(){console.log(GeneralAdvices)}

    setter = (prop, val) => this[prop] = val;
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
        UserRols : observable,
        Posts: observable,
        isLogging: observable,
        user: observable,
        setter: action
    }
);

const STORE = new Store();
export default STORE;