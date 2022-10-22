// This function displays the time in the time field of the header.
var dayJsObject = dayjs();
function currentTime() {
  let dayJsObject = dayjs();
  const currentDay = document.getElementById("currentDay");
  currentDay.innerText = dayJsObject.format("M/D/YYYY h:mm:ss A");
  tenseColor();
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
function createHour() {
  const $rowEl = $("div");
  for (var i = 0; i < workingHours.length; i++) {
    $rowEl.append(
      `<span class='row'><time>${workingHours[i]}</time><textarea type="input"/><button>Save</button></span>`
    );
    $("time").addClass("hour");
    $("textarea").addClass("time-block");
    $("button").addClass("saveBtn");
  }
  setInnerText();
  tenseColor();
}
// run at start
$(document).ready(createHour());
//function that colors the input field
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
// function that uses the local storage to set the text of the user fields
function setInnerText() {
  $("textarea").each(function (index) {
    $(this).append(localStorage.getItem(index));
  });
}
//function that saves the fields when a save button is clicked
var $divButtonEl = $("button");
$divButtonEl.on("click", function (index) {
  $("textarea").each(function (index) {
    const userText = $(this)[0].value;
    localStorage.setItem(index, userText);
  });
});
