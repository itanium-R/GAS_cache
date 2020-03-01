function doPost(e) {
  let output = ContentService.createTextOutput();
  let json = "{}";
  
  try{ 
    let params = JSON.parse(e.postData.getDataAsString()); 
    let id = params.id;
    let value = params.value;
    ssCache.setCache(id, value);
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