const ssCache = {
  getCache: function(id) {
    let cacheSht = this.openCacheSht();
    let rowLen   = cacheSht.getLastRow();
    let caches   = cacheSht.getRange(1, 1, rowLen, 2).getValues();
    let row      = this.getRowFromArray(caches, id);
    if(row === null) return null;
    return caches[row][1];
  },
  setCache: function(id, value) {
    let cacheSht = this.openCacheSht();
    let rowLen   = cacheSht.getLastRow();
    let caches   = cacheSht.getRange(1, 1, rowLen, 2).getValues();
    let row      = this.getRowFromArray(caches, id);
    if(row === null) row = rowLen;
    cacheSht.getRange(row+1, 1, 1, 2).setValues([[id,value]]);
    return 0;
  },
  getRowFromArray: function(array, id) {
    let len = array.length;
    for(var i = 0; i < len; i++){
      if(array[i][0] === id){
        return i;
      }
    }
    return null;
  },
  openCacheSht: function(name) {
    try{
      const ss = SpreadsheetApp.getActiveSpreadsheet(); 
      const sss = ss.getSheetByName("cacheSht"); 
      return sss;
    }catch(e){  
      Logger.log("シートを開けませんでした"+ e );
      return -1;
    }
  },
}

function test(){
  Logger.log(ssCache.setCache("test", "nonnon"))
  Logger.log(ssCache.getCache("nu"))
}