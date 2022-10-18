function currentTime() {
  var dayJsObject = dayjs();
  document.getElementById("currentDay").innerText =
    dayJsObject.format("M/D/YYYY h:mm:ss A");
  console.log("tick");
}
setTimeout(currentTime, 0);
setInterval(currentTime, 1000);


