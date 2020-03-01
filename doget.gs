// ページにアクセスされたときに実行
function doGet(e) {  
  let output = ContentService.createTextOutput();
  let json = "{}";
  
  try{ 
    let id = e.parameter["id"];
    let value = ssCache.getCache(id);
    if(value === null) throw "not found";
    json = JSON.stringify(
      {
        ok: true,
        content: {
          id: id,
          value: value,
        },
      }
    );
    
  }catch(e){
    json = JSON.stringify(
      { 
        ok: false, 
        error: e,
      }
    );
  }
  
  output.setContent(JSON.stringify(json)); 
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
