
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");
const hourEl = document.querySelector(".hour");

setInterval(() => {
  const date = new Date();
  const secDeg = (date.getSeconds() / 60) * 360 - 90; /*converte segundos em graus utilizando a seguinte formula
   "-90 é para o ponteiro se inciar no "12" do relógio */
  const minDeg = (date.getMinutes() / 60) * 360 - 90;
  const hourDeg = (date.getHours() / 12) * 360 - 90;/* dividido por 12 para bater com as horas do relógio*/
  secEl.style.transform = `rotate(${secDeg}deg)`;
  minEl.style.transform = `rotate(${minDeg}deg)`;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;

}, 1000); /* 1000 milisegundos = a 1 segundo*/



