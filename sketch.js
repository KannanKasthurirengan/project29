const Engine =Matter.Engine;
const Woirld =Matter.World;
const Bodies =Matter.Bodies;
const Constraint  =Matter.Constraint;

var polygon,block1;
var Engine,World

function preload(){
polygon=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);

    //level 1
block1=new block1(300,275,30,40)
block2=new block2(360,275,30,40)
block3=new block3(390,275,30,40)
block4=new block4(420,275,30,40)
block5=new block5(450,275,30,40)
block6=new block6(480,275,30,40)
block7=new block7(510,275,30,40)
//level 2
block8=new Block(330,235,30,40)
block9=new Block(360,235,30,40)
block10=new Block(390,235,30,40)
block11=new Block(420,235,30,40)
block12=new Block(450,235,30,40)
//level 3
block13=new Block(360,195,30,40)
block14=new Block(390,195,30,40)
block15=new Block(420,195,30,40)
//top
block16=new Block(390,155,30,40)

polygon=new polygon(200,50)

slingshot=new slingshot(polygon.body,{x:200,y:50})
}
function draw(){
    Engine.update=(engine);
    strokeweight(4);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    polygon.display();
    slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}