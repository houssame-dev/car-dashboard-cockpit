// Dynamic Time Function

function updateTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();

  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;

  let timeString = hours + " : " + minutes;
  document.querySelector(".time").innerHTML = timeString;
}

updateTime();

setInterval(updateTime, 1000);

// Dynamic Date Function

function updateDate() {
  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();

  month = (month < 10 ? "0" : "") + month;

  let dateString = day + " / " + month + " / " + year;
  document.querySelector(".date").innerHTML = dateString;
}

updateDate();

setInterval(updateDate, 1000);
