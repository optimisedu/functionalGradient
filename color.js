//get all elements including the css values which can be modified from rt css variables
// import './styles.css';
let primary = '--color-primary';
let secondary = '--color-secondary';
let png = document.getElementById('png');
let rt = document.querySelector(':root');
let int = document.querySelector('#int');
let out = document.getElementById('out');
let btn__select = document.getElementById('btn__select');
let btn__random = document.getElementById('btn__random');
let box__one = document.getElementById('btn__select');
let box__two = document.getElementById('btn__random');
let bgCol = document.body.style.backgroundColor;
let btn = document.getElementsByClassName('btn');
let pngToJpg = document.getElementById('png');
let btn__set = document.getElementById('set');
//utilities
let random = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
let randomInt = (n) =>{ Math.floor(Math.random() * n) += 1};


let el = (selector) => document.getElementById(id);
let find = (selector) => document.querySelector(selector);
let get = (selector, property) => {
window.getComputedStyle(find(selector)).getPropertyValue(property);
}
let set = (selector, property, value) => {
	return find(selector).style.setProperty(property, value);
};

//functions
// let randomColor = () => {
// 	let r = random(0, 255);
// 	let g = random(0, 0);
// 	let b = random(0, 255);
// 	let a = random(0.5, 1);
// 	let color = `rgba(${r}, ${g}, ${b}, ${a})`;
// 	return color;
// };

function randomColor() {
	return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  }
  function intVal(int){
	return int.value;
  }
//   int.value = randomColor();
//   int.addEventListener('onchange', int);

set('main', 'background-color', randomColor());
btn__random.addEventListener('click', (e) => {
let thisrand = randomColor();
	set('main', 'background-color', randomColor());
	int.value = thisrand;
	out.value = thisrand;
	onerror = (e) => {
		console.log(e);
	};
});

btn__select.addEventListener('click', (e) => {
	let thisint =  '#' + int.value;
	console.log(thisint);
	set('main', 'background-color', thisint);
	out.value = int.value;
	onerror = (e) => {
		console.log(e);
	};
});
