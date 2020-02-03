function getCache(id) {
  var cacheSht = openShtByName("cacheSht");
  var rowLen   = cacheSht.getLastRow();
  var caches   = cacheSht.getRange(1, 1, rowLen, 2).getValues();
  var row      = getRowFromArray(caches, id);
  if(row === null) return null;
  return caches[row][1];
}

function getRowFromArray(array, id){
  var len = array.length;
  for(var i = 0; i < len; i++){
    if(array[i][0] === id){
      return i;
    }
  }
  return null;
}

function test(){
  Logger.log(getCache("nu"))
}