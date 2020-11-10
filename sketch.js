
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,tree1,mango1;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground1=new Ground(500,480,1000,20);
   tree1=new Tree (800,470,400,500);
   mango1=new Mango(500,200,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(166,173,173);
  Engine.update(engine);
  ground1.display();
  tree1.display();
  mango1.display();
  drawSprites();
 
}



