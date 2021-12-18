var robot


function setup() {
  canvas = createCanvas(850, 400);
  robotImg = loadImage("Robot.png")
  backgroundImg = loadImage("BgImg.jpg")
}

function draw() {
  background(backgroundImg);
  bg = createSprite(450,200)
  bg.addImage(backgroundImg)
  robot = createSprite(250, 200)
  robot.addImage(robotImg)
  robot.scale = 0.2
  plasma = createSprite()
  move()
  shoot()
  robot.x = mouseX
  robot.y = mouseY
  drawSprites()
  
}

function shoot(){
  if(keyDown("space")){
    plasma.velocityX = 10
  }
  else
  plasma.x = 100
  plasma.y = 100
}

function move() {
  // if (keyDown("w")) {
  //   robot.y += 5
  // }
  // if (keyDown("s")) {
  //   robot.y -= 5
  // }
  // if (keyDown("a")) {
  //   robot.x += 5
  // }
  // if (keyDown("d")) {
  //   robot.x -= 5
  // }

}