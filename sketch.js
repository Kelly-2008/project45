var PLAY = 1;
//var END = 2;
var LEVEL1 = 3;
var gameState = "PLAY";

var play, playImg
var bg1, bg1img, ironMan, ironManImg, corvus, corvusImg;

function preload(){

    playImg = loadImage("Play.png");

    bg1img = loadImage("Titan.jpg");
    ironManImg = loadImage("Iron Man.png");
    corvusImg = loadImage("Corvus Glaive.png");

}

function setup(){
    createCanvas(1000,500);

    play = createSprite(500,400);
    play.addImage(playImg);
    play.scale = 0.7;

    bg1 = createSprite(500,250);
    bg1.addImage(bg1img);
    bg1.scale = 7.5;
    bg1.velocityX = -3;
    bg1.visible = false;

    ironMan = createSprite(870,250);
    ironMan.addImage(ironManImg);
    ironMan.scale = 1;
    ironMan.visible = false;

    corvus = createSprite(100,250);
    corvus.addImage(corvusImg);
    corvus.scale = 1.2;
    corvus.visible = false;
    

}

function draw() {
    background("beige");

    drawSprites();

    if(gameState === "PLAY"){

        fill(0,0,0);
        textSize(45);
        textStyle("bold");
        text("Avengers Run",350,50);
        text("_______________",310,50);

        fill(0,0,0);
        textSize(25);
        text("The year is 2030 and Thanos has taken over the Earth.",190,100);
        text("The Avengers had been forced to go into hiding for the last 10 years.",110,125);
        text("Now the time has come for the for the Earth's greatest warriors",140,150);
        text("to rise again and defeat Thanos once and for all",230,175);
        text("before he destroys Earth and all mankind.",265,200);
        text("But first we must help all the Avengers defeat", 230,225);
        text("a few of the members from Thanos' team.",265,250);
        text("Are you up for the challenge? if you are click",260,275);
        text("on the Avengers Symbol below to start. All the Best.",210,300);

        if (mousePressedOver(play)) {
            gameState = LEVEL1;
        }
        
    }else if (gameState === LEVEL1) {

        bg1.visible = true;
        ironMan.visible = true;
        corvus.visible = true;
        
        if (bg1.x < 0){
            bg1.x = bg1.width/2;
        }
    
        if (keyDown("Up")) {
            ironMan.y = ironMan.y -3;
        }
        
        if (keyDown("Down")) {
            ironMan.y = ironMan.y +3;
        }    
    }
}