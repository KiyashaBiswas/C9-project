function setup() {
  createCanvas(800,400);
ball = createSprite (0,0,50,50)
ball.shapeColor = "white"
ball.velocityX = 5
ball.velocityY = 5
  
}

function draw() {
  background("black");  
  drawSprites();
}