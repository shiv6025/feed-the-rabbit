var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
function createApple(){
apple=createSprite(random(50,350)40,10,10);
var select_sprites=Math.round(random(1,2));

if (framecount%80==0) {
 if (select_sprites==1) {
 //call create apple function
 createApple();
 //call create leaves function
 createleaves();  
 } 
}



}
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}


