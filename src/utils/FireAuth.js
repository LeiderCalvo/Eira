import STORE from "../stores/Store";
import FireStore from "./FireStore";

let Auth = null;

function setRef(auth) {
  Auth = auth;
}

function Login(user, response, type){
  let method = type === 'reg' ? 'createUserWithEmailAndPassword':'signInWithEmailAndPassword';
  Auth[method](user.email, user.password).then((a)=>{
    updateStore(user, type, response);

      //FireStore.addNewUser(usuario);
      
      //STORE.setCurrentUser('rol', 'monitor');
      //updateStore(usuario.nombre);
  }).catch(function(error) {
    error && response(false, error);
  });
}

function getTestimonials() {
  FireStore.ManageData('get', 'collection', 'testimonies', undefined, undefined, (isSuccess, response)=>{
    if(isSuccess && response.empty === false){
      let temp = response.docs.map(testi => testi.data());
      STORE.setter( temp ,'testimonies');
    }
  });
}

function updateStore(user, type, finalResponse) {
  getTestimonials();

  if(type === 'reg') {
    FireStore.ManageData('add', 'collection', 'users', user, undefined, function (isSuccess, response) {
      if(isSuccess === false){
        console.log({success: false , response});
      }else {
        addToLocal({...user, id: response.id});
      }
      finalResponse(isSuccess , response);
    });
  }else {
    FireStore.ManageData('get', 'collection', 'users', undefined, ['email', '==', user.email], (isSuccess, response)=>{
      if(isSuccess && response.empty === false){
        response.forEach(function(doc) {
          //console.log(doc.id, " => ", doc.data());
          addToLocal({...doc.data(), id: doc.id});
        });
      }else {
        console.log({success: false , response});
      }
      finalResponse(isSuccess , response);
    });
  }
  /*
  FireStore.getHorario(usuario);
  STORE.setCurrentUser('nombre', usuario+'');
  FireStore.updateHoras(usuario);
  FireStore.updateRegistro(STORE.currentUser.nombre);
  STORE.setNavItemSelected('Inicio');
  STORE.setMonitorSelected(null);
  */
}

function addToLocal(user) {
  console.log('addToLocal');
  STORE.setter( user ,'user');
  localStorage.setItem('isCurrentUser', 'true');
}

function ReadLocal() {
  console.log('ReadLocal');
  return localStorage.getItem('isCurrentUser') === 'true';
}

function updateLocal() {
  console.log('updateLocal');
  if(localStorage.getItem('isCurrentUser') === 'true' ){
    STORE.setter(JSON.parse(localStorage.getItem('user')), 'user');
    STORE.setter(JSON.parse(localStorage.getItem('currentCourse')), 'currentCourse');
    STORE.setter(JSON.parse(localStorage.getItem('testimonies')), 'testimonies');
  }
}

export default {setRef, Login, ReadLocal, addToLocal, updateLocal};