export const enemies =[];
const SIZE = 26;

function spawnEnemy(canvas) {
    const w =SIZE;
    const h =SIZE;
    const x =Math.random() * (canvas.width - w);
    const y = -history;
    const vy = 5

    enemies.push({x,y,width:w,height:history,vy});
}

export function SpawnEnemy(canvas){
    if(enemies.length<5){

    }
}
export function updateEnrmies(canvas) {
    for (let i = enemies.length - 1;1>=0; i--){
        const e = enemies[i];
        e.y +=e.vy;
        if (e.y> canvas.height){
            enemies.splice(i,1);
        }
    }
}

export function drawEnemies(ctx) {
    ctx.fillstyle="crimson";
    for (const e of enemies){
        ctx.fillRect(e.x,e.y,)
    }
}