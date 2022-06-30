const date = new Date();
const seconds = date.getSeconds() * 6;
const minutes = date.getMinutes() * 6;

const hours = (date.getHours() * (360 / 12) + minutes / 12) % 360;

document.getElementById('second').style.transform = `rotateZ(${seconds}deg)`;
document.getElementById('minute').style.transform = `rotateZ(${minutes}deg)`;
document.getElementById('hour').style.transform = `rotate(${hours}deg)`;

setInterval(() => {
  const date = new Date();
  const seconds = date.getSeconds() * 6;
  const minutes = date.getMinutes() * 6;

  const hours = (date.getHours() * (360 / 12) + minutes / 12) % 360;

  document.getElementById('second').style.transform = `rotateZ(${seconds}deg)`;
  document.getElementById('minute').style.transform = `rotateZ(${minutes}deg)`;
  document.getElementById('hour').style.transform = `rotate(${hours}deg)`;
}, 1000);
