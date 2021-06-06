var tasks = {};
var timeStampEl = document.getElementById('time-stamp')
var taskEl = document.getElementById('task')

// function displaying the current date and time and updating every second
var update = function displayTime() {
   timeStampEl.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a')
}
setInterval(update, 1000);

var createTask = function(taskText) {
   var taskP = $('<p>').text(taskText)
   taskEl.append(taskP)
}

$("#task").on("click", "p", function() {
   var text = $(this)
      .text()
      .trim();

   var textInput = $("<textarea>")
      .addClass("form-control")
      .val(text);

   $(this).replaceWith(textInput);
   textInput.trigger("focus");

   console.log(this);
});


$("#task").on("blur", "textarea", function() {
   // get the textareas current value/text
   var text = $(this)
      .val()
      .trim();

   // saveTasks();

   // recreate p element
   var taskP = $("<p>")
      .text(text);

   // replace textarea with p element
   $(this).replaceWith(taskP);
});

displayTime()