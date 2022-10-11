const moonPath="M8 16C8 24.8366 16 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C16 0 8 7.16344 8 16Z";
const moonColor = "#d6d6d6";

const sunPath="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z";
const sunColor ="#FFB931";

let body = document.querySelector("body");
let lightModeSwitch = document.querySelector("#lightmode-switch");
let svgIconPath = lightModeSwitch.querySelector("svg path");

function darkTransition() {
  const timeline = anime.timeline({
    duration: 500,
    easing: "easeOutExpo"
  });
  timeline.add({
    targets: svgIconPath,
    d: [
    { value: moonPath}
    ],
    fill: [
    {value: moonColor}
    ]
  }).add({
    targets: body,
    background: "#1e1e1e"
  }, 0);
}

function lightTransition() {
  const timeline = anime.timeline({
    duration: 500,
    easing: "easeOutExpo"
  });
  timeline.add({
    targets: svgIconPath,
    d: [
      { value: sunPath}
    ],
    fill: [
      { value: sunColor}
    ]
  }).add({
    targets: body,
    background: "#fdfdfd"
  }, 0);
}
lightModeSwitch.addEventListener('click', function(){
  if(body.classList.contains("dark")){
    lightTransition();
    body.classList.remove("dark");
  } else {
    darkTransition();
    body.classList.add("dark");
  }
})