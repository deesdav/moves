const topBtn = document.getElementById("topBtn");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const bottomBtn = document.getElementById("bottomBtn");
const player = document.getElementById("player");

let x = 200;
let y = 200;

const move = () =>{
    player.style.left = x + "px";
    player.style.top = y + "px";
}
topBtn.onclick = () => {
    y-=10;
    move();
} 
leftBtn.onclick = () => {
    x-=10;
    move();
} 
rightBtn.onclick = () => {
    x+=10;
    move();
} 

bottomBtn.onclick = () => {
    y+=10;
    move();
} 

