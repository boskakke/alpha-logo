
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const logo = document.querySelectorAll('.logo')
const tl_logo = gsap.timeline()

const rotateFrom = (index) => {
	if(index == 0) {
		return '0deg';
	} else {
		return 179.9 / 8 * (index - 1) + 'deg';
	}
}
const rotateTo = (index) => {
		return 179.9 / 8 * index + 'deg';
}

logo.forEach((leaf, i) => {	
	tl_logo.fromTo(leaf, { rotate: rotateFrom(i)},{opacity: 1, rotate: rotateTo(i)})
})


ScrollTrigger.create({
	animation: tl_logo,
  trigger: ".trigger",
  start: "top center",
  end: "bottom center",
  // markers: {startColor: "black", endColor: "black"},
  scrub: 1,
  pin: '.container',
});