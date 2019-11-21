"use strict";

document.addEventListener("DOMContentLoaded", fetchSVG);
let bullets = [];
let characters = [];
let battles = [];
const bad = document.querySelector("#badRight");
const good = document.querySelector("#goodLeft");

document.querySelector(".startJourney").addEventListener("click", startJourney);

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
      document.querySelector("#battle10").addEventListener("click", b10);
      document.querySelector("#battle11").addEventListener("click", b11);
      document.querySelector("#battle12").addEventListener("click", b12);

      function b1() {
        clearInnerHTML();
        good.innerHTML = `<img class="goodSvg" src=svg/${src[7].img} />`;
        bad.innerHTML = `<img class="badSvg target" src=svg/${src[10].img} />`;
        getNameTag();

        enterFight();
        setTimeout(function() {
          fight();

          setTimeout(function() {
            fight2();
            bad.classList.add("lose");
            good.classList.add("win");
          }, 3000);
        }, 1500);
      }
      function b2() {
        clearInnerHTML();
        good.innerHTML = `<img class="goodSvg" src=svg/${src[2].img} />`;
        bad.innerHTML = `<img class="badSvg" src=svg/${src[9].img} />`;
        getNameTag();

        enterFight();
        setTimeout(function() {
          fight();

          setTimeout(function() {
            fight2();
            good.classList.add("lose");
            bad.classList.add("win");
          }, 3000);
        }, 1500);
      }
      function b3() {
        clearInnerHTML();
        good.innerHTML = `<img class="goodSvg" src=svg/${src[5].img} />`;
        bad.innerHTML = `<img class="badSvg" src=svg/${src[14].img} />`;
        getNameTag();

        enterFight();
        setTimeout(function() {
          fight();

          setTimeout(function() {
            fight2();
            bad.classList.add("lose");
            good.classList.add("win");
          }, 3000);
        }, 1500);
      }
      function b4() {
        clearInnerHTML();
        good.innerHTML = `<img class="goodSvg" src=svg/${src[0].img} /> <img class="goodSvg" src=svg/${src[1].img} /> <img class="goodSvg" src=svg/${src[3].img} /> <img class="goodSvg" src=svg/${src[4].img} /> <img class="goodSvg" src=svg/${src[5].img} /> <img class="goodSvg" src=svg/${src[6].img} /><img class="goodSvg target2" src=svg/${src[2].img} />`;
        bad.innerHTML = `<img class="badSvg target" src=svg/${src[12].img} /> <img class="badSvg target" src=svg/${src[15].img} /> <img class="badSvg target" src=svg/${src[17].img} />`;
        getNameTag();

        enterFight();
        setTimeout(function() {
          fight();

          setTimeout(function() {
            fight2();
            bad.classList.add("lose");
            good.classList.add("win");
          }, 3000);
        }, 1500);
      }
      function b5() {
        clearInnerHTML();
        bad.innerHTML = `<img class="badSvg target" src=svg/${src[13].img} /> `;
        good.innerHTML = `<img class="goodSvg" src=svg/${src[0].img} /> <img class="goodSvg" src=svg/${src[1].img} /> <img class="goodSvg" src=svg/${src[2].img} /> <img class="goodSvg" src=svg/${src[3].img} /> <img class="goodSvg" src=svg/${src[4].img} /> <img class="goodSvg" src=svg/${src[5].img} /> <img class="goodSvg target2" src=svg/${src[6].img} />`;
        getNameTag();

        enterFight();
        setTimeout(function() {
          fight();

          setTimeout(function() {
            fight2();
            bad.classList.add("lose");
            good.classList.add("win");
          }, 3000);
        }, 1500);
      }

      function b6() {
        clearInnerHTML();
        good.innerHTML = `<img class="goodSvg" src=svg/${src[7].img} />`;
        bad.innerHTML = `<img class="badSvg target" src=svg/${src[13].img} /><img class="badSvg target" src=svg/${src[12].img} />  `;
        getNameTag();

        enterFight();
        setTimeout(function() {
          fight();

          setTimeout(function() {
            fight2();
            bad.classList.add("lose");
            good.classList.add("win");
          }, 3000);
        }, 1500);
      }
      function b7() {
        clearInnerHTML();
        good.innerHTML = `<img class="goodSvg" src=svg/${src[7].img} /> <img class="goodSvg" src=svg/${src[4].img} /> <img class="goodSvg" src=svg/${src[3].img} /> <img class="goodSvg" src=svg/${src[5].img} />`;
        bad.innerHTML = `<img class="badSvg target" src=svg/${src[13].img} /><img class="badSvg target" src=svg/${src[12].img} />  `;
        enterFight();
        getNameTag();

        setTimeout(function() {
          fight();

          setTimeout(function() {
            fight2();
            bad.classList.add("lose");
            good.classList.add("win");
          }, 3000);
        }, 1500);
      }
      function b8() {
        clearInnerHTML();
        good.innerHTML = `<img class="goodSvg" src=svg/${src[7].img} /> <img class="goodSvg" src=svg/${src[4].img} /> <img class="goodSvg" src=svg/${src[3].img} /> <img class="goodSvg" src=svg/${src[5].img} />`;
        bad.innerHTML = `<img class="badSvg target" src=svg/${src[13].img} /><img class="badSvg target" src=svg/${src[12].img} />  `;
        enterFight();
        getNameTag();

        setTimeout(function() {
          fight();

          setTimeout(function() {
            fight2();
            bad.classList.add("lose");
            good.classList.add("win");
          }, 3000);
        }, 1500);
      }
      function b9() {
        clearInnerHTML();
        good.innerHTML = `<img class="goodSvg" src=svg/${src[18].img} />`;
        bad.innerHTML = `<img class="badSvg target" src=svg/${src[13].img} /><img class="badSvg target" src=svg/${src[12].img} />  `;
        enterFight();
        getNameTag();

        setTimeout(function() {
          fight();

          setTimeout(function() {
            fight2();
            bad.classList.add("lose");
            good.classList.add("win");
          }, 3000);
        }, 1500);
      }
      function b10() {
        clearInnerHTML();
        good.innerHTML = `<img class="goodSvg" src=svg/${src[0].img} /> <img class="goodSvg" src=svg/${src[1].img} />`;
        bad.innerHTML = `<img class="badSvg" src=svg/${src[16].img} /> `;
        enterFight();
        getNameTag();

        setTimeout(function() {
          fight();

          setTimeout(function() {
            fight2();
            bad.classList.add("lose");
            good.classList.add("win");
          }, 3000);
        }, 1500);
      }
      function b11() {
        clearInnerHTML();
        good.innerHTML = `<img class="goodSvg" src=svg/${src[2].img} /> <img class="goodSvg" src=svg/${src[3].img} /><img class="goodSvg" src=svg/${src[4].img} /><img class="goodSvg" src=svg/${src[5].img} /> <img class="goodSvg" src=svg/${src[7].img} />`;
        bad.innerHTML = `<img class="badSvg target" src=svg/${src[12].img} /><img class="badSvg target" src=svg/${src[14].img} /> `;
        enterFight();
        getNameTag();

        setTimeout(function() {
          fight();

          setTimeout(function() {
            fight2();
            bad.classList.add("lose");
            good.classList.add("win");
          }, 3000);
        }, 1500);
      }
      function b12() {
        clearInnerHTML();
        good.innerHTML = `<img class="goodSvg" src=svg/${src[0].img} /> <img class="goodSvg" src=svg/${src[1].img} />`;
        bad.innerHTML = `<img class="badSvg target" src=svg/${src[11].img} />`;
        enterFight();
        getNameTag();

        setTimeout(function() {
          fight();

          setTimeout(function() {
            fight2();
            bad.classList.add("lose");
            good.classList.add("win");
          }, 3000);
        }, 1500);
      }
    });
  function clearInnerHTML() {
    good.innerHTML = "";
    bad.innerHTML = "";
  }
  function enterFight() {
    document.querySelectorAll(".goodSvg").forEach(em => {
      em.classList.add("left");
    });
    document.querySelectorAll(".badSvg").forEach(em => {
      em.classList.add("right");
    });
  }
  function fight() {
    document.querySelector(".badSvg").classList.remove("right");
    document.querySelectorAll(".badSvg").forEach(em => {
      em.classList.remove("right");
      em.classList.add("fightClub");
    });
    document.querySelectorAll(".goodSvg").forEach(em => {
      em.classList.remove("left");
      em.classList.add("fightClub2");
    });
  }
  function fight2() {
    document.querySelectorAll(".badSvg").forEach(em => {
      em.classList.remove("fightClub");
      em.classList.add("floatyBoi");
    });
    document.querySelectorAll(".target").forEach(em => {
      em.classList.add("dead");
    });
    document.querySelectorAll(".target2").forEach(em => {
      em.classList.add("dead2");
    });
  }
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
      initiateAnimations();
    });
}

