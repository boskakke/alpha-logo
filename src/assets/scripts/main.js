
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const logo = document.querySelectorAll('.logo')
const tl_logo = gsap.timeline()

logo.forEach((leaf) => {
	tl_logo.fromTo(leaf, {opacity: 0},{opacity: 1})
})


ScrollTrigger.create({
	animation: tl_logo,
  trigger: ".trigger",
  start: "top center",
  end: "top 100px",
  // markers: {startColor: "black", endColor: "black"},
  scrub: .5,
  pin: '.container',
});