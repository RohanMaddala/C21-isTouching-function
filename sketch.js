var fixedRect,movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() { 
  createCanvas(800,600);
  fixedRect=createSprite(400,300, 50, 80);
  movingRect=createSprite(500, 200, 80, 50);
  gameObject1=createSprite(100,100,50,50);
  gameObject2=createSprite(200,100,50,50);
  gameObject3=createSprite(300,100,50,50);
  gameObject4=createSprite(400,100,50,50);

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  gameObject1.shapeColor="green";
  gameObject2.shapeColor="green";
  gameObject3.shapeColor="green";
  gameObject4.shapeColor="green";

  movingRect.debug=true;
  fixedRect.debug=true;


}

function draw() {
  background("black");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

 if(isTouching(movingRect,gameObject1)===true){
  gameObject1.shapeColor="red";
  movingRect.shapeColor="red";
 }
 else{
  gameObject1.shapeColor="green";
  movingRect.shapeColor="green";
 }
  
  drawSprites();
}

