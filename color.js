//get all elements including the css values which can be modified from rt css variables
const primary = '--color-primary';
const secondary = '--color-secondary';
const png = document.getElementById('png');
const rt = document.querySelector(':root');
const int = document.querySelector('#int');
const out = document.getElementById('out');
const btn__select = document.getElementById('btn__select');
const btn__random = document.getElementById('btn__random');
const box__one = document.getElementById('btn__select');
const box__two = document.getElementById('btn__random');
const bgCol = document.body.style.backgroundColor;
const btn = document.getElementsByClassName('btn');
const pngToJpg = document.getElementById('png');
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
let randomColor = () => {
	let r = random(0, 255);
	let g = random(0, 0);
	let b = random(0, 255);
	let a = random(0.5, 1);
	let color = `rgba(${r}, ${g}, ${b}, ${a})`;
	return color;
};

set('main', 'background-color', randomColor());
btn__random.addEventListener('click', (e) => {
set('main', 'background-color', randomColor());
	onerror = (e) => {
		console.log(e);
	};
});

// ==============================================get color values==============================================
let getColor = (el, property) => 
let gradient = (el1, el2) => {
	let color1 = get(el1, 'background-color');
	let color2 = get(el2, 'background-color');
	let gradient = `linear-gradient(${color1}, ${color2})`;
	return gradient;
}
// ==============================================sharp png to jpg==============================================


