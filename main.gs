function getCache(id) {
  let cacheSht = openShtByName("cacheSht");
  let rowLen   = cacheSht.getLastRow();
  let caches   = cacheSht.getRange(1, 1, rowLen, 2).getValues();
  let row      = getRowFromArray(caches, id);
  if(row === null) return null;
  return caches[row][1];
}

function setCache(id, value) {
  let cacheSht = openShtByName("cacheSht");
  let rowLen   = cacheSht.getLastRow();
  let caches   = cacheSht.getRange(1, 1, rowLen, 2).getValues();
  let row      = getRowFromArray(caches, id);
  if(row === null) row = rowLen;
  cacheSht.getRange(row+1, 1, 1, 2).setValues([[id,value]]);
  return 0;
}

function getRowFromArray(array, id){
  let len = array.length;
  for(var i = 0; i < len; i++){
    if(array[i][0] === id){
      return i;
    }
  }
  return null;
}

function test(){
  Logger.log(setCache("test", "nonnon"))
  Logger.log(getCache("nu"))
}