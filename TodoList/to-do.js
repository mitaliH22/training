const inputVal = document.getElementsByClassName('inputVal')[0];

const addTaskBtn = document.getElementsByClassName('btn')[0];


addTaskBtn.addEventListener('click', function (){
 
    
if(inputVal.value.trim()!=0){
      let localItems = JSON.parse( localStorage.getItem('localItem'))
      
   if(localItems === null){
        taskList = new Array();
        
   }else{
       taskList = localItems;    
   }
   taskList.push(inputVal.value)
   localStorage.setItem('localItem', JSON.stringify(taskList)); 
} else{
    alert("Enter To do list item")
}
inputVal.value = null;
   showItem()
})

function showItem(){
   let localItems = JSON.parse( localStorage.getItem('localItem'))
   if(localItems === null){
        taskList = []
   }else{
       taskList = localItems;
   }


let html = '';
let itemShow = document.querySelector('.todoLists');
taskList.forEach((data, index )=> {
   
   html += `
   <div class="todoList">
   <input class="pText" value="${data}" id='pText${index}'/>
   <button class="deleteTask" onClick="deleteItem(${index})">Delete</button>
   <button class="editTask" onclick="editItem(${index})">Save</button>
   </div>
   `
})

itemShow.innerHTML = html;
}
showItem()

let save = document.querySelectorAll(".editTask");

// save.forEach(function(s){
//     s.addEventListener("click",(data)=>{
//         console.log(save.length)
//         let localItems = JSON.parse( localStorage.getItem('localItem'))
//         console.log(taskList)
//         localStorage.setItem('localItem',JSON.stringify(taskList))
//         console.log(localStorage.getItem("localItem"))
//     })
// })
// for (let i = 0; i < save.length; i++) {
//     s.addEventListener("click",()=>{
//         let localItems = JSON.parse( localStorage.getItem('localItem'))
//         console.log(taskList[i])
//     })
// }


function deleteItem(index){
   let localItems = JSON.parse( localStorage.getItem('localItem'))
   taskList.splice(index, 1)
   localStorage.setItem('localItem', JSON.stringify(taskList));
   showItem()
}

function editItem(ind){
    // console.log(ind);
    // console.log(document.getElementById("pText"+ind).value);
    taskList[ind] = document.getElementById("pText"+ind).value;
    let localItems = JSON.parse( localStorage.getItem('localItem'))
    localStorage.setItem('localItem',JSON.stringify(taskList))
}