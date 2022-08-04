const myParagraph = document.createElement("p");
myParagraph.textContent = "I am a p!";
myParagraph.classList.add("special");
console.log(myParagraph);

const img2 = document.createElement("img");
img2.src="rock.jpg";
img2.alt="rock";
console.log(img2);

const myDiv = document.createElement("div");
myDiv.classList.add("wrapper");
console.log(myDiv);

document.body.appendChild(myDiv);
myDiv.appendChild(myParagraph);
myDiv.appendChild(img2);

const heading = document.createElement("h2");
heading.textContent = "Cool things";
myDiv.insertAdjacentElement("afterbegin", heading);

const list = document.createElement("ul");
list.classList.add("listclass");
console.log(list);

for (let index = 0; index < 5; index++) {
    const item = document.createElement("li");
    
    // for(let j = 0; j < 5; j++){ 
    //     const content = ["one", "two", "three", "four"];
    // list.textContent = content[j];
    // }
    list.appendChild(item);
    
}

// const item = document.createElement("li");
// list.appendChild(item);

const item = document.querySelector(".item");
console.log(item.innerHTML);
// item.innerHTML = `<h1>Hey How are you?</h1>`;
// console.log(item.innerHTML);

const wes = document.querySelector(".wes");
console.log(wes);
console.log(wes.firstElementChild);
console.log(wes.lastElementChild);
console.log(wes.previousElementSibling);
console.log(wes.nextElementSibling);
console.log(wes.parentElement);
console.log(wes.childNode);