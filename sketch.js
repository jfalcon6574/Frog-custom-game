var frog,fly,wasp,background
var frogImg, flyImg, pondBackgroundImg, waspImg,jumpFrogImg
var up
function preload(){
  frogImg = loadAnimation("sittingFrog.png")
  jumpFrogImg = loadAnimation("jumpingFrog.png")
  flyImg = loadImage("fly.png")
  pondBackgroundImg = loadImage("pondBackground.jpg")
  waspImg = loadImage("wasp.webp")
}

function setup(){
createCanvas(1200,600)  
background = createSprite(600,300,1200,600) 
background.addImage(pondBackgroundImg)
background.scale = 0.3   

frog = createSprite(500,520)
frog.addAnimation("sittingFrog",frogImg)
frog.addAnimation("jumpingFrog",jumpFrogImg)
frog.scale = 0.2

fly = createSprite(500,120)
fly.addImage(flyImg)
fly.scale = 0.1




wasp = createSprite(200,120)
wasp.addImage(waspImg)
wasp.scale = 0.1

wasp.velocityX = Math.round(random(10,20))
wasp.velocityY = Math.random(10,20)

edges = createEdgeSprites()

}

function draw() {
 
  if (keyDown(LEFT_ARROW)){
    frog.x = frog.x - 10
  }
  if (keyDown(RIGHT_ARROW)){
    frog.x = frog.x + 10
  }
  if (keyDown("SPACE")){

    frog.changeAnimation("jumpingFrog", jumpFrogImg)
    frog.velocityY = -13
    
  }
 

 var select_fly = Math.round(random(1,3));
 
  if (World.frameCount % 80 == 0) {
    if (select_fly == 1) {
      fly();
    } else if (select_fly == 2) {
    fly1();
    }
  }


  frog.velocityY = frog.velocityY + 0.5
  
  frog.collide(edges)
  fly.bounceOff(edges)
  wasp.bounceOff(edges)
  
  frog.changeAnimation("sittingFrog",frogImg)
  drawSprites()


}

function fly() {
  var fly = createSprite(0,Math.round(random(100, 370)), 10, 10);
  fly.addImage(flyImg);
  fly.velocityX = 3;
  fly.lifetime = 150;
  fly.scale = 0.1
}

function fly1() {
  var fly1 = createSprite(0,Math.round(random(150, 370)), 10, 10);
  fly1.addImage(flyImg);
  fly1.velocityY = 3;
  fly1.lifetime = 150;
  fly1.scale = 0.1
}

