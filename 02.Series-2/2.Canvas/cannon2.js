var cannon = {
  x: 50,
  y: 200,
  vx:5,
  width: 20,
  length:100,
  color: 'black',
  draw: function() {
    //clear() ;  
    ctx.beginPath();
    ctx.fillRect(this.x , this.y, this.width, this.length);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();

  },
  moveLeft: function(){
    this.x -= this.vx;
  },
  moveRight: function(){
    this.x += this.vx;
  }
};

function clear() {
    
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

function draw() {
    // clear the canvas before re-display
    clear() ;
    cannon.draw();
    raf = window.requestAnimationFrame(draw);
}

document.addEventListener("keydown", event => {
    console.log(`key code : ${event.code} ${event.keyCode}`);
    // if (!running) {
    //     raf = window.requestAnimationFrame(draw);
    //     running = true;
    // }
    
    if (event.keyCode === 37 ) {
        cannon.moveLeft();
        clear();
        cannon.draw();
        

    } else if (event.keyCode === 39 ){
        cannon.moveRight();
        clear();
        cannon.draw();
        

    } else if (event.keyCode === 32 ){
        window.cancelAnimationFrame(raf);
        running = false;
    } 
});  

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;
var running = false;

cannon.draw();