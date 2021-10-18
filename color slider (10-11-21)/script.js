// Get DOM elements
const c = document.getElementById('c');
const r = document.getElementById('rSlider');
const g = document.getElementById('gSlider');
const b = document.getElementById('bSlider');

const ctx = c.getContext('2d');

function getColor() {
    var color = `rgb(${r.value}, ${g.value}, ${b.value})`;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, c.width, c.height);
}

getColor();

r.addEventListener('change', getColor);
g.addEventListener('change', getColor);
b.addEventListener('change', getColor);