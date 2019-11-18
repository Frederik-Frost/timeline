let characters = [];
let battles = [];
const bad = document.querySelector("#badRight");
const good = document.querySelector("#goodLeft");
loadJSON();
fetchSVG();
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
      console.log(jsonDataChar.characters[1].name);
      // first();
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
        document.querySelectorAll(".svg").forEach(em => {
          em.classList.add("icon");
        });
      }
      function b2() {
        good.innerHTML = "";
        bad.innerHTML = "";
        good.innerHTML = `<img class="svg" src=svg/${src[2].img} />`;
        bad.innerHTML = `<img class="svg" src=svg/${src[9].img} />`;
      }
      function b3() {
        good.innerHTML = "";
        bad.innerHTML = "";
        good.innerHTML = `<img class="svg" src=svg/${src[5].img} />`;
        bad.innerHTML = `<img class="svg" src=svg/${src[14].img} />`;
      }
      function b4() {
        good.innerHTML = "";
        bad.innerHTML = "";
        good.innerHTML = `<img class="svg" src=svg/${src[0].img} /> <img class="svg" src=svg/${src[1].img} /> <img class="svg" src=svg/${src[2].img} /> <img class="svg" src=svg/${src[3].img} /> <img class="svg" src=svg/${src[4].img} /> <img class="svg" src=svg/${src[5].img} /> <img class="svg" src=svg/${src[6].img} />`;
        bad.innerHTML = `<img class="svg" src=svg/${src[12].img} /> <img class="svg" src=svg/${src[15].img} /> <img class="svg" src=svg/${src[17].img} />`;
      }
      function b5() {
        good.innerHTML = "";
        bad.innerHTML = "";
        good.innerHTML = `<img class="svg" src=svg/${src[0].img} /> <img class="svg" src=svg/${src[1].img} /> <img class="svg" src=svg/${src[2].img} /> <img class="svg" src=svg/${src[3].img} /> <img class="svg" src=svg/${src[4].img} /> <img class="svg" src=svg/${src[5].img} /> <img class="svg" src=svg/${src[6].img} />`;
        bad.innerHTML = `<img class="svg" src=svg/${src[13].img} /> `;
      }
      function b6() {
        good.innerHTML = "";
        bad.innerHTML = "";
        good.innerHTML = `<img class="svg" src=svg/${src[7].img} />`;
        bad.innerHTML = `<img class="svg" src=svg/${src[13].img} /><img class="svg" src=svg/${src[12].img} />  `;
      }
      function b7() {
        good.innerHTML = "";
        bad.innerHTML = "";
        good.innerHTML = `<img class="svg" src=svg/${src[7].img} /> <img class="svg" src=svg/${src[4].img} /> <img class="svg" src=svg/${src[3].img} /> <img class="svg" src=svg/${src[5].img} />`;
        bad.innerHTML = `<img class="svg" src=svg/${src[13].img} /><img class="svg" src=svg/${src[12].img} />  `;
      }
      function b8() {
        good.innerHTML = "";
        bad.innerHTML = "";
        good.innerHTML = `<img class="svg" src=svg/${src[7].img} /> <img class="svg" src=svg/${src[4].img} /> <img class="svg" src=svg/${src[3].img} /> <img class="svg" src=svg/${src[5].img} />`;
        bad.innerHTML = `<img class="svg" src=svg/${src[13].img} /><img class="svg" src=svg/${src[12].img} />  `;
      }
      function b9() {
        good.innerHTML = "";
        bad.innerHTML = "";
        good.innerHTML = `<img class="svg" src=svg/${src[18].img} />`;
        bad.innerHTML = `<img class="svg" src=svg/${src[13].img} /><img class="svg" src=svg/${src[12].img} />  `;
      }
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
