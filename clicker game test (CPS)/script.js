const output = document.getElementById("output");
const oneBtn = document.getElementById("OneBtn");
const halfBtn = document.getElementById("HalfBtn");
const quarterBtn = document.getElementById("QuarterBtn");

var count = 0;

function OneSecClick() {
  setInterval(() => {
     count += 1;
     output.innerText = count;
  }, 1000);
}

function HalfSecClick() {
  setInterval(() => {
    count += 1;
    output.innerText = count;
  }, 500);
}

function QuarterSecClick() {
  setInterval(() => {
    count += 1;
    output.innerText = count;
  }, 250);
}

oneBtn.addEventListener("click", OneSecClick);
halfBtn.addEventListener("click", HalfSecClick);
quarterBtn.addEventListener("click", QuarterSecClick);