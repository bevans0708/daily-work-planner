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

var auditTask = function(taskEl) {
   // get date from task element
   var date = $(taskEl).find("span").text().trim();
 
   // convert to moment object at 5:00pm
   var time = moment(date, "L").set("hour", 17);
 
   // remove any old classes from element
   // $(taskEl).removeClass("list-group-item-warning list-group-item-danger");
 
   // apply new class if task is near/over due date
   if (moment().isAfter(time)) {
     $(taskEl).addClass("list-group-item-danger");
   }else if (Math.abs(moment().diff(time, "days")) <= 2) {
    $(taskEl).addClass("list-group-item-warning");
  }
 };
 
 setInterval(function () {
    $(".card .list-group-item").each(function(index, el) {
      auditTask(el);
    });
  }, (1000 * 60) * 30);