import { decorate, computed, action, observable } from 'mobx';

class Store {

    text = 'el nuevo text';

    constructor(){
        setTimeout(() => {
            this.text = 'el otro nuevo text'
        }, 5000);
    }

    setText (val) {
        this.text = val;
    }
   /* @observable var = '';

    
    
    

    @computed get currentDate(){
        return "something operationalizable";
    }*/
}

decorate(Store, {text: observable, setText: action});

const STORE = new Store();
export default STORE;