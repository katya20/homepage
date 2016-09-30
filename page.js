function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  $('#clock').html(h + ":" + m);
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}

var quantityInput = $(".list")

quantityInput.keydown(function(e) {
  var keyCode = e.keyCode;
  var inputValue = quantityInput.val();
  console.log ("hi");
  // enter key!
  if (keyCode == 13) {	
    console.log("enter")
    addMessage(inputValue);
  }
})