// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"timeline.js":[function(require,module,exports) {
"use strict";

document.addEventListener("DOMContentLoaded", fetchSVG);
var bullets = [];
var characters = [];
var battles = [];
var bad = document.querySelector("#badRight");
var good = document.querySelector("#goodLeft");
document.querySelector(".startJourney").addEventListener("click", startJourney);
fetchMap();

function loadJSONcharaters() {
  fetch("characters.json").then(function (response) {
    return response.json();
  }).then(function (jsonDataChar) {
    console.log(jsonDataChar);
    console.log(jsonDataChar.characters[1].name);
    var src = jsonDataChar.characters;
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
      good.innerHTML = "<img class=\"goodSvg\" src=svg/".concat(src[7].img, " />");
      bad.innerHTML = "<img class=\"badSvg target\" src=svg/".concat(src[10].img, " />");
      getNameTag();
      enterFight();
      setTimeout(function () {
        fight();
        setTimeout(function () {
          fight2();
          bad.classList.add("lose");
          good.classList.add("win");
        }, 3000);
      }, 1500);
    }

    function b2() {
      clearInnerHTML();
      good.innerHTML = "<img class=\"goodSvg\" src=svg/".concat(src[2].img, " />");
      bad.innerHTML = "<img class=\"badSvg\" src=svg/".concat(src[9].img, " />");
      getNameTag();
      enterFight();
      setTimeout(function () {
        fight();
        setTimeout(function () {
          fight2();
          good.classList.add("lose");
          bad.classList.add("win");
        }, 3000);
      }, 1500);
    }

    function b3() {
      clearInnerHTML();
      good.innerHTML = "<img class=\"goodSvg\" src=svg/".concat(src[5].img, " />");
      bad.innerHTML = "<img class=\"badSvg\" src=svg/".concat(src[14].img, " />");
      getNameTag();
      enterFight();
      setTimeout(function () {
        fight();
        setTimeout(function () {
          fight2();
          bad.classList.add("lose");
          good.classList.add("win");
        }, 3000);
      }, 1500);
    }

    function b4() {
      clearInnerHTML();
      good.innerHTML = "<img class=\"goodSvg\" src=svg/".concat(src[0].img, " /> <img class=\"goodSvg\" src=svg/").concat(src[1].img, " /> <img class=\"goodSvg\" src=svg/").concat(src[3].img, " /> <img class=\"goodSvg\" src=svg/").concat(src[4].img, " /> <img class=\"goodSvg\" src=svg/").concat(src[5].img, " /> <img class=\"goodSvg\" src=svg/").concat(src[6].img, " /><img class=\"goodSvg target2\" src=svg/").concat(src[2].img, " />");
      bad.innerHTML = "<img class=\"badSvg target\" src=svg/".concat(src[12].img, " /> <img class=\"badSvg target\" src=svg/").concat(src[15].img, " /> <img class=\"badSvg target\" src=svg/").concat(src[17].img, " />");
      getNameTag();
      enterFight();
      setTimeout(function () {
        fight();
        setTimeout(function () {
          fight2();
          bad.classList.add("lose");
          good.classList.add("win");
        }, 3000);
      }, 1500);
    }

    function b5() {
      clearInnerHTML();
      bad.innerHTML = "<img class=\"badSvg target\" src=svg/".concat(src[13].img, " /> ");
      good.innerHTML = "<img class=\"goodSvg\" src=svg/".concat(src[0].img, " /> <img class=\"goodSvg\" src=svg/").concat(src[1].img, " /> <img class=\"goodSvg\" src=svg/").concat(src[2].img, " /> <img class=\"goodSvg\" src=svg/").concat(src[3].img, " /> <img class=\"goodSvg\" src=svg/").concat(src[4].img, " /> <img class=\"goodSvg\" src=svg/").concat(src[5].img, " /> <img class=\"goodSvg target2\" src=svg/").concat(src[6].img, " />");
      getNameTag();
      enterFight();
      setTimeout(function () {
        fight();
        setTimeout(function () {
          fight2();
          bad.classList.add("lose");
          good.classList.add("win");
        }, 3000);
      }, 1500);
    }

    function b6() {
      clearInnerHTML();
      good.innerHTML = "<img class=\"goodSvg\" src=svg/".concat(src[7].img, " />");
      bad.innerHTML = "<img class=\"badSvg target\" src=svg/".concat(src[13].img, " /><img class=\"badSvg target\" src=svg/").concat(src[12].img, " />  ");
      getNameTag();
      enterFight();
      setTimeout(function () {
        fight();
        setTimeout(function () {
          fight2();
          bad.classList.add("lose");
          good.classList.add("win");
        }, 3000);
      }, 1500);
    }

    function b7() {
      clearInnerHTML();
      good.innerHTML = "<img class=\"goodSvg\" src=svg/".concat(src[7].img, " /> <img class=\"goodSvg\" src=svg/").concat(src[4].img, " /> <img class=\"goodSvg\" src=svg/").concat(src[3].img, " /> <img class=\"goodSvg\" src=svg/").concat(src[5].img, " />");
      bad.innerHTML = "<img class=\"badSvg target\" src=svg/".concat(src[13].img, " /><img class=\"badSvg target\" src=svg/").concat(src[12].img, " />  ");
      enterFight();
      getNameTag();
      setTimeout(function () {
        fight();
        setTimeout(function () {
          fight2();
          bad.classList.add("lose");
          good.classList.add("win");
        }, 3000);
      }, 1500);
    }

    function b8() {
      clearInnerHTML();
      good.innerHTML = "<img class=\"goodSvg\" src=svg/".concat(src[7].img, " /> <img class=\"goodSvg\" src=svg/").concat(src[4].img, " /> <img class=\"goodSvg\" src=svg/").concat(src[3].img, " /> <img class=\"goodSvg\" src=svg/").concat(src[5].img, " />");
      bad.innerHTML = "<img class=\"badSvg target\" src=svg/".concat(src[13].img, " /><img class=\"badSvg target\" src=svg/").concat(src[12].img, " />  ");
      enterFight();
      getNameTag();
      setTimeout(function () {
        fight();
        setTimeout(function () {
          fight2();
          bad.classList.add("lose");
          good.classList.add("win");
        }, 3000);
      }, 1500);
    }

    function b9() {
      clearInnerHTML();
      good.innerHTML = "<img class=\"goodSvg\" src=svg/".concat(src[18].img, " />");
      bad.innerHTML = "<img class=\"badSvg target\" src=svg/".concat(src[13].img, " /><img class=\"badSvg target\" src=svg/").concat(src[12].img, " />  ");
      enterFight();
      getNameTag();
      setTimeout(function () {
        fight();
        setTimeout(function () {
          fight2();
          bad.classList.add("lose");
          good.classList.add("win");
        }, 3000);
      }, 1500);
    }

    function b10() {
      clearInnerHTML();
      good.innerHTML = "<img class=\"goodSvg\" src=svg/".concat(src[0].img, " /> <img class=\"goodSvg\" src=svg/").concat(src[1].img, " />");
      bad.innerHTML = "<img class=\"badSvg\" src=svg/".concat(src[16].img, " /> ");
      enterFight();
      getNameTag();
      setTimeout(function () {
        fight();
        setTimeout(function () {
          fight2();
          bad.classList.add("lose");
          good.classList.add("win");
        }, 3000);
      }, 1500);
    }

    function b11() {
      clearInnerHTML();
      good.innerHTML = "<img class=\"goodSvg\" src=svg/".concat(src[2].img, " /> <img class=\"goodSvg\" src=svg/").concat(src[3].img, " /><img class=\"goodSvg\" src=svg/").concat(src[4].img, " /><img class=\"goodSvg\" src=svg/").concat(src[5].img, " /> <img class=\"goodSvg\" src=svg/").concat(src[7].img, " />");
      bad.innerHTML = "<img class=\"badSvg target\" src=svg/".concat(src[12].img, " /><img class=\"badSvg target\" src=svg/").concat(src[14].img, " /> ");
      enterFight();
      getNameTag();
      setTimeout(function () {
        fight();
        setTimeout(function () {
          fight2();
          bad.classList.add("lose");
          good.classList.add("win");
        }, 3000);
      }, 1500);
    }

    function b12() {
      clearInnerHTML();
      good.innerHTML = "<img class=\"goodSvg\" src=svg/".concat(src[0].img, " /> <img class=\"goodSvg\" src=svg/").concat(src[1].img, " />");
      bad.innerHTML = "<img class=\"badSvg target\" src=svg/".concat(src[11].img, " />");
      enterFight();
      getNameTag();
      setTimeout(function () {
        fight();
        setTimeout(function () {
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
    document.querySelectorAll(".goodSvg").forEach(function (em) {
      em.classList.add("left");
    });
    document.querySelectorAll(".badSvg").forEach(function (em) {
      em.classList.add("right");
    });
  }

  function fight() {
    document.querySelector(".badSvg").classList.remove("right");
    document.querySelectorAll(".badSvg").forEach(function (em) {
      em.classList.remove("right");
      em.classList.add("fightClub");
    });
    document.querySelectorAll(".goodSvg").forEach(function (em) {
      em.classList.remove("left");
      em.classList.add("fightClub2");
    });
  }

  function fight2() {
    document.querySelectorAll(".badSvg").forEach(function (em) {
      em.classList.remove("fightClub");
      em.classList.add("floatyBoi");
    });
    document.querySelectorAll(".target").forEach(function (em) {
      em.classList.add("dead");
    });
    document.querySelectorAll(".target2").forEach(function (em) {
      em.classList.add("dead2");
    });
  }
}

function fetchMap() {
  fetch("svg/map.svg").then(function (response) {
    return response.text();
  }).then(function (map) {
    document.querySelector("#map").innerHTML = map;
  });
}

function fetchSVG() {
  fetch("svg/timeline.svg").then(function (response) {
    return response.text();
  }).then(function (svg) {
    document.querySelector("#timeline").innerHTML = svg;
    start();
    loadJSONcharaters();
    initiateAnimations();
  });
}

function start() {
  bullets = document.querySelectorAll(".battle");
  bullets.forEach(function (button) {
    button.classList.add("animation");
    button.classList.add("animation--fade");
    button.addEventListener("click", bulletPressed);
  });
}

function bulletPressed() {
  document.querySelector(".modal").style.display = "block";
  event.target.style.animation = "none";
  document.querySelector("body").style.overflow = "hidden";
  var battleIdentifier = event.target.id.slice(6);
  loadJSON(battleIdentifier);
}

function loadJSON(battleIdentifier) {
  fetch("timeline.json").then(function (response) {
    return response.json();
  }).then(function (jsonData) {
    var identifiedData = jsonData.battles[battleIdentifier - 1];
    showData(identifiedData);
  });
}

function showData(identifiedData) {
  document.querySelector(".battle_name").textContent = identifiedData.battleName;
  document.querySelector(".battle_location").textContent = "Battle location:" + identifiedData.location;
  document.querySelector(".time_start").textContent = "Battle start:" + identifiedData.timeStart;
  document.querySelector(".time_end").textContent = "Battle end:" + identifiedData.timeEnd;
  document.querySelector(".battle_description").textContent = identifiedData.description; // Frederiks code

  var mapIdentifier = identifiedData.battleNumber;
  document.querySelector("#b".concat(mapIdentifier)).classList.add("show-location");
  var bboxCircle = document.querySelector("#b".concat(mapIdentifier)).getBBox(); // console.log(bboxCircle.y);

  var scaler1 = document.querySelector("#b".concat(mapIdentifier)).getAttribute("cx");
  var scaler2 = document.querySelector("#b".concat(mapIdentifier)).getAttribute("cy"); // console.log(scaler1, scaler2);

  var calcX = Math.round(scaler1 / 39);
  var calcY = Math.round(scaler2 / 29); // console.log(calcX);
  // console.log(calcY);

  document.querySelector("#map svg").style.transformOrigin = "".concat(calcX, "% ").concat(calcY, "%");
  document.querySelector("#map svg").classList.add("zoomin");
  document.querySelector("#close").addEventListener("click", function () {
    resetTimeline(mapIdentifier);
  });
}

function resetTimeline(mapIdentifier) {
  document.querySelector(".modal").style.display = "none";
  document.querySelector("body").style.overflow = "scroll";
  document.querySelector("#map svg").classList.remove("zoomin");
  document.querySelector("#b".concat(mapIdentifier)).classList.remove("show-location");
  good.innerHTML = "";
  bad.innerHTML = "";
  good.classList.remove("win");
  good.classList.remove("lose");
  bad.classList.remove("lose");
  bad.classList.remove("win");
  document.querySelector(".name_tag").innerHTML = "";
}

function initiateAnimations() {
  // callback function to do animations
  var scrollImations = function scrollImations(entries) {
    entries.forEach(function (entry) {
      // only do animation if the element is fully on screen
      if (entry.isIntersecting && entry.intersectionRatio >= 0) {
        entry.target.classList.add("animation--visible");
      } else {}
    });
  }; // create the observer


  var options = {
    threshold: 0.1
  };
  var observer = new IntersectionObserver(scrollImations, options); // target the elements to be observed

  var animations = document.querySelectorAll(".animation");
  animations.forEach(function (animation) {
    observer.observe(animation);
  });
}

function startJourney() {
  document.querySelector(".start_overlay").style.opacity = "0";
  document.querySelector(".start_overlay").addEventListener("transitionend", function () {
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
  var pctScrolled = Math.floor(scrollTop / trackLength * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)

  if (pctScrolled == 0) {
    document.querySelector(".audio").playbackRate = 0.1;
  } else {
    document.querySelector(".audio").playbackRate = pctScrolled / 70;
  }
}

window.addEventListener("scroll", function () {
  amountscrolled();
}, false);
var getGoodSVG = [];
var getBadSVG = [];
var urlLength = window.location.href;
var urlLengthAndSvgLength = urlLength.length - 6;
console.log(urlLength);

function getNameTag() {
  getGoodSVG = document.querySelectorAll(".goodSvg");
  getBadSVG = document.querySelectorAll(".badSvg");
  getGoodSVG.forEach(function (button) {
    button.onmouseover = function () {
      var str = event.target.src;
      var newString = str.substring(urlLengthAndSvgLength, 100);
      var doneString = newString.slice(0, -4);
      var superDoneString = doneString.charAt(0).toUpperCase() + doneString.substring(1);
      document.querySelector(".name_tag").innerHTML = superDoneString;
    };
  });
  getBadSVG.forEach(function (button) {
    button.onmouseover = function () {
      var str = event.target.src;
      var newString = str.substring(urlLengthAndSvgLength, 100);
      var doneString = newString.slice(0, -4);
      var superDoneString = doneString.charAt(0).toUpperCase() + doneString.substring(1);
      document.querySelector(".name_tag").innerHTML = superDoneString;
    };
  });
}
},{}],"../../../../../.npm-global/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61565" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../.npm-global/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","timeline.js"], null)
//# sourceMappingURL=/timeline.02a44989.js.map