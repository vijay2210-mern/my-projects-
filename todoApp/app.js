let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
      item.innerText = input.value;
      
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("Delete");
    item.appendChild(delBtn);
  
    ul.appendChild(item);
    input.value = "";

});

let btns = document.querySelector(".Delete");
for(Btn of btns) {
  Btn.addEventListener("click", function(){
    let par = Btn.parentElement;
    par.remove();
  });
}