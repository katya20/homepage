console.log("page.js is running");

// Functions

function getNotesForName(name) {  
  onNewListItem(nameInput.val() + "/1", function(note) {
    $("#output1").append("<div>" + note + "</div>")
    $("#output2").append("<div>" + note + "</div>")
    
  })
}

// Name

 var nameInput = $("#nameInput")
 
 nameInput.keydown(function(e) {
   if (e.which == 13) {
     getNotesForName(nameInput.val());
     console.log(nameInput.val());
     $("#output1").html("");
     $("#output2").html("");
   }	
 })
 


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
    addListItem(nameInput.val() + "/2", input2.val()); 
    console.log("input2 keydown is working");
    $("#output2").append(input2.val());
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






