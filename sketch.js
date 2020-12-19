
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ball,ballI,ground,bin;
var box1,box2,box3,world;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	bin = new Box(1200,650)
	//Create the Bodies Here.
	box1 = new Box(1060,450,200,20);
	box2 = new Box(1160,450,20,250);
	box3 = new Box(960,450,20,250)
	ball = new PaperB(200,450,40);
	
	ground = new Ground(width/2,670,width,20);
	Engine.run(engine);
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		 width:1200,
		 height:700,
		 wireframes:false
		}

	});

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
	Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-80})
    //Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:80})
}


}
