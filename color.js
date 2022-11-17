//get all elements including the css values which can be modified from root css variables
const root = document.querySelector(':root');
const primary = '--color-primary';
const secondary = '--color-secondary';
const int = document.getElementById('int');
const out = document.getElementById('out');
const btn__select = document.getElementById('btn__select');
const btn__random = document.getElementById('btn__random');
const box__one = document.getElementById('btn__select');
const box__two = document.getElementById('btn__random');
const n = document.getElementById('int').target.value;
const bgCol = document.body.style.backgroundColor;
bgCol = 'hsl(255, 255, 255)';
//===================================root css getters and setters================================//
const setPrimary = (root, primary) => {
	root.style.setProperty(primary, int.value);
};
const setSecondary = (root, secondary) => {
	root.style.setProperty(secondary, int.value);
};
//get functions
const getPrimary = (root, primary) => {
	let rs = getComputedStyle(root);
	console.log(
		'The value of --primary-color is: ' + rs.getPropertyValue(primary)
	);
};
const getSecondary = (root, secondary) => {
	let rs = getComputedStyle(root);
	console.log(
		'The value of --secondary-color is: ' + rs.getPropertyValue(secondary)
	);
};
//set event listeners
btn__select.addEventListener('click', () => {
	setPrimary(root, primary);
	getPrimary(root, primary);
});
btn__random.addEventListener('click', () => {
	setSecondary(root, secondary);
	getSecondary(root, secondary);
});

getCSSValue = (el, prop) => {
 if (prop in el.style) {
   return getComputedStyle(el).getPropertyValue();
 }




let randomInt = (n) =>{ Math.floor(Math.random() * n) += 1};

let generateRandomColor = () => {
	hue = randomInt(360);
	sat = randomInt(100) + '%';
	lgt = randomInt(100) + '%';
	const a = 1;
	return 'hsl(' + hue + 'deg, ' + sat + ', ' + lgt + ',' + a + ')';
};

let RGB = '#' + Math.random().toString(16).slice(-6);

console.log(generateRandomColor());

let createRandomGradient = (n) => {
	let gradient = []; //early use of caching -- canvas use later
	n = randomInt(10);
	for (i = 0; i < n; i++) {
		gradient.push(generateRandomColor());
	}
	return gradient;
};

console.log(createRandomGradient(5));
// const inputCreate = (type, value, id) => {
// 	const input = document.createElement('input');
// 	input.type = type;
// 	input.value = value;
// 	input.value = id;
// 	return input;
// };


// for (let i = 0; i < int; i++) {
// 	inputCreate('color', 'Hello', concat('in', [i]));
// }
