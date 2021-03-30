
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5
var roofObject
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,150,500,50) 
	roof.shapeColo
	ball1 = new Bob(400,350,35) 
	ball2 = new Bob(470,350,35) 
	ball3 = new Bob(540,350,35) 
	ball4 = new Bob(330,350,35) 
	ball5 = new Bob(260,350,35) 
	rope1 = new Rope(ball1.body,{x: 400, y:150}) 
	rope2 = new Rope(ball2.body,{x: 470, y:150}) 
	rope3 = new Rope(ball3.body,{x: 540, y:150}) 
	rope4 = new Rope(ball4.body,{x: 330, y:150}) 
	rope5 = new Rope(ball5.body,{x: 260, y:150})
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display()
  ball1.display
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
 
 
}





