
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;
var box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(660,450,200,20);
	box2 = new Box(760,450,20,100);
	box3 = new Box(560,450,20,100)
	ball = new PaperB(80,350,40);
	ground = new Ground(400,680,800,10);
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0); 
  ball.display();
  ground.display(); 
  box1.display(); 
  box2.display();
  box3.display();
  KeyPressed(); 
  drawSprites();

}

function KeyPressed(){

	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:5,y:-5})
    
}


}