function start() {
  bullets = document.querySelectorAll(".battle");

  bullets.forEach(button => {
    button.classList.add("animation");
    button.classList.add("animation--fade");
    button.addEventListener("click", bulletPressed);
  });
}

function bulletPressed() {
  document.querySelector(".modal").style.display = "block";
  event.target.style.animation = "none";

  document.querySelector("body").style.overflow = "hidden";
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
  // console.log(bboxCircle.y);

  let scaler1 = document.querySelector(`#b${mapIdentifier}`).getAttribute("cx");
  let scaler2 = document.querySelector(`#b${mapIdentifier}`).getAttribute("cy");
  // console.log(scaler1, scaler2);

  let calcX = Math.round(scaler1 / 39);
  let calcY = Math.round(scaler2 / 29);

  // console.log(calcX);
  // console.log(calcY);

  document.querySelector("#map svg").style.transformOrigin = `${calcX}% ${calcY}%`;
  document.querySelector("#map svg").classList.add("zoomin");

  document.querySelector("#close").addEventListener("click", function() {
    resetTimeline(mapIdentifier);
  });
}

function resetTimeline(mapIdentifier) {
  document.querySelector(".modal").style.display = "none";
  document.querySelector("body").style.overflow = "scroll";

  document.querySelector("#map svg").classList.remove("zoomin");
  document.querySelector(`#b${mapIdentifier}`).classList.remove("show-location");
  good.innerHTML = "";
  bad.innerHTML = "";
  good.classList.remove("win");
  good.classList.remove("lose");
  bad.classList.remove("lose");
  bad.classList.remove("win");
}

