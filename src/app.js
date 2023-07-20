import anime from 'animejs/lib/anime.es.js';


let button = document.getElementById("botan");
button.onclick = myEventHandler;

function myEventHandler(){
	anime({
		targets: 'div',
		translateY: -100,
		scale: 150,
		rotate: {
			value: 360,
			duration: 1800,
			easing: 'easeInOutSine'
		  },
		duration: 1000
	  });
	  let target = document.getElementById("botan");
	  target.remove();
}