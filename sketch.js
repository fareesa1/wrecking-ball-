const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(750,550,100,80);
    box2 = new Box(950,550,100,80);
    box3 = new Box (950, 500,100,80);
    box4 = new Box (750,500,100,80);
    box5 = new Box (850,450,100,80);
    box6 = new Box (950,450,100,80);
    box7 = new Box (750,450,100,80);
    ground = new Ground(600,height,1200,20)
    Pig1=new Pig (850,550,100,80);
    pig2= new Pig (850,500,100, 80);
   
   
    box8 = new Box(750,400,100,80);
    box9 = new Box(950,400,100,80);
     box10 = new Box (950, 350,100,80);
    box11 = new Box (750,350,100,80);
    box12 = new Box (850,350,100,80);
     box13 = new Box (950,300,100,80);
     box14= new Box (750,300,100,80);
     box15= new Box (850,200,100,80);

 
    pig4= new Pig (850,300,100, 80);
   b1  = new Bob(400,300,130)
    rope = new Rope(b1.body,{x:350,y:100})
}


function draw(){
    background("skyblue");
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display ();
    box4.display ();
    box5.display ();
    box6.display ();
    box7.display ();
    box8.display ();
    box9.display ();
     box10.display ();
     box11.display ();
     box12.display ();
     box13.display ();
     box14.display ();
     box15.display ();
    b1.display()
    rope.display()
   ground.display();
     Pig1.display();
     pig2.display ();
  
     pig4.display ();
   
}

function mouseDragged (){
  Matter.Body.setPosition(b1.body, {x:mouseX,y:mouseY})
}