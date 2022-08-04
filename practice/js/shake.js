const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext("2d");
const shakebutton = document.querySelector(".shake");
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 20;
const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function handleKey() {
  console.log("HANDLING KEY");
}
window.addEventListener("keydown", handleKey);