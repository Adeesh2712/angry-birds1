const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;

function setup(){
    var canvas = createCanvas(1500,680);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,650,60,60);
    box2 = new Box(1200,650,60,60);
    box3 = new Box(1000,555,60,60);
    box4 = new Box(1200,555,60,60);
    box5 = new Box(1100,550,60,60);

    ground = new Ground(750,height,1580,20)

    pig1 = new pig(1100,600)
    pig2 = new pig(1100,650)

    log1 = new log(1100,600,300,PI/2)
    log2 = new log(1100,550,300,PI/2)
    log3 = new log(1050,60,130,PI/4)
    log4 = new log(1150,60,130,-PI/4)

    bird1 = new bird(500,200)


}

function draw(){
    background(0);
    Engine.update(engine);

    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    
    ground.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    pig1.display();
    pig2.display();

    bird1.display();
}