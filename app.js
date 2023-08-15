//Accesing the video and the div that contains it
const intro = document.querySelector(".foxVideo");
const video = intro.querySelector("video");

//Puting ScrollMagic into work
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration: 10000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setPin(intro)
  .addTo(controller);
let accelamount = 0.1;
let srollpos = 0;
let delay = 0;

scene.on("update", e => {
  srollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (srollpos - delay) * accelamount;
  video.currentTime = delay;
}, 33.3);
