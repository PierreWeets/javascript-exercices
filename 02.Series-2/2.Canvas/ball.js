var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;
var running = false;

var ball = {
  x: 50,
  y: 50,
  vx: 3,
  vy: 2,
  radius: 25,
  color: 'blue',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function clear() {
    //fill the canvas with gradiant display , to let a streak
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
  }

  
function draw() {
    // clear the canvas before re-display
    //ctx.clearRect(0,0, canvas.width, canvas.height);
    
    clear() 

    ball.draw();
    // calculate the new position of the ball    
    ball.x += ball.vx;
    ball.y += ball.vy;

    //test if the ball exits the canvas, then invert the value of the X & Y speeds 
    if (ball.y + ball.vy > canvas.height - ball.radius + ball.vy || ball.y + ball.vy < 0 + ball.radius + ball.vy) {
        ball.vy = -ball.vy;
    }
    if (ball.x + ball.vx > canvas.width - ball.radius + ball.vx|| ball.x + ball.vx < 0 + ball.radius + ball.vx) {
        ball.vx = -ball.vx;
    }

    //reduce progressively the vertical & horizontal bouncing effect
    ball.vy *= .999;
    ball.vy += .25;
    //ball.vx *= .99;
    raf = window.requestAnimationFrame(draw);
}

//triggers when move of the mouse pointer over the canvas
canvas.addEventListener('mousemove', function(e){
    if (!running) { // if ball is not running
      clear(); //erase the display of the ball
      ball.x = e.clientX; //gives to the ball the coordonates of the mouse pointer
      ball.y = e.clientY;
      ball.draw(); //display the ball again
    }
  });

  //triggers when left-click of the mouse
  canvas.addEventListener("click",function(e){
    if (!running) {
      raf = window.requestAnimationFrame(draw);
      running = true;
    }
  });
  
  //triggers when mouse pointer goes out of the canvas
  canvas.addEventListener("mouseout",function(e){
    window.cancelAnimationFrame(raf);
    running = false;
  });


ball.draw();