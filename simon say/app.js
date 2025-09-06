let gameseq= [];
let userseq =[];

let btns =["yellow" , "red" , "green" , "blue"]

let started = false;
let level =0;
let h2 = document.querySelector("h2")

document.addEventListener("keypress", fnction(){
    if(started == false){
        console.log("Game started");
        started =true;
        levelUp();
    }
});

function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash")
}, 250);
}
function  levelUp(){
    level++;
    h2.innerText = `level ${level}`;
    let randInds = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`;)

    btnFlash();
}
function btnPress {
    let btn = this;
    btnFlash(btn);

}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPres);
}