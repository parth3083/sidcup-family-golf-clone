var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", (dets) => {
    crsr.style.left = dets.x + "px";
    blur.style.left = dets.x - 200 + "px";
    crsr.style.top = dets.y + "px";
    blur.style.top = dets.y - 200 + "px";
});
var all = document.querySelectorAll("nav h4");
all.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
})
all.forEach((e) => {
  e.addEventListener("mouseleave", () => {
    crsr.style.scale = 1;
    crsr.style.border = "1px solid #95c11e";
    crsr.style.backgroundColor = "#95c11e";
  });
})

gsap.from("#about,#about-us",{
  y:50,
  duration: 0.5,
  opacity: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
    start: "top 70%",
    end:"top 58%"
  },
})
gsap.from("#card-container",{
 scale:0.8,
  duration: 2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end:"top 58%"
  },
})

gsap.from("#colon1", {
  y: -70,
  x: -40,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 60%",
    end:"top 45%"
  },
})
gsap.from("#colon2", {
  y: 70,
  x: 40,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "bottom 60%",
    end:"bottom 45%"
  },
})
gsap.to("nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "95px",
    scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
});
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -100%",
        scrub: 2,
      },
    
})