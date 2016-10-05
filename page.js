// Clock & time refresh

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

console.log("hello")

// To Do List

var input1 = $("#value-input1")


input1.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input1.val();    
    addListItem("list1", valueToSave);
    console.log(valueToSave);
  }
})

onNewListItem("list1", function(value) {
  $("#value-output1").append("<div>" + value + "</div>")
  console.log("hi");
}) 