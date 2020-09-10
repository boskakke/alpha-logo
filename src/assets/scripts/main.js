
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const logo = gsap.utils.toArray('.logo')
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
	tl_logo.set(leaf, {opacity: 1})
	if(i === 0) {
		tl_logo.fromTo(leaf, { y:50, opacity: 0},{y: 0, opacity: 1, ease: 'power4.in', duration: 4})	
	}
	tl_logo.fromTo(leaf, { rotate: rotateFrom(i)},{rotate: rotateTo(i), ease: 'none'})
})

ScrollTrigger.create({
	animation: tl_logo,
  trigger: ".animation-container",
  start: "top top",
  end: () => '+=' + document.querySelector('.animation-container').offsetHeight,
  pinSpacing: 400,
  // snap: 1 / (logo.length - 1),
  // markers: {startColor: "black", endColor: "black"},
  scrub: .5,
  pin: '.animation-container',
});
