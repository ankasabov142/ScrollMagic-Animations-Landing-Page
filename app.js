gsap.registerPlugin(ScrollTrigger);



gsap.to('#imgSpecs',{
  opacity:1,
  duration:3,
x: 300,
  scrollTrigger:{
    trigger:'.specs',
  start:'top 50%',
  toggleActions:'play restart reverse resume'
  }
})





const intro = document.querySelector(".foxVideo");
const video = intro.querySelector("video");

//Puting ScrollMagic into work
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration: 9000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setPin(intro)
  .addTo(controller);

let accelamount = 0.1;
let srollpos = 0;
let delay = 0.5;

scene.on("update", (e) => {
  srollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (srollpos - delay) * accelamount;
  video.currentTime = delay;
}, 33.3);

//creating snow animation
const snowContainer = document.querySelector(".snow-container");
const snowContent = ["&#10052", "&#10053", "&#10054"];

const random = (num) => {
  return Math.floor(Math.random() * num);
};

const getRandomStyles = () => {
  const top = random(100);
  const left = random(100);
  const dur = random(10) + 10;
  const size = random(25) + 25;
  return `
    top: -${top}%;
    left: ${left}%;
    font-size: ${size}px;
    animation-duration: ${dur}s;
  `;
};

const createSnow = (num) => {
  for (var i = num; i > 0; i--) {
    var snow = document.createElement("div");
    snow.className = "snow";
    snow.style.cssText = getRandomStyles();
    snow.innerHTML = snowContent[random(3)];
    snowContainer.append(snow);
  }
};

window.addEventListener("load", () => {
  createSnow(60);
});


