let characters = [];
let battles = [];

loadJSON();
loadJSONcharaters();
fetchSVG();

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
  document.querySelector("#battle1").addEventListener("click", test);
}

function test() {
  console.log("test");
}

function showData() {}
