// console.log("hi")
const wes = document.querySelector(".wes");
// wes.addEventListener("click", function (event) {
//   console.log(event);
// });

// const name = document.getElementById("name");
const cb = document.getElementById("agree");


wes.addEventListener("click", function (event) {
  if(!cb.checked){
  event.preventDefault();
  }
});

const photo = document.querySelector(".photo");
function handlePhotoClick(event) {
  if (event.type === "clicked" || event.key === "Enter") {
    console.log("you clicked the photo");
  }
}
photo.addEventListener("click", handlePhotoClick);
photo.addEventListener("keyup", handlePhotoClick);

// const btn = document.querySelector(".btn");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", () => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });