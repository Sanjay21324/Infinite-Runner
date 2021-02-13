var sonic, sonicImg;
var obstacle, obstacleImg;
var powerup, powerupImg;
var obstacleGroup, powerupGroup;
var score;
var gameState = "play";
var survivalTime = 0;
var gameOverImg, gameOver;
var ground_run, groundImg, gro;



function preload(){
  sonicImg = loadImage("sonic.png");
  obstacleImg = loadImage("obstacle.png");
  powerupImg = loadImage("powerUp.png");
  gameOverImg = loadImage("gameOver.png");
  groundImg = loadImage("ground.png");
}


function setup() {
  createCanvas(600,600);
  score=0;
  
  ground_run = createSprite(0,0,10,10);
  ground_run.addImage("groundImg");
  ground_run.scale=1.6;
  ground_run.velocityX=-4;



    
  sonic=createSprite(50,300,10,10);
  sonic.addImage("sonicImg");
  sonic.scale=0.1;
   
  gro = createSprite(40,320,1100,10);
  gro.visible = false;
  
  gameOver=createSprite(300,290);
  gameOver.addImage("gameOverImg");
  gameOver.scale=1;
  gameOver.visible = false;



  powerupGroup = new Group();
  obstacleGroup = new Group();




}


function draw()
{
    background(180);
    sonic.collide(gro);
    if(gameState == "play" )
      {
        survivalTime = survivalTime+1;
        if(ground_run.x < 0)
            {
              ground_run.x = ground_run.width/2; 
            }
        if(keyDown("space"))
            {
              sonic.velocityY=-10;
            }
        sonic.velocityY = sonic.velocityY + 0.8;
        if(World.frameCount%80==0)
            {
              powerup();
            }  
        if(World.frameCount%300==0)
            {
              obstacle();
            }
        if(powerupGroup.isTouching(sonic))
            {
              powerupGroup.destroyEach();  
              score=score+1;
            } 
      }
        if(obstacleGroup.isTouching(sonic))
            {
              gameState = "end";
            }

          

           
  
   drawSprites();
   text("Survival Time:"+ survivalTime,60,80);
   text("SCORE:"+score,60,100);
}

function powerup() 
 {
    powerup = createSprite(200,250,10,10);
    powerup.addImage("powerupImg");
    powerup.scale=0.1;
    powerup.y=Math.round(random(120,250));
    powerup.lifetime = 600/5;
    powerup.velocityX=-5;
    powerupGroup.add(powerup);
 }
function obstacle() 
 {
    obstacle = createSprite(570,300,10,10);
    obstacle.addImage("obstacleImg");
    obstacle.scale=0.1;
    obstacle.y =300;
    obstacle.lifetime = 600/5;
    obstacle.velocityX = -5;
    obstacleGroup.add(obstacle);
  }


