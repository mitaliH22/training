const p = document.querySelector('p');
console.log(p);

const dv = document.querySelectorAll('div');
console.log(dv);

const h = document.getElementsByClassName('head');
console.log(h);

const pizzaList = document.querySelector(".pizza");
console.log(pizzaList.textContent);
pizzaList.textContent = `${pizzaList.textContent} too many 🍕`;
console.log(pizzaList.textContent);
pizzaList.insertAdjacentText("afterbegin", " not many🍕");
console.log(pizzaList.textContent);

const img = document.querySelector('.nice');
console.log(img.classList);
img.classList.add("open");
console.log(img.classList);
img.classList.remove("cool");
console.log(img.classList);
img.classList.add("round");
console.log(img.classList);

function toggleRound() {
  img.classList.toggle("round");
}
img.addEventListener("click", toggleRound);

img.width = 200;
console.log(img.height);
console.log(img.hasAttribute('alt'));

const custom = document.querySelector(".custom");
console.log(custom.dataset);

custom.addEventListener("click", function () {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last} `);
});