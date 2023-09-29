const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
const slider = document.querySelectorAll("#roadmapcard");
var counter = 0;
slider.forEach((slide, index) => {
  slide.style.left = `${index * 20}%`;
});
const cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
    left: dets.x + "px",
    top: dets.y + "px",
  });
});

// const goNext = () => {
//   counter++;
//   slidediv();
// };
// const goPrev = () => {
//   counter--;
//   slidediv();
// };
// const slidediv = () => {
//   slides.forEach((slide) => {
//     slide.style.transform = `translateX(-${counter * 50}%)`;
//   });
// };

function loadinganimation() {
  gsap.from("#page1 h1", {
    y: -100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });
  gsap.from("#page1 h2", {
    y: -100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });
  gsap.from("#page1 h3", {
    y: -100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });
}
loadinganimation();
