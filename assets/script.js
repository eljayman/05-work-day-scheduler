function currentTime() {
  var dayJsObject = dayjs();
  const currentDay = document.getElementById("currentDay");
  currentDay.innerText = dayJsObject.format("M/D/YYYY h:mm:ss A");
}
$(document).ready(currentTime());
setInterval(currentTime, 1000);

var workingHours = [
  "9 AM",
  "10 AM",
  "11 AM",
  "12 AM",
  "1 PM",
  "3 PM",
  "4 PM",
  "5 PM",
];
var $rowEl = $("div");

function createHour() {
  for (var i = 0; i < workingHours.length; i++) {
    $rowEl.append(
      `<div class='row'><time>${workingHours[i]}</time><textarea></textarea><button>Save</button></div>`
    );
    const $rowHourEl = $("time").addClass("hour");
    const $userFieldEl = $("textarea").addClass("time-block");
    const $saveBtn = $("button").addClass("saveBtn");
  }
}
setTimeout(createHour, 0);
