window.onload = () => {
  document.querySelector("#start").onclick = start;
  document.querySelector("#reset").onclick = reset;
  document.querySelector("#stop").onclick = stop;
};

let interval;
function start() {
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let futuretime = new Date(date + " " + time);

  // Clear any existing interval before starting a new one
  clearInterval(interval);
  interval = setInterval(() => countdown(futuretime), 1000);
}

function stop() {
  clearInterval(interval);
}

function countdown(futuretime) {
  let actualtime = new Date();
  let days = document.querySelector(".days");
  let hours = document.querySelector(".hours");
  let minutes = document.querySelector(".minutes");
  let seconds = document.querySelector(".seconds");

  if (futuretime > actualtime) {
    let timediff = (futuretime - actualtime) / 1000;
    //gives value in milliseconds so convert it into seconds by dividing it will 1000
    days.innerHTML = Math.floor(timediff / (24 * 60 * 60));
    hours.innerHTML = Math.floor((timediff / (60 * 60)) % 24);
    minutes.innerHTML = Math.floor((timediff / 60) % 60);
    seconds.innerHTML = Math.floor(timediff % 60);
  } else {
    days.innerHTML = 0;
    hours.innerHTML = 0;
    minutes.innerHTML = 0;
    seconds.innerHTML = 0;
  }
}

function reset() {
  clearInterval(interval);
  document.querySelector(".days").innerHTML = 0;
  document.querySelector(".hours").innerHTML = 0;
  document.querySelector(".minutes").innerHTML = 0;
  document.querySelector(".seconds").innerHTML = 0;

  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
}
