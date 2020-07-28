const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13


var boxx1,boxx2,boxx3,boxx4,boxx5,boxx6,boxx7,boxx8,boxx9,boxx10,boxx11,boxx12,boxx13,boxx1
var boxx15,boxx16,boxx17,boxx18,boxx19,boxx20,boxx21,boxx22,boxx23,boxx24,boxx25,boxx26,boxx27,boxx28;

var boox1,boox2,boox3,boox4,boox5,boox6,boox7,boox8,boox9,boox10,boox11,boox12,boox13,boox14
var boox15,boox16,boox17,boox18,boox19,boox20,boox21,boox22,boox23,boox24,boox25,boox26,boox27,boox28;

var base1, base2 , base3 , mbase;

var sling , polygon;


function setup() {
	createCanvas(1530, 750);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	//Pyramid 1#
	
	//level1
	box1 = new Box (420,680,30,50);
	box2 = new Box (450,680,30,50);
	box3 = new Box (480,680,30,50);
	box4 = new Box (510,680,30,50);
	box5 = new Box (540,680,30,50);
	box6 = new Box (570,680,30,50);
	
	//level2
	box7 = new Box (450,620,30,50);
	box8 = new Box (480,620,30,50);
	box9 = new Box (510,620,30,50);
	box10 = new Box (540,620,30,50);
	
	//level3
	box11 = new Box (480,560,30,50);
	box12 = new Box (510,560,30,50);
	
	//level4
	box13 = new Box (495,500,30,50);
	
	//Pyramid 2#

	//level1
	
	boxx1 = new Box (830,500,30,50);
	boxx2 = new Box (860,500,30,50);
	boxx3 = new Box (890,500,30,50);
	boxx4 = new Box (920,500,30,50);
	boxx5 = new Box (950,500,30,50);
	boxx6 = new Box (980,500,30,50);

	//level2
	boxx7 = new Box (850,440,30,50);
	boxx8 = new Box (880,440,30,50);
	boxx9 = new Box (910,440,30,50);
	boxx10 = new Box (940,440,30,50);

	//level3
	boxx11 = new Box (880,380,30,50);
	boxx12 = new Box (910,380,30,50);

	//level4
	boxx13 = new Box (895,320,30,50);
	

	//Pyramid 3#

	//level1
	boox1 = new Box (1180,320,30,50);
	boox2 = new Box (1210,320,30,50);
	boox3 = new Box (1240,320,30,50);
	boox4 = new Box (1270,320,30,50);
	boox5 = new Box (1300,320,30,50);
	boox6 = new Box (1330,320,30,50);

	//level2
	boox7 = new Box (1210,260,30,50);
	boox8 = new Box (1240,260,30,50);
	boox9 = new Box (1270,260,30,50);
	boox10 = new Box (1300,260,30,50);

	//level3
	boox11 = new Box (1240,200,30,50);
	boox12 = new Box (1270,200,30,50);

	//level4
	boox13 = new Box (1255,140,30,50);

	//polygon
	polygon = new Polygon(100,100,50);

	//sling
	sling = new String(polygon.body,{x: 200,y: 200})

	//base and ground
	base1 = new Ground(1265,330,300,30);
	base2 = new Ground(900,510,300,30);
	base3 = new Ground(500,690,300,30);
	mbase = new Ground(765,745,1530,20);
	
	
	Engine.run(engine);
	
  
}


function draw() {
	rectMode(CENTER);
	background(0);

	//# Pyramid 1
	//level1
	fill("red");
	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();

	//level2
	fill("green");
	box7.display();
	box8.display();
	box9.display();
	box10.display();

	//level3
	fill("yellow");
	box11.display();
	box12.display();

	//level4
	fill(242, 107, 4);
	box13.display();

	
	//# Pyramid 2
	//level1
	fill("red");
	boxx1.display();
	boxx2.display();
	boxx3.display();
	boxx4.display();
	boxx5.display();
	boxx6.display();

	//level2
	fill("green");
	boxx7.display();
	boxx8.display();
	boxx9.display();
	boxx10.display();

	//level3
	fill("yellow");
	boxx11.display();
	boxx12.display();

	//level4
	fill(242, 107, 4);
	boxx13.display();
	

	//# Pyramid 3
	//level1
	fill("red");
	boox1.display();
	boox2.display();
	boox3.display();
	boox4.display();
	boox5.display();
	boox6.display();


	//level2
	fill("green");
	boox7.display();
	boox8.display();
	boox9.display();
	boox10.display();


	//level3
	fill("yellow");
	boox11.display();
	boox12.display();


	//level4
	fill(242, 107, 4);
	boox13.display();
	

	//base and ground
	base1.display();
	base2.display();
	base3.display();
	mbase.display();


	fill("blue");
	textSize(40);
	stroke(5);
	text("TOWER SEIGE 2",300,100);

	fill(244, 12, 194);
	polygon.display();

	fill("yellow");
	textSize(30);
	text("Drag the polygon and release to hit the blocks ",800,650);
	text("Hit the space bar to get a second chance ",800,680);
}


function keyPressed(){
	if(keyCode === 32){
		sling.attach(polygon.body);
	}
}


function mouseDragged(){
    
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    sling.fly();
}

