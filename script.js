let characters = [];
let battles = [];

loadJSON();
loadJSONcharaters();

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
