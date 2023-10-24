
// jQuery
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
  timeColor();
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});
