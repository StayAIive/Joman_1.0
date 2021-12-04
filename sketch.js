var bg,bgImg;
var bg2;
var joman,jomanImg;


function preload(){
    bgImg = loadImage("./assets/background.png");
    jomanImg = loadAnimation("./assets/Joman/animation.png","./assets/Joman/animation2.png","./assets/Joman/animation3.png","./assets/Joman/animation4.png");

}
function setup(){
    createCanvas(900,900);

    bg = createSprite(width,height/2,width,height);
    bg.addImage(bgImg);
    bg.scale = 0.85;
    bg.setVelocity(-5,0);

    bg2 = createSprite(bg.position.x + 900,height/2,width,height);
    bg2.addImage(bgImg);
    bg2.scale = 0.85;
    bg2.setVelocity(-5,0);

    joman = createSprite(300,height-250,1,1);
    joman.addAnimation("run",jomanImg);
    joman.scale = 0.5;

}
function draw(){
    background(0)

    if(bg.position.x <= -450){
        bg.position.x = bg2.position.x+900;
    }

    if(bg2.position.x <= -450){
        bg2.position.x = bg.position.x+900;
    }

    drawSprites();
}