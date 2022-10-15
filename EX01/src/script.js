
/**@type {HTMLCanvasElement} */
const canvas = document.getElementById('spite');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 100;
const CANVAS_HEIGHT = canvas.height = 100;
const char_width = 350;
const char_height = 350;


const character = new Image();
character.src = "../img/sprite2.png";
let offset = 0;
let x  = 0;
let y  = 2;
let gameFrame = 0;

function animate(){
    if(gameFrame%10==0){
        if(x>=3)x=0;
        else x++;
    }
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    ctx.drawImage(character,offset+ x*char_width,y*char_height,char_width,char_height,0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    requestAnimationFrame(animate);
    gameFrame++;
}
animate();