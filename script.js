import { removeAnimate } from "./remove.js";
// const storedtasks = localStorage.getItem('task');
// const values = storedtasks ? JSON.parse(storedtasks) : [];

// updateList();

// function updateList(){
// for (let i = 0; i < values.length; i++) {
//     let list = document.querySelector('.js-list');
//     let fullHtml ='';
//     fullHtml +=
//     `<div class="container_list">
//             <div class="left-side">${values[i]}</div>
//             <div class="right-side"></div>
//     </div>`;
//     list.innerHTML = fullHtml;
// }
// }

// function addToTasks() {
//     let inputValue = document.querySelector('.js-task_input');
//     values.push(inputValue.value);
//     localStorage.setItem('task', JSON.stringify(values));
//     updateList();
//     inputValue.value = '';
//     console.log(values);

// }
const storedtasks = localStorage.getItem("task");
export let values = storedtasks ? JSON.parse(storedtasks) : [];
updateNumber();
updateList();

function updateList() {
  let list = document.querySelector(".js-list");
  let htmlContent = ""; // ایجاد یک رشته جدا برای نگهداری محتوای HTML جدید
  values.forEach(function (value, index) {
    htmlContent += `<div class="container_list">
                <div class="left-side">
                    <div class="tick_img"></div>
                    <div class="text ">${value.text}</div>
                </div> 
                <div class="right-side">
                    <div class="trash_img"  data-text-id="${value.id}"></div>
                </div>
        </div>`;
  });

  // اختصاص دادن محتوای HTML به .innerHTML یکباره
  list.innerHTML = htmlContent;
}
let inputValue = document.querySelector(".js-task_input");
document.querySelector(".add_btn").addEventListener("click", () => {
  addToTasks();
});
function addToTasks() {
  let number = JSON.parse(localStorage.getItem("number"));
  let id = number ? number : 0;

  if (inputValue.value === "") {
    alert("add something to text box");
  } else {
    values.push({ text: inputValue.value, id: id });
    localStorage.setItem("task", JSON.stringify(values));
    id += 1;
    localStorage.setItem("number", JSON.stringify(id));
    updateNumber();
    updateList();
    inputValue.value = "";
    console.log(values);
  }
}

function updateNumber() {
  let element = document.querySelector(".js-active_tasks");
  element.innerHTML = `${values.length} Active Tasks`;
}
inputValue.addEventListener("keydown", () => {
  enter();
});
function enter() {
  if (event.key === "Enter") {
    addToTasks();
  }
}
export let trash = document.querySelectorAll(".trash_img");
trash.forEach((item, index) => {
  item.addEventListener("click", () => {
    let id_number = parseInt(item.dataset.textId);
    removeAnimate(id_number);
    clearTask(id_number);
  });
});
let newList = [];
function clearTask(id) {
  values.forEach((item, index) => {
    if (item.id !== id) {
      newList.push(item);
    }
  });
  values = newList;
  localStorage.setItem("task", JSON.stringify(values));
  setTimeout(() => {
    updateList();
    updateNumber();
  }, 500);
}
document.querySelector(".icon").addEventListener("click", () => {
  menu();
});
function menu() {
  let menuI = document.querySelector(".conta");

  menuI.style.display = "inline-block";
}
document.querySelector(".out").addEventListener("click", () => {
  menuH();
});
function menuH() {
  let menuI = document.querySelector(".conta");

  menuI.style.display = "none";
}
export let container = document.querySelectorAll(".container_list");