function initiateAnimations() {
  // callback function to do animations
  const scrollImations = entries => {
    entries.forEach(entry => {
      // only do animation if the element is fully on screen
      if (entry.isIntersecting && entry.intersectionRatio >= 0) {
        entry.target.classList.add("animation--visible");
      } else {
      }
    });
  };

  // create the observer
  const options = {
    threshold: 0.1
  };
  const observer = new IntersectionObserver(scrollImations, options);

  // target the elements to be observed
  const animations = document.querySelectorAll(".animation");
  animations.forEach(animation => {
    observer.observe(animation);
  });
}

function startJourney() {
  document.querySelector(".start_overlay").style.opacity = "0";

  document.querySelector(".start_overlay").addEventListener("transitionend", () => {
    document.querySelector(".start_overlay").style.display = "none";
  });

  document.querySelector(".audio").play();
  document.querySelector(".audio").playbackRate = 0.1;
}

function getDocHeight() {
  var D = document;
  return Math.max(D.body.scrollHeight, D.documentElement.scrollHeight, D.body.offsetHeight, D.documentElement.offsetHeight, D.body.clientHeight, D.documentElement.clientHeight);
}

var docheight = getDocHeight();

function amountscrolled() {
  var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight;
  var docheight = getDocHeight();
  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
  var trackLength = docheight - winheight;
  var pctScrolled = Math.floor((scrollTop / trackLength) * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)

  if (pctScrolled == 0) {
    document.querySelector(".audio").playbackRate = 0.1;
  } else {
    document.querySelector(".audio").playbackRate = pctScrolled / 70;
  }
}

window.addEventListener(
  "scroll",
  function() {
    amountscrolled();
  },
  false
);

let getGoodSVG = [];
let getBadSVG = [];

function getNameTag() {
  getGoodSVG = document.querySelectorAll(".goodSvg");
  getBadSVG = document.querySelectorAll(".badSvg");

  getGoodSVG.forEach(button => {
    button.onmouseover = function() {
      let str = event.target.src;
      let newString = str.substring(26, 100);
      let doneString = newString.slice(0, -4);
      let superDoneString = doneString.charAt(0).toUpperCase() + doneString.substring(1);

      document.querySelector(".name_tag").innerHTML = superDoneString;
    };
  });

  getBadSVG.forEach(button => {
    button.onmouseover = function() {
      let str = event.target.src;
      let newString = str.substring(26, 100);
      let doneString = newString.slice(0, -4);
      let superDoneString = doneString.charAt(0).toUpperCase() + doneString.substring(1);

      document.querySelector(".name_tag").innerHTML = superDoneString;
    };
  });
}
