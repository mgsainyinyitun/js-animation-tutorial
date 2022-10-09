const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spritWidth = 575;
const spritHeight = 523;
let gameFrame = 0;
let playerState = "idle";
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change',function(e){
    playerState = e.target.value;
})

const staggerFrames = 5;
const spriteAnimations = [];
const animateStates = [
    {
        name: 'idle',
        frames : 6,
    },
    {
        name : 'jump',
        frames:6,
    },
    {
        name : 'fall',
        frames:6,
    },
    {
        name : 'run',
        frames:8,
    },
    {
        name : 'dizzy',
        frames:10,
    },
    {
        name : 'sit',
        frames:4,
    },
    {
        name : 'roll',
        frames:6,
    },
    {
        name : 'bite',
        frames:6,
    },
    {
        name : 'ko',
        frames:11,
    },
    {
        name : 'gethit',
        frames:3,
    },
];

animateStates.forEach((state,index)=> {
    let frames = {
        loc:[],
    }
    for (let j = 0;j<state.frames;j++){
        let positionX = j*spritWidth;
        let positionY = index * spritHeight;
        frames.loc.push({x:positionX,y:positionY});
    }
    spriteAnimations[state.name] = frames;
});

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames)%spriteAnimations[playerState].loc.length;

    // ctx.fillRect(100,50,100,100);
    // ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh);
    let frameX = spritWidth*position;
    let frameY = spriteAnimations[playerState].loc[position].y;

    ctx.drawImage(playerImage,
        frameX,
        frameY,
        spritWidth,
        spritHeight,
        0,
        0,
        CANVAS_WIDTH,
        CANVAS_HEIGHT);

        gameFrame++;
    requestAnimationFrame(animate);
}
animate();