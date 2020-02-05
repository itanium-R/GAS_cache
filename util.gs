//アクティブスプレッドシートのnameシートを開く函数
// @param  name {str} シート名
// @return {sheetObject}
function openShtByName(name){
  try{
    const ss = SpreadsheetApp.getActiveSpreadsheet(); //アクティブスプレッドシートを開く->ss
    const sss = ss.getSheetByName(name);              //nameという名前のシートを開く->sss
    return sss;
  }catch(e){                                          //エラー発生時は表示
    Logger.log("シートを開けませんでした"+ e );
    return -1;
  }
}