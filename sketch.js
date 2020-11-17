const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const body=Matter.body;
const Constraint = Matter.Constraint;
var roof;
var slingshot, slingshot2, slingshot3, slingshot4,ball1,ball2,ball3,ball4;

function setup() {
	createCanvas(800, 700);
  ball1diameter=40;

	engine = Engine.create();
	world = engine.world;
  ball1=new paper(250,250,10);
	
	roof=new Roof(400,350,50,50);
slingShot = new Rope(ball1.body,roof.body,-ball1diameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  slingShot.display();
 // slingshot2.display();
  //slingshot3.display();
  //slingshot4.display();
  ball1.display();
  //ball2.display();
  //ball3.display();
  //ball4.display();
  
  drawSprites();
 
}



