var bird;
var pipes = [];

function setup() {
  createCanvas(640, 480);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(150);
  
  for (var i = pipes.length-1; i >= 0; i--) {
    pipes [i].show();
    pipes[i].update();
    
    if (pipes[i].hits(bird)) {
      pipes.splice(i, 1);
    }
  }
  
  bird.update();
  bird.show();
  
  
  if (frameCount % 200 == 0) {
    pipes.push(new Pipe());
  }
}

function keyPressed() {
 if (key == ' ') {
 bird.up();
  }
}
