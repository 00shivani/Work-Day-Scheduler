
$(document).ready(function () {

  // Variables
  var currentDate =  dayjs().format('dddd, MMM Do YYYY');
  var currentHour = dayjs().format("HH");
  var currentHourInt = parseInt(currentHour);
  var saveButton = $(".saveBtn");
  var timeBlock = $(".time-block");

  // Print current date to header:
  $("#currentDay").html(currentDate);

  // "Save" button click listener
  saveButton.on("click", function () {
    // collecting user input and correlating hour value
    var input = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // saving time and user input values in local storage
    localStorage.setItem(time, input);
  })

  // Function to switch timeblock colors based on the time of day
  function timeColor() {

    timeBlock.each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);
      
      if (blockTime < currentHourInt) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (blockTime === currentHourInt) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }
  
   // Getting user inputs from local storage
   $("#hour9 .description").val(localStorage.getItem("hour9"));
   $("#hour10 .description").val(localStorage.getItem("hour10"));
   $("#hour11 .description").val(localStorage.getItem("hour11"));
   $("#hour12 .description").val(localStorage.getItem("hour12"));
   $("#hour13 .description").val(localStorage.getItem("hour13"));
   $("#hour14 .description").val(localStorage.getItem("hour14"));
   $("#hour15 .description").val(localStorage.getItem("hour15"));
   $("#hour16 .description").val(localStorage.getItem("hour16"));
   $("#hour17 .description").val(localStorage.getItem("hour17"));
  
   // Call function
   timeColor();
  
});
