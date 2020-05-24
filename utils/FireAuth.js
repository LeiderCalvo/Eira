import STORE from "../stores/Store";
import FireStore from "./FireStore";

let Auth = null;
const setRef = auth => Auth = auth;

function getTestimonials() {
  FireStore.ManageData('get', 'collection', 'testimonies', undefined, undefined, (isSuccess, response)=>{
    if(isSuccess && response.empty === false){
      let temp = response.docs.map(testi => testi.data());
      STORE.setter( temp ,'testimonies');
    }
  });
}

///////////////////////////////////////////////

function updateStore(user, isReg, finalResponse) {
  //getTestimonials();

  if(isReg ) {
    FireStore.ManageData('add', 'collection', 'users', user, undefined, (isSuccess, response) => {
      isSuccess ?
        addToLocal({...user, id: response.id})
      :
        console.log({success: false , response});

      finalResponse(isSuccess , response);
    });
  }else {
    FireStore.ManageData('get', 'collection', 'users', undefined, ['email', '==', user.email], (isSuccess, response)=>{
      isSuccess && response.empty ?
        console.log({success: false , response})
      :
        response.forEach( doc => addToLocal( {...doc.data(), id: doc.id} ));

      finalResponse(isSuccess , response);
    });
  }
}

function Login(user, isReg, response){
  let method = isReg ? 'createUserWithEmailAndPassword':'signInWithEmailAndPassword';
  Auth[method](user.email, user.password)
    .then( a => updateStore(user, isReg, response) )
    .catch( error => error && response(false, error) );
}

function addToLocal(user) {
  console.log('addToLocal');
  STORE.setter('user', user);
  localStorage.setItem('isCurrentUser', 'true');
  localStorage.setItem('user', JSON.stringify(user));
}

function updateLocal() {
  console.log('updateLocal');
  localStorage.getItem('isCurrentUser') === 'true' &&
    STORE.setter('user', JSON.parse(localStorage.getItem('user')) );
}

export default {setRef, Login, addToLocal, updateLocal};