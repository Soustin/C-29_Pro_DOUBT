const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(590, 350, 280, 9);
    ground2 = new Ground(1000, 200, 250, 9);
    
    box1 = new Box(500, 320, 30, 50);
    box2 = new Box(530, 320, 30, 50);
    box3 = new Box(560, 320, 30, 50);
    box4 = new Box(590, 320, 30, 50);
    box5 = new Box(620, 320, 30, 50);
    box6 = new Box(650, 320, 30, 50);
    box7 = new Box(680, 320, 30, 50);
    
    box8 = new Box(515, 270, 30, 50);
    box9 = new Box(545, 270, 30, 50);
    box10 = new Box(575, 270, 30, 50);
    box11 = new Box(605, 270, 30, 50);
    box12 = new Box(635, 270, 30, 50);
    box13 = new Box(665, 270, 30, 50);

    box14 = new Box(530, 220, 30, 50);
    box15 = new Box(560, 220, 30, 50);
    box16 = new Box(590, 220, 30, 50);
    box17 = new Box(620, 220, 30, 50);
    box18 = new Box(650, 220, 30, 50);

    box19 = new Box(545, 170, 30, 50);
    box20 = new Box(575, 170, 30, 50);
    box21 = new Box(605, 170, 30, 50);
    box22 = new Box(635, 170, 30, 50);

    box23 = new Box(560, 120, 30, 50);
    box24 = new Box(590, 120, 30, 50);
    box25 = new Box(620, 120, 30, 50);

    box26 = new Box(575, 70, 30, 50);
    box27 = new Box(605, 70, 30, 50);

    box28 = new Box(590, 20, 30, 50);

    polygon = new Polygon(200, 225, 50, 50);
    slingshot = new SlingShot(polygon.body,{x:195, y:230})

}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    ground2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();

    polygon.display();
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX, y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}