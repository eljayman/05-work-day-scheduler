// This function displays the time in the time field of the header.
var dayJsObject = dayjs();
function currentTime() {
  let dayJsObject = dayjs();
  const currentDay = document.getElementById("currentDay");
  currentDay.innerText = dayJsObject.format("M/D/YYYY h:mm:ss A");
}
// Start timer when the page is loaded
$(document).ready(currentTime());
setInterval(currentTime, 1000);
//variables and function to create the rows then run it on start
var workingHours = [
  "9 AM",
  "10 AM",
  "11 AM",
  "12 AM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
];
var $rowEl = $("div");
var $rowHourEl = "";
var $userFieldEl = "";
var $saveBtn = "";
function createHour() {
  for (var i = 0; i < workingHours.length; i++) {
    $rowEl.append(
      `<span class='row'><time>${workingHours[i]}</time><textarea id=${workingHours[i]} ></textarea><button>Save</button></span>`
    );
    let $rowHourEl = $("time").addClass("hour");
    let $userFieldEl = $("textarea").addClass("time-block");
    let $saveBtn = $("button").addClass("saveBtn");
    tenseColor();
  }
}
$(document).ready(createHour());

function tenseColor() {
  $("textarea").each(function (index) {
    if (index + 9 == dayJsObject.format("H")) {
      $(this).addClass("present");
    } else if (index + 9 > dayJsObject.format("H")) {
      $(this).addClass("future");
    } else {
      $(this).addClass("past");
    }
  });
}

// create a function that will check the hour and
// highlight the fields with color depending on past, future, or present tense.
// run this function every second so keep the color scheme current
