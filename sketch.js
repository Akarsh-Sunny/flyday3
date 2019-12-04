var boy,ball;
var gameState;
var ground;
function preload(){
boyimage=loadImage("iamakarsh.png");
ballimage=loadImage("bomb.png");
boy1image=loadImage("b.png");
}
function setup() {
  createCanvas(1200,600);


gameState="play";
 boy= createSprite(600,300);
boy.addImage("boy",boyimage);
ballgroup=createGroup();
ball1group=createGroup();
ball2group=createGroup();
ground=createSprite(600,580,1200,1);
ground.visible=false;
boy.debug=true;
score=0;
boy.setCollider("rectangle",0,0,50,80);
}

function draw() {
  background(0, 173, 188); 
//reateEdgeSprites();
text("Score:"+score,50,50);
console.log(gameState);
if(gameState==="play"){
  score+=Math.round(setFrameRate()/60);
//boy.velocityY=10; 
if(keyDown==="left"){
  boy.velocityX=-1;
}
if(keyDown==="right"){
  boy.velocityX=+1;
}
if(keyDown==="space"){
  boy.velocityY=-2;
}
if(keyDown==="down"){
  boy.velocityY=+2;
}
if(ballgroup.isTouching(boy)||ball1group.isTouching(boy)||ball2group.isTouching(boy)||boy.isTouching(ground)){
gameState="end";
}
spawnball();
  }
if(gameState==="end"){
  boy.setVelocity(0,0);
  ballgroup.setVelocityYEach(0);
  ball1group.setVelocityYEach(0);
  ball2group.setVelocityYEach(0); 
  ballgroup.setLifetimeEach(-1);
  ball1group.setLifetimeEach(-1);
  ball2group.setLifetimeEach(-1);
}
//boy.collide(bottomEdge);

  drawSprites();
}
function spawnball(){
if(World.frameCount%60===0){
  ball=createSprite(0,0);
var rand=Math.round(random(10,400));
var rand2=Math.round(random(420,800));
var rand3=Math.round(random(820,1180));
ball.x=rand;
ball1=createSprite(420,0);
ball1.x=rand2;
ball2=createSprite(820,0);
ball2.x=rand3;
ball.velocityY=4;
ball1.velocityY=6;
ball2.velocityY=2;
ball.addImage("ball",ballimage);
ball1.addImage("ball",ballimage);
ball2.addImage("ball",ballimage);
ballgroup.add(ball);
ball1group.add(ball1);
ball2group.add(ball2);
}
}
