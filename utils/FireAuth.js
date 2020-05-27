const Auth = firebase.auth();

function updateStore(user, isReg, finalResponse) {

  if(isReg ) {
    ManageData('add', 'collection', 'users', user, undefined, (isSuccess, response) => {
      isSuccess ?
        addToLocal({...user, id: response.id})
      :
        console.log({success: false , response}); 

      finalResponse(isSuccess , response);
    });
  }else {
    ManageData('get', 'collection', 'users', undefined, ['email', '==', user.email], (isSuccess, response)=>{
      isSuccess && response.empty ?
        console.log({success: false , response})
      :
        response.docs.forEach( doc => addToLocal( {...doc.data(), id: doc.id} ));

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
  localStorage.setItem('isCurrentUser', 'true');
  localStorage.setItem('user', JSON.stringify(user));
}