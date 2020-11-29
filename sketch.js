var monkey , monkey_running
var ground,bground,bgimage;
var banana ,bananaImage
var obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  
  bgimage=loadImage("jungle.jpg");
 
}



function setup() {
  createCanvas(400,400)
  
  bground=createSprite(200,200,400,400);
  bground.velocityX=3;
  bground.addImage("jungle",bgimage);
  
  
monkey=createSprite(80,360,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1; 
  
ground=createSprite(400,380,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  ground.visible=false;
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
  score=0;
}


function draw() {
background("white");
  textSize(20);
  stroke("green");
  fill("green");
  
  if(bground.x<400){
    bground.x=200;
    bground.y=200;
bground.velocityX=3;
  }
  if(keyDown("space")&& monkey.y>250){
    monkey.velocityY=-12;
    }
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  if (FoodGroup.isTouching(monkey)){
    score=score+2;
    FoodGroup.destroyEach();
    monkey.scale=monkey.scale+0.02;
  }
  if (obstacleGroup.isTouching(monkey)){
   monkey.scale=monkey.scale-0.02; 
   obstacleGroup.destroyEach(); 
  }
 
  food();
  obstacles();
drawSprites(); 
  text("SCORE : "+score,50,50);
}
function food(){
  if(frameCount%80===0)
{
 var banana=createSprite(500,165,10,40); 
   banana.y= Math.round(random(120,200));
  banana.velocityX = -3;
  banana.addImage(bananaImage);
  banana.scale=0.08;
  banana.lifetime=200;
  
  FoodGroup.add(banana);
}
}
function obstacles(){
   if (frameCount % 300 === 0){
   var obstacle = createSprite(500,380,10,40);
    obstacle.velocityX = -6;
     obstacle.addImage(obstacleImage);
     obstacle.scale=0.1;
     obstacle.lifetime=250;
     
     obstacleGroup.add(obstacle);
   }
}




