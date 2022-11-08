const topBtn = document.getElementById("topBtn");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const bottomBtn = document.getElementById("bottomBtn");
const player = document.getElementById("player");

const randomNumber = (maximum, minimum) => {
    const myNum = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return myNum;
    
}

console.log(randomNumber(0, 255));

const changeColor = () => {
    let r = randomNumber(0,255);
    let g = randomNumber(0,255);
    let b = randomNumber(0,255);
    player.style.backgroundColor = `rgb(${r},${g},${b})`;
}
const myInterval = setInterval(() => {
    changeColor()
},1000);

player.onclick = () => {
    changeColor();
    clearInterval(myInterval);
}





let x = 200;
let y = 200;

const move = () =>{
    player.style.left = x + "px";
    player.style.top = y + "px";
}
topBtn.onclick = () => {
    y-=20;
    move();
} 
leftBtn.onclick = () => {
    x-=20;
    move();
} 
rightBtn.onclick = () => {
    x+=20;
    move();
} 

bottomBtn.onclick = () => {
    y+=20;
    move();
} 

