
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const logo = document.querySelectorAll('.logo')
const tl_logo = gsap.timeline()

const rotateFrom = (index) => {
	if(index == 0) {
		return '0deg';
	} else {
		return 179 / 8 * (index - 1) + 'deg';
	}
}
const rotateTo = (index) => {
		return 179 / 8 * index + 'deg';
}

logo.forEach((leaf, index) => {
	
tl_logo.fromTo(leaf, {opacity: 0, rotate: rotateFrom(index)},{opacity: 1, rotate: rotateTo(index), ease: 'none'})
	
})

//transform: rotate(calc(180deg / 8 * #{$i}));	

ScrollTrigger.create({
	animation: tl_logo,
  trigger: ".trigger",
  start: "top center",
  end: "top 100px",
  // markers: {startColor: "black", endColor: "black"},
  scrub: .5,
  pin: '.container',
});