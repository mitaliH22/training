const turtle = document.querySelector(".turt");
let x = 0;
let y = 0;
const speed = 50;
let flipped = false;

function handlekeydown(event) {
  if (!event.key.includes("Arrow")) {
    return;
  }
  // console.log(event.key);
  switch (event.key) {
    case "ArrowLeft":
      x = x - 1;
      flipped = true;
      break;
    case "ArrowRight":
      x = x + 1;
      flipped = false;
      break;
    case "ArrowUp":
      y = y - 1;
      break;
    case "ArrowDown":
      y = y + 1;
      break;
    default:
      console.log("not valid move");
      break;
  }
  
  turtle.setAttribute("style", `--rotate: ${flipped ? '180deg': '0'}; --x: ${x*speed}px; --y: ${y*speed}px;`);
  console.log(event.key);
}
window.addEventListener("keydown", handlekeydown);

// 
// turtle.style["--x"] = "${x}px";
// turtle.style["--y"] = "${y}px";

// turtle.setAttribute("style", `--x: ${x}px; --y: ${y}px`);