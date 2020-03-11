let Storage = null;

function setRef(storage) {
  Storage = storage;
}

function getVideo(path, callback) {
  Storage.ref(path).getDownloadURL().then(function(url) {
    callback(url);
  }).catch(function(error) {});
}

function uploadImg( name, fileContent, callBack ) {
  let file = Storage.ref().child(name+'');

  file.putString( fileContent, 'data_url' )
  .then( snapshot => {
    console.log('Uploaded a base64url string!');

    snapshot.ref.getDownloadURL().then( downloadURL  => {
      console.log('img',downloadURL);
      callBack(downloadURL);
    });

  });    
}


function uploadVideo(name, file, callBack) {
  let reference = Storage.ref().child(name+'');
  reference.put(file).then(function(snapshot) {
    console.log('Uploaded a blob or file!');
    snapshot.ref.getDownloadURL().then( downloadURL  => {
      console.log('video',downloadURL);
      callBack(downloadURL);
    });
  });
}

export default {setRef, getVideo, uploadImg, uploadVideo};