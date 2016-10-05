
// Functions
function onNewListItem(name, callback) {		
  store.child("vars" + "/" + name).on("child_added", function(data) {
    callback(data.val())
  })
}


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

var input = $("#checkbox1")



input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    addListItem("list1", valueToSave);
  }
})

onNewListItem("list1", function(value) {
  $("#output1").append("<div>" + value + "</div>")
  console.log(value);
}) 

$("#clear-button").click(function() {
  deleteValue("list1")
  $("#output1").html("");
});