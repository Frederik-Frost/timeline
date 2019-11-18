"use strict";

document.addEventListener("DOMContentLoaded", fetchSVG);
let bullets = [];
let characters = [];
let battles = [];

fetchMap();

function fetchMap() {
  fetch("svg/map.svg")
    .then(response => response.text())
    .then(map => {
      document.querySelector("#map").innerHTML = map;
    });
}

function fetchSVG() {
  fetch("svg/timeline.svg")
    .then(response => response.text())
    .then(svg => {
      document.querySelector("#timeline").innerHTML = svg;
      start();
    });
}

function start() {
  bullets = document.querySelectorAll(".battle");

  bullets.forEach(button => {
    button.addEventListener("click", bulletPressed);
  });
}

function bulletPressed() {
  document.querySelector(".modal").style.display = "block";
  let battleIdentifier = event.target.id.slice(6);
  loadJSON(battleIdentifier);
}

function loadJSON(battleIdentifier) {
  fetch("timeline.json")
    .then(response => response.json())
    .then(jsonData => {
      let identifiedData = jsonData.battles[battleIdentifier - 1];
      showData(identifiedData);
    });
}

function showData(identifiedData) {
  document.querySelector(".battle_name").textContent = identifiedData.battleName;
  document.querySelector(".battle_location").textContent = identifiedData.location;
  document.querySelector(".time_start").textContent = identifiedData.timeStart;
  document.querySelector(".time_end").textContent = identifiedData.timeEnd;
  document.querySelector(".battle_description").textContent = identifiedData.description;

  // Frederiks code

  let mapIdentifier = identifiedData.battleNumber;

  document.querySelector(`#b${mapIdentifier}`).classList.add("show-location");
  let bboxCircle = document.querySelector(`#b${mapIdentifier}`).getBBox();
  console.log(bboxCircle.y);

  let scaler1 = document.querySelector(`#b${mapIdentifier}`).getAttribute("cx");
  let scaler2 = document.querySelector(`#b${mapIdentifier}`).getAttribute("cy");
  console.log(scaler1, scaler2);

  let calcX = Math.round(scaler1 / 39);
  let calcY = Math.round(scaler2 / 29);

  console.log(calcX);
  console.log(calcY);

  document.querySelector("#map svg").style.transformOrigin = `${calcX}% ${calcY}%`;
  document.querySelector("#map svg").classList.add("zoomin");

  document.querySelector("#close").addEventListener("click", function() {
    resetTimeline(mapIdentifier);
  });
}

function resetTimeline(mapIdentifier) {
  document.querySelector(".modal").style.display = "none";
  document.querySelector("#map svg").classList.remove("zoomin");
  document.querySelector(`#b${mapIdentifier}`).classList.remove("show-location");
}

function test(target) {}
