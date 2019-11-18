loadJSONcharaters();

function loadJSONcharaters() {
  fetch("characters.json")
    .then(response => response.json())
    .then(jsonDataChar => {
      // console.log(jsonDataChar);
    });
}
