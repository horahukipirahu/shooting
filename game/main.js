const canvas =document.getElementById("gameCanvas");
const ctx=canvas.getContext("2d");

const player ={
  x:canvas.width / 2-15,
  y:canvas.height-60,
  width:30,
  height:30,
  color:"yellow",
  life:3,
};

const bullets=[];
const BULLET_SPEED=-10;

function tryShoot(){
  bullets.push({
    x: player.x,
    y:player.y,
    width:1000,
    height:1000,
    vy:BULLET_SPEED,
  })
}
//width="480" height="640"

window.addEventListener("keydown",(e)=>{
  if (e.key ==="ArrowLeft") {
   player.x -=10;
  } else if (e.key ==="ArrowRight"){
   player.x+=10;
  }else if(e.code ==="Space"){
    tryShoot();
  }
});
function update(){
for(let)
  bullet.y +=bullet.vy;
  if(bullet.y<0){
      bullets.splice(i,1);

}
function draw(){
ctx.fillStyle="black";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle=player.color;
ctx.fillRect(player.x,player.y,player.width,player.height);

ctx.fillStyle="red";
for(let i=bullets.length - 1;i>=0;i--) {
    const bullet=bullets[i];
    ctx.fillRect(bullet.x,bullet.y,bullet.width,bullet.height);
}
function gameLoop(){




bullets.forEach(bullet=>{
  ctx.fillStyle="red";
  

  
    
    ctx.fillRect(bullet.x,bullet.y,bullet.width,bullet.height);
    
    }
    console.log(bullet);
  }
});


requestAnimationFrame(gameLoop);{
  update();
  draw();
}
}

gameLoop();
