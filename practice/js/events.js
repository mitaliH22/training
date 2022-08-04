const btn = document.querySelector(".btn");
btn.addEventListener('keypress', function() {
    document.body.innerHTML = 'Loading...';
})

function greeting(){
    console.log(`morning`);
}
btn.addEventListener('click',greeting);

const group = document.querySelectorAll("button.buy");
// console.log(group);

// function buyItem() {
//   console.log("BUYING ITEM");
// }
// // group.addEventListener("click", buyItem);

// function btnsGroup(btns) {
//     console.log(btns);
//     btns.addEventListener("click", buyItem);
// }
// group.forEach(btnsGroup);

function handleBuyButtonClick(event) {
  console.log("You are buying it");
  console.log(event.target);
  console.log(event.target.dataset.price);
   console.log(event.target);
   console.log(event.currentTarget);
   console.log(event.target === event.currentTarget);
   event.stopPropagation();
}
group.forEach(function (btns) {
  btns.addEventListener("click", handleBuyButtonClick);
});

window.addEventListener("click", function (event) {
  console.log("you clicked the window");
//   console.log(event.target);
});
