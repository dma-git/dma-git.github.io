var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var ballx= 300;
var bally= 300;
var ballSize= 40;
var score = 0;
var gameState = "L1";

function preload() {
  img= loadImage("https://beatrizayon.github.io/introfarmer.jpg");
  img2=loadImage("https://beatrizayon.github.io/strawberry.png");
  img3=loadImage("https://beatrizayon.github.io/apple.png");
  img4=loadImage("https://beatrizayon.github.io/orange.png");
  img5=loadImage("https://beatrizayon.github.io/carrot.png");
  img6=loadImage("https://beatrizayon.github.io/endfarmer.jpg");
  img7=loadImage("https://beatrizayon.github.io/sky.jpg");
}//end preload

function setup() {
  createCanvas(600,600);
  background(img);
  textAlign(CENTER);
  textSize(20);
}//end of setup

function draw(){

if(gameState == "L1"){
  levelOne();
}
if(gameState =="L1.5"){
  levelHalf();
}
if(gameState == "L2"){
  levelTwo();
}
if(gameState == "L3"){
  levelThree();
}
if(gameState == "win"){
  winGame();
}
fill(166,1,2);
  text(("Fruits Collected: " + score),width/2,40);
  
  text(("tip: hover top left corner"), width/2, 60);

}//end of draw

function levelOne(){
  background(img);
  text("Level 1 - Strawberry Season", width/2, height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
      ballx= random(width)
      bally= random(height)
      score = score + 1;
  }
  if(score>= 1){
  gameState = "L1.5";
  }
  image(img2,ballx,bally,ballSize+20,ballSize+20);
  line(ballx,bally,mouseX,mouseY);


}//end of level 1

function levelHalf(){
  background(img7)
  text("Level 1 - Strawberry Season", width/2, height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
      ballx= random(width)
      bally= random(height)
      score = score + 1;
  }
  if(score>= 15){
  gameState = "L2";
  }
  image(img2,ballx,bally,ballSize+10,ballSize+10);
  line(ballx,bally,mouseX,mouseY);

}//end of level 1/2

function levelTwo(){
  background(img7)
  text("Level 2 - Apple Season", width/2, height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
      ballx= random(width)
      bally= random(height)
      score = score + 1;
  }
  if(score>= 30){
    gameState= "L3";
  }
  image(img3,ballx,bally,ballSize,ballSize);
  //line(ballx,bally,mouseX,mouseY);


}//end of level 2

function levelThree(){
  background(img7)
  text("Level 3 - Orange Season", width/2, height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
      ballx= random(width)
      bally= random(height)
      score = score + 1;
      ballSize= ballSize - 1;
  }
  if(score>= 50){
    gameState= "win";
      }
  image(img4,ballx,bally,ballSize,ballSize);
  //line(ballx,bally,mouseX,mouseY);


}//end of level 3
function winGame(){
  background(img6);
  textSize(20);
  textAlign(CENTER);
  text("CONGRATS! YOU'VE COLLECTED ALL THE FRUITS!", width/2, height-74);
    fill(255);
}//end win Game
