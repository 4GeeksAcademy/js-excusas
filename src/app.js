/* eslint-disable */
import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

window.onload = function() {
  const quien = ["Mi perra", "Mi abuela", "Mi novio", "Mi pájaro", "Mi vecino"];
  const accion = ["se comió", "orinó en", "aplastó", "rompió", "robó"];
  const que = ["mi tarea", "mi teléfono", "el auto", "mi almuerzo", "mi cama"];
  const cuando = [
    "antes de la clase",
    "cuando estaba durmiendo",
    "mientras hacía ejercicio",
    "durante mi almuerzo",
    "mientras arreglaba mi dormitorio"
  ];

  function generateExcuse() {
    const indexQuien = Math.floor(Math.random() * quien.length);
    const indexAccion = Math.floor(Math.random() * accion.length);
    const indexQue = Math.floor(Math.random() * que.length);
    const indexCuando = Math.floor(Math.random() * cuando.length);
    return `${quien[indexQuien]} ${accion[indexAccion]} ${que[indexQue]} ${cuando[indexCuando]}.`;
  }

  const excuseElement = document.getElementById("excuse");
  excuseElement.textContent = generateExcuse();
};
