console.log("page.js is running");

// Functions
function onNewListItem(name, callback) {		
  store.child("vars" + "/" + name).on("child_added", function(data) {
    callback(data.val())
  })
}

// Name
 var name = $("#name")
 
 name.keydown(function(e) {
   if (e.keyCode == 13) {
     console.log(name.val() + "!")
   }
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


// To Do List (today)

var input1 = $("#checkbox1")



input1.keydown(function(e) {	
  if (e.keyCode == "13") {
    addListItem(nameInput.val() + "/1", input1.val()); 
    console.log("input1 keydown is working");
    $("#output1").append(input1.val());
  }
})

onNewListItem(nameInput.val() + "1", function(value) {
  $("#output1").append("<div>" + value + "</div>")
  console.log(value);
}) 

$("#clear-button-1").click(function() {
  deleteValue(nameInput.val() + "1")
  $("#output1").html("");
});

// To Do List (for later)

var input2 = $("#checkbox2")

input2.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input2.val();
    addListItem(nameInput.val() + "2", valueToSave);
    input2.val('');
  }
})

onNewListItem(nameInput.val() + "2", function(value) {
  $("#output2").append("<div>" + value + "</div>")
  console.log(value);
}) 

$("#clear-button-2").click(function() {
  deleteValue(nameInput.val() + "2")
  $("#output2").html("");
});


console.log("script.js is running");

var name;
var nameInput = $("#name-input")
var noteInput = $("#note-input")
var noteList = $("#note-list")

nameInput.keydown(function(e) {
  if (e.which == 13) {
    getNotesForName(nameInput.val());
    console.log(nameInput.val());
    $("#output1").html("");
    $("#output2").html("");
  }	
})


noteInput.keydown(function(e) {
  if (e.which == 13) {    
    addListItem(nameInput.val() + "/notes", noteInput.val())
    console.log("noteInput keydown is working");
    $("#note-list").append(noteInput.val());
  }
})


