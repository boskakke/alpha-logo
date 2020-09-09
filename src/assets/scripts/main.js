
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
	tl_logo.set(leaf, {className: '+=logo logo--active'})
	tl_logo.fromTo(leaf, { rotate: rotateFrom(i)},{rotate: rotateTo(i), ease: 'power4'})
})

ScrollTrigger.create({
	animation: tl_logo,
  trigger: ".animation-container",
  start: "top top",
  end: () => '+=' + document.querySelector('.animation-container').offsetHeight * 2,
  pinSpacing: 400,
  // snap: 1 / (logo.length - 1),
  // markers: {startColor: "black", endColor: "black"},
  scrub: true,
  pin: '.animation-container',
});
