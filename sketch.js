//set variables 
var wall1,wall2,wall3,wall4,wall5,wall6;
var wall7,wall8,wall9,wall10,wall11,wall12;
var ding,dong1,dong2,dong3,dong4,edges,Sound,count;

function preload()
{
   //load the sound
   Sound = loadSound("sound123.wav");
  
}

function setup() {
  //draw the screen
   createCanvas(400, 400);
  //create SpriteObjects for wall1 to wall12,dong-player,ding1-4(obstacles)
   wall1 = createSprite(190,120,250,3);
   wall2 = createSprite(190,260,250,3);
   wall3 = createSprite(67,145,3,50);
   wall4 = createSprite(67,235,3,50);
   wall5 = createSprite(313,145,3,50);
   wall6 = createSprite(313,235,3,50);
   wall7 = createSprite(41,170,50,3);
   wall8 = createSprite(41,210,50,3);
   wall9 = createSprite(337,210,50,3);
   wall10 = createSprite(337,170,50,3);
   wall11 = createSprite(18,190,3,40);
   wall12 = createSprite(361,190,3,40);
  
  //create player
  ding = createSprite(40,190,13,13);
  
  //create obstacles
  dong1 = createSprite(100,130,10,10);
  dong2 = createSprite(215,130,10,10);
  dong3 = createSprite(165,250,10,10);
  dong4 = createSprite(270,250,10,10);
  
  //Give color to ding,dong1-4
  ding.shapeColor = "green";
  dong1.shapeColor = "red";
  dong2.shapeColor = "red";
  dong3.shapeColor = "red";
  dong4.shapeColor = "red";
  
  //Move the obstacles
  dong1.velocityY = 8;
  dong2.velocityY = 8;
  dong3.velocityY = -8;
  dong4.velocityY = -8;
  
  //Set count as Zero to avoid random value generation
  count = 0;
  
  //play the sound 
  Sound.play();
}

function draw() {
  //clear the screen
  background(220);
  
  //set player Velocity x,y as 0 to avoid moving
  ding.velocityX=0;
  ding.velocityY=0;
  
  //display the defeat score
  text("Death : "+ count,250,100);
  
  //create Edges
  edges=createEdgeSprites();
  
  //make the obstacles bounceOff the wall 1 & 2
  dong1.bounceOff(wall1);
  dong1.bounceOff(wall2);
  dong2.bounceOff(wall1);
  dong2.bounceOff(wall2);
  dong3.bounceOff(wall1);
  dong3.bounceOff(wall2);
  dong4.bounceOff(wall1);
  dong4.bounceOff(wall2);
  //dong1.bounceOff(edges);
   
  //Move your player by pressing left & right key on the keyboard
  
  if(keyIsDown(LEFT_ARROW)){
      ding.velocityX = -2;
      ding.velocityY = 0;
    }
    
    if(keyIsDown(RIGHT_ARROW)){
      ding.velocityX = 2;
      ding.velocityY = 0;
    }
    
 //if player touches obstacles or start or end wall, set to orginal position
    
if(ding.isTouching(dong1)||ding.isTouching(dong2)||ding.isTouching(dong3)||ding.isTouching(dong4)||ding.isTouching(wall11)||ding.isTouching(wall12))
  {
    ding.x=40;
    ding.y=190;
    count=count+1;
  }
  //display the Sprite objects 
  drawSprites();
}