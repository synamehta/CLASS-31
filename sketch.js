//data types 
// 1) string
var string="syna";
console.log(string);
// 2) number
var number=24;
console.log(number);
// 3) boolean
var boolean=true;
console.log(boolean);
// 4) undefined 
var abc
console.log(abc);
// 5) null
var cba=null;
console.log(cba);
// 6) array
var a=[2,28,5]
console.log(a);

//      0,1, 2,    3     4,    5
var a1=[2,5,"abcd",false,string];
console.log(a1);
console.log(a1[4]);
console.log(a1.length);

//counting 0 for index, length starts from 1...
var a2=[2,[28,5,"abcd"],false,[string,"garima"]];
console.log(a2);
console.log(a2.length);
console.log(a2[3]);
console.log(a2[3][1]);
console.log(a2[1][2]);
a2.push(29);
console.log(a2);
console.log(a2.length);
a2.push(["a","b"]);
console.log(a2);
console.log(a2.length);
console.log(a2[5][0]);
//delete last no only.
a2.pop();
console.log(a2);
console.log(a2.length);



const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var box2;
var tom;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    tom=new CONSTRAINT(bird.body,{x:200,y:50});

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();

    tom.display();
}

function keyPressed(){
    if(keyCode===32){
        tom.attach(bird.body);

    }
}


function mouseDragged(){
    Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    tom.fly();
}
