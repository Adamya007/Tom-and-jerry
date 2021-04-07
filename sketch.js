var backImage;
var cat;
var mouse;     

function preload() {
    //load the images here
    backImage = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg4 = loadAnimation("images/mouse4.png");
    catImg4 = loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(750,700,10,10);
    mouse=createSprite(100,750,10,10);
    cat.addAnimation("cat",catImg1);
    mouse.addAnimation("mouse",mouseImg4);
    //create tom and jerry sprites here
    cat.scale=0.2;
    mouse.scale=0.1;
}

function draw() {

    background(backImage);

    //Write condition here to evalute if tom and jerry collide
    
    
    if(cat.x < 200) {
        cat.velocityX = 0;
        cat.addAnimation("cat4",catImg4);
        cat.changeAnimation("cat4");
        mouse.addAnimation("mouse4",mouseImg1);
        mouse.changeAnimation("mouse4");
    }

    drawSprites();
}


function keyPressed(){

    if (keyCode === LEFT_ARROW) {
        mouse.addAnimation("mouseTeasing",mouseImg2);
        mouse.changeAnimation ("mouseTeasing");
        mouse.frameDelay = 20;
    }
    if (keyCode === RIGHT_ARROW) {
        cat.addAnimation("catRunning",catImg2);
        cat.changeAnimation ("catRunning");
        cat.velocityX = -3;
    }
  //For moving and changing animation write code here

}
