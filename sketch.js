
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,ground,END
var invisibleground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
 FoodGroup= new Group()
  obstacleGroup= new Group()
}



function setup() {
 createCanvas(670,400);
  score=0;
  survivalTime=0;
 monkey=createSprite(80,330,20,20); 
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  ground=createSprite(0,400,1500,15);
  
  
 invisibleground=createSprite(100,390,1500,10);
  
}


function draw() {
  background("lightblue")
   if(keyDown("space")&&monkey.y  >=350) {
   monkey.velocityY=- 13;
 }
 monkey.velocityY = monkey.velocityY + 0.4
  monkey.collide(invisibleground)
   
  ground.velocityX = 0 
 ground.x = ground.width/2;
     
  fill("green")
  text("Score: "+ score, 500,50); 
  fill("purple")
  text("survival Time: "+ survivalTime, 100,80); 
  

if(World.frameCount%200===0){
    fruits()
 }
  
  if(World.frameCount%300===0){
    stones()
 }
  
  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach()
    score=score+1
      }
 
  
drawSprites();
survivalTime=Math.round(getFrameRate()/1);  
  
 function fruits(){
   banana=createSprite(670,200,200,10);
    banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-3
  FoodGroup.add(banana)
   
   
 }
function stones(){
  obstacle=createSprite(670,380,10,10)
  obstacle.addImage(obstaceImage)
  obstacle.velocityX=-4
  obstacle.scale=0.2
  obstacleGroup.add(obstacle)
}





}