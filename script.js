let characters = [];
let battles = [];

loadJSON();
loadJSONcharaters();
fetchSVG();
fetchMap();

function loadJSON() {
  fetch("timeline.json")
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData);
      showData(jsonData);
    });
}

function loadJSONcharaters() {
  fetch("characters.json")
    .then(response => response.json())
    .then(jsonDataChar => {
      console.log(jsonDataChar);
    });
}

function fetchSVG() {
  fetch("svg/timeline.svg")
    .then(response => response.text())
    .then(svg => {
      document.querySelector("#timeline").innerHTML = svg;
      clickBattle();
    });
}

function clickBattle() {
  document.querySelector(".battles").addEventListener("click", getV);
}

function getV() {
  console.log("test");
  const target = event.target.id.slice(6);
  console.log(target);

  test(target);
}

function test(target) {
  document.querySelector(`#b${target}`).classList.toggle("show-location");
  let bboxCircle = document.querySelector(`#b${target}`).getBBox();
  console.log(bboxCircle.y);

  let scaler1 = document.querySelector(`#b${target}`).getAttribute("cx");
  let scaler2 = document.querySelector(`#b${target}`).getAttribute("cy");
  console.log(scaler1, scaler2);

  let calcX = Math.round(scaler1 / 39);
  let calcY = Math.round(scaler2 / 29);

  console.log(calcX);
  console.log(calcY);

  document.querySelector("#map svg").style.transformOrigin = `${calcX}% ${calcY}%`;
  document.querySelector("#map svg").classList.toggle("zoomin");
}

function showData() {}

function fetchMap() {
  fetch("svg/map.svg")
    .then(response => response.text())
    .then(map => {
      document.querySelector("#map").innerHTML = map;
      clickBattle();
    });
}
