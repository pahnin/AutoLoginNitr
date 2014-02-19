getEbyID = function(id){
  return document.getElementById(id)
}

saveData =  function(){
  alert(0)
	rollnumber = getEbyID('rollnumber').value;
	password = getEbyID('password').value;
  message("here");
	chrome.storage.local.set({'rollnumber': rollnumber}, function(){ console.log(rollnumber) });
	chrome.storage.local.set({'password': password}, function(){});
} 

document.addEventListener('DOMContentLoaded', function() {
  link = getEbyID('save-details');
  link.addEventListener('click', function() {
    saveData()
  });
});
