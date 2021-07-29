var garden,rabbit;
var gardenImg,rabbitImg;
var appImg,leafImg;
var apple,leaf;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appImg = loadImage("apple.png");
  leafImg = loadImage("orangeleaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

//creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges = createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;
  createApples();
  createLeaves();

  drawSprites();
  textSize(15);
}

function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appImg);
  apple.scale = 0.1;
  apple.velocityY = 3;
  apple.lifetime = 150;
}

function createLeaves(){
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.scale = 0.1;
  leaf.velocityY = 3;
  leaf.lifetime = 150;
}


var select_sprites = Math.random(1,2);

if(frameCount % 80 === 0){
  if(select_sprites == 1){
    createApples();
  }
  else{
    createLeaves();
  }
}

