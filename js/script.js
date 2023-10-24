var currentDate =  moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);
var currentHour = moment().format("HH");
var currentHourInt = parseInt(currentHour);
var saveButton = $(".saveBtn");

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  // "Save" button click listener
  saveButton.on("click", function () {
    // collecting user input and correlating hour value
    var userInput = $(this).siblings(".description").val();
    var timeBlock = $(this).parent().attr("id");
    // saving time and user input values in local storage
    localStorage.setItem(timeBlock, userInput);
  })

  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
