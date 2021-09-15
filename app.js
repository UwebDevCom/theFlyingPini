

var canvas = document.getElementById('gameSurface');
var ctx = canvas.getContext('2d');


document.addEventListener('keyup', handleKeyEvent);




let g = {x: 0, y: 9.8};
let delta = 0.1;
let vel = {x: 0,y: -60};
let pos = {x: 0, y: canvas.height};
let dampen = 0.01;
let threshhold = 0.1;
let touchingFloor = true;
let jumpforce = -60;
let moveSpeed = 30;


drawFrame();



function handleKeyEvent(e) {
    if(e.code === 'ArrowUp' && touchingFloor) {
        jump();
    }

    if(e.code === 'ArrowRight') {
        move(1);
    }
    if(e.code === 'ArrowLeft') {
        move(-1);
    }

}

function jump(event) {
        vel.y = jumpforce;
}

function move(direction) {
    vel.x = direction * moveSpeed;
}




function drawFrame() {
    requestAnimationFrame(drawFrame);
    doPhysics();
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawPolygon();
}

function drawPolygon() {
    ctx.translate(pos.x,pos.y);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0,-30);
    ctx.lineTo(30,-30);
    ctx.lineTo(45,-15);
    ctx.lineTo(30,0);
    ctx.closePath();

    ctx.fillStyle = 'purple';
    if(touchingFloor) {
        ctx.fillStyle = 'red';
    }
    ctx.fill();
    ctx.translate(-pos.x,-pos.y);
}


function doPhysics() {


    if(Math.abs(vel.x) < threshhold) {
        vel.x = 0;
    }
    

    vel.x = vel.x + g.x*delta;
    


    // v1 = v0 + at


    pos.x = pos.x + (vel.x * delta);

    if(!(touchingFloor && Math.abs(vel.y) < threshhold)) {
        vel.y = vel.y + g.y*delta;
        pos.y = pos.y + (vel.y * delta);
    }
    

    if(pos.y > canvas.height) {
        vel.y = 0;
    }

    if((canvas.height - pos.y) < threshhold){
        touchingFloor = true;
    } else {
        touchingFloor = false;
    }


}

function doAJump() {
    vel.y = -50;
}