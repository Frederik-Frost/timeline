"use strict";

document.addEventListener("DOMContentLoaded", fetchSVG);
let bullets = [];
let characters = [];
let battles = [];
const bad = document.querySelector("#badRight");
const good = document.querySelector("#goodLeft");

fetchMap();

function loadJSONcharaters() {
  fetch("characters.json")
    .then(response => response.json())
    .then(jsonDataChar => {
      console.log(jsonDataChar);
      console.log(jsonDataChar.characters[1].name);
      let src = jsonDataChar.characters;
      document.querySelector("#battle1").addEventListener("click", b1);
      document.querySelector("#battle2").addEventListener("click", b2);
      document.querySelector("#battle3").addEventListener("click", b3);
      document.querySelector("#battle4").addEventListener("click", b4);
      document.querySelector("#battle5").addEventListener("click", b5);
      document.querySelector("#battle6").addEventListener("click", b6);
      document.querySelector("#battle7").addEventListener("click", b7);
      document.querySelector("#battle8").addEventListener("click", b8);
      document.querySelector("#battle9").addEventListener("click", b9);

      function b1() {
        good.innerHTML = "";
        bad.innerHTML = "";
        good.innerHTML = `<img class="svg" src=svg/${src[7].img} />`;
        bad.innerHTML = `<img class="svg" src=svg/${src[10].img} />`;
        setTimeout(function() {
          document.querySelectorAll(".svg").forEach(em => {
            em.classList.add("icon");
          });
        }, 500);
      }
      function b2() {
        good.innerHTML = "";
        bad.innerHTML = "";
        good.innerHTML = `<img class="svg" src=svg/${src[2].img} />`;
        bad.innerHTML = `<img class="svg right" src=svg/${src[9].img} />`;
      }
      function b3() {
        good.innerHTML = "";
        bad.innerHTML = "";
        good.innerHTML = `<img class="svg" src=svg/${src[5].img} />`;
        bad.innerHTML = `<img class="svg right" src=svg/${src[14].img} />`;
      }
      function b4() {
        good.innerHTML = "";
        bad.innerHTML = "";
        good.innerHTML = `<img class="svg" src=svg/${src[0].img} /> <img class="svg" src=svg/${src[1].img} /> <img class="svg" src=svg/${src[2].img} /> <img class="svg" src=svg/${src[3].img} /> <img class="svg" src=svg/${src[4].img} /> <img class="svg" src=svg/${src[5].img} /> <img class="svg" src=svg/${src[6].img} />`;
        bad.innerHTML = `<img class="svg right" src=svg/${src[12].img} /> <img class="svg right" src=svg/${src[15].img} /> <img class="svg right" src=svg/${src[17].img} />`;
      }
      function b5() {
        good.innerHTML = "";
        bad.innerHTML = "";
        good.innerHTML = `<img class="svg" src=svg/${src[0].img} /> <img class="svg" src=svg/${src[1].img} /> <img class="svg" src=svg/${src[2].img} /> <img class="svg" src=svg/${src[3].img} /> <img class="svg" src=svg/${src[4].img} /> <img class="svg" src=svg/${src[5].img} /> <img class="svg" src=svg/${src[6].img} />`;
        bad.innerHTML = `<img class="svg right" src=svg/${src[13].img} /> `;
      }
      function b6() {
        good.innerHTML = "";
        bad.innerHTML = "";
        good.innerHTML = `<img class="svg" src=svg/${src[7].img} />`;
        bad.innerHTML = `<img class="svg right" src=svg/${src[13].img} /><img class="svg right" src=svg/${src[12].img} />  `;
      }
      function b7() {
        good.innerHTML = "";
        bad.innerHTML = "";
        good.innerHTML = `<img class="svg" src=svg/${src[7].img} /> <img class="svg" src=svg/${src[4].img} /> <img class="svg" src=svg/${src[3].img} /> <img class="svg" src=svg/${src[5].img} />`;
        bad.innerHTML = `<img class="svg right" src=svg/${src[13].img} /><img class="svg right" src=svg/${src[12].img} />  `;
      }
      function b8() {
        good.innerHTML = "";
        bad.innerHTML = "";
        good.innerHTML = `<img class="svg" src=svg/${src[7].img} /> <img class="svg" src=svg/${src[4].img} /> <img class="svg" src=svg/${src[3].img} /> <img class="svg" src=svg/${src[5].img} />`;
        bad.innerHTML = `<img class="svg right" src=svg/${src[13].img} /><img class="svg right" src=svg/${src[12].img} />  `;
      }
      function b9() {
        good.innerHTML = "";
        bad.innerHTML = "";
        good.innerHTML = `<img class="svg" src=svg/${src[18].img} />`;
        bad.innerHTML = `<img class="svg right" src=svg/${src[13].img} /><img class="svg right" src=svg/${src[12].img} />  `;
      }
    });
}
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
      loadJSONcharaters();
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
  document.querySelector(".battle_location").textContent = "Battle location:" + identifiedData.location;
  document.querySelector(".time_start").textContent = "Battle start:" + identifiedData.timeStart;
  document.querySelector(".time_end").textContent = "Battle end:" + identifiedData.timeEnd;
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
  good.innerHTML = "";
  bad.innerHTML = "";
}

function test(target) {}
