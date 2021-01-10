
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var Paper1,block1,block2,block3;
var ground;


function preload(){
	binImage=loadImage("images/dustbingreen.png");
	paper1Image=loadImage("images/image.png");


}

function setup() {
	createCanvas(1600, 500);
	engine = Engine.create();
	world = engine.world;
	


	


	//Create the Bodies Here.
	 
	bin = createSprite(1200,390,20,20);
	bin.addImage(binImage);
	bin.scale=0.55;

	

	


	Paper1 = new Paper(300,300,40);
	ground = new Ground(800,485,1600,20);
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	})
	Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  Engine.update(engine)

  Paper1.display();
  ground.display();
  
  drawSprites();

  function keyPressed(){
	if(keyCode === UP_ARROW ){
	Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:85,y:-85});
	
	  
  }
 
}

}


