const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mango1,mango2,mango3,mango4,mango5,mango6
var stoneObject
var tree
var boy
function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;
boy=  new boy(50,450,50,100)
mango1= new mango(200,450,30)
mango2= new mango(250,420,30)
mango3= new mango(220,400,30)
mango4= new mango(210,440,30)
mango5= new mango(230,410,30)
stoneObject= new stone(100,500,30)
tree= new Tree(225,360,50,100)
	Engine.run(engine);
   
  }
  
 
  
function draw() {
  background(0)
  rectMode(CENTER)
 drawSprites();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 stoneObject.display();
 tree.display();
 detectcollision(stoneObject,mango1);
 detectcollision(stoneObject,mango2);
 detectcollision(stoneObject,mango3);
 detectcollision(stoneObject,mango4);
 detectcollision(stoneObject,mango5);
 detectcollision(stoneObject,mango6);
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObject.body,{x:mouseX,y:mouseY})
  }
  
  function mouseReleased(){
    string.fly()
  }
  function detectcollision(Lstone,Lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}
  }
  function keyPressed(){
    if(keyCode==32){
      Matter.Body.setPosition(stoneObject.body,{x:235,y:420})
        string.attach(boy.body)
    }}