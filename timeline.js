"use strict";

document.addEventListener("DOMContentLoaded", fetchSVG);
let bullets = [];
let characters = [];
let battles = [];

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

  document.querySelector(".modal").addEventListener("click", function() {
    document.querySelector(".modal").style.display = "none";
  });

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
}
