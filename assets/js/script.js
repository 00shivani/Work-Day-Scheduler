$(document).ready(function () {

  // DOM Elements
  var $currentDateElement = $("#currentDay");
  var $saveButtons = $(".saveBtn");
  var $timeBlocks = $(".time-block");

  // Current Time Variables
  var currentDateString = dayjs().format('dddd, MMM DD YYYY');
  var currentHour = parseInt(dayjs().format("HH"));

  // Display current date in the header
  $currentDateElement.text(currentDateString);

  // Event listener for "Save" button click
  $saveButtons.on("click", function () {
    var $userInput = $(this).siblings(".description").val();
    var blockTimeId = $(this).parent().attr("id");
    localStorage.setItem(blockTimeId, $userInput);
  });

  // Function to update time block colors based on the current time
  function updateTimeBlockColors() {
    $timeBlocks.each(function () {
      var blockTimeId = $(this).attr("id");
      var blockHour = parseInt(blockTimeId.split("hour")[1]);

      if (blockHour < currentHour) {
        $(this).removeClass("future present").addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }
  
  // Retrieve user inputs from local storage
  for (var hour = 9; hour <= 17; hour++) {
    var blockTimeId = "hour" + hour;
    $("#" + blockTimeId + " .description").val(localStorage.getItem(blockTimeId));
  }

  // Call the function to update time block colors
  updateTimeBlockColors();
});
