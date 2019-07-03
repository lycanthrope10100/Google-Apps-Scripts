function doGet(e) {
  redis_filter()
  return HtmlService.createHtmlOutput('Execution completed.<br>This script is created by lycanthrope10100');
}
function redis_filter() {
  var err_threads = GmailApp.search('QUERY');
  var message = [];
  var recipient = [];
  var r_h = [];
  Logger.log(err_threads.length);
  for (var i = 0; i < err_threads.length; i++) {
    message[i] = err_threads[i].getMessages()[0];
    recipient[i] = message[i].getDate();
    r_h[i] = recipient[i].getHours();
  }  
  for (var i = 0; i < err_threads.length; i++) {
    if (r_h[i] == "TIME"){
      GmailApp.moveMessageToTrash(message[i])
      Logger.log("Mail %s sent to trash.", i)
    }
  }
}