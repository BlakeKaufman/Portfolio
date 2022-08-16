// selecting elements
const home = document.querySelector("#home");
const body = document.getElementsByTagName("body");

let timers;
// functions

function locationS() {
  const randomX = Math.trunc(
    Math.random() * document.documentElement.clientWidth
  );
  const randomY = Math.trunc(
    Math.random() * document.documentElement.clientHeight
  );
  home.style.backgroundImage = `radial-gradient(
        farthest-corner at ${randomX}px ${randomY}px,
        #f35 0%,
        #43e 100%)`;
}
function backgroundDesign() {
  locationS();
  const timers = setInterval(locationS, 800);
  return timers;
}

function mouseMoveGradient(e) {
  clearInterval(backgroundDesign());
  home.style.backgroundImage = `radial-gradient(
            farthest-corner at ${e.clientX}px ${e.clientY}px,
            #f35 0%,
            #43e 100%)`;
}
// window.onresize = displayBackgrounds;

// event listeners

if (document.documentElement.clientWidth < 800) {
  body.onload = backgroundDesign();
} else {
  home.addEventListener("mousemove", mouseMoveGradient);
}
