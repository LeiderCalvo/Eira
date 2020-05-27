const DataBase = firebase.firestore();

function ManageData(type, where, path, document, condition, response) {
  /*capital : DataBase.FieldValue.delete() erase an specific field of an object throught update
  "favorites.color": "Red" update an element inside of an array of your document
  regions: DataBase.FieldValue.arrayUnion("greater_virginia") insert an element into ans array
  regions: DataBase.FieldValue.arrayRemove("east_coast")
  population: DataBase.FieldValue.increment(50)

  How to deal with get documents
  querySnapshot.forEach(function(doc) {
    console.log(doc.id, " => ", doc.data());
  });

  set, update, delete, get
  if(type=== 'update' && path.includes('certificates')){
    document = {...document, fechas: Firebase.firestore.FieldValue.arrayUnion(Date.now())}
  }
  */
 //console.log(where)
  let promise = condition ?
      DataBase[where](path).where(...condition).get()
    : 
      DataBase[where](path)[type](document && document);

  if(type === 'onSnapshot') return;
  promise.then(function (doc) {
    response(true, doc);
  })
  .catch(function (error) {
    response(false, error);
  });
}

function listener(type, path, callback) {
  DataBase[type](path).onSnapshot(function(doc) {
    console.log(doc.docs);
    callback(doc.docs);
  });
}
/*
function ReadCollectionData(path, condition, response) {
  let promise = condition? DataBase.collection(path).where(...condition).get() : DataBase.collection(path).get();
  promise.then(function(querySnapshot) {
    response(true, querySnapshot);
  })
  .catch(function(error) {
    response(false, error);
  });
}
*/

function createID(path){
  return DataBase.collection(path).doc();
}

function delet(){
  DataBase.collection("data2").doc("data").delete().then(function() {
    console.log("Document successfully deleted!");
  }).catch(function(error) {
    console.error("Error removing document: ", error);
  });
}