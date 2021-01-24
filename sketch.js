const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var box1,box2,box3,box4,box5
var engine, world;
var polimg
var sling
var ball;

function preload() {
 
}

function setup(){
    var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;
    
  box1 = new box(600, 260, 30, 40);
  box2 = new box(570, 260, 30, 40);
  box3 = new box(540, 260, 30, 40);
  box4 = new box(630, 260, 30, 40);
  box5 = new box(660, 260, 30, 40);
  
  box6 = new box(585, 220, 30, 40);
  box7 = new box(555, 220, 30, 40);
  box8 = new box(615, 220, 30, 40);
  box9 = new box(645, 220, 30, 40);


  box10 = new box(600, 170, 30, 40);
 fill("orange")
  box11 = new box(570, 180, 30, 40);
  //box11=fill("red")
  box12 = new box(630, 180, 30, 40);


  box13 = new box(600, 140, 30, 40);

  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900, 195, 200, 10);
  ground3 = new Ground(750, 600, 1500, 20);


  box14 = new box(900, 170, 30, 40);
  box15 = new box(930, 170, 30, 40);
  box16 = new box(870, 170, 30, 40);
  box17 = new box(840, 170, 30, 40);
  box18 = new box(960, 170, 30, 40);


  box19 = new box(900, 140, 30, 40);
  box20 = new box(930, 140, 30, 40);
  box21 = new box(870, 140, 30, 40);
  box22 = new box(900, 110, 30, 40);

  polimg = Bodies.circle(50, 200, 20);
  World.add(world, polimg);

}
  

function draw(){
  background("black")
    Engine.update(engine);
    
    
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()
    box21.display()
    box22.display()
    ground1.display()
    ground2.display()
    ground3.display()
       
    //polimg.display()
    //imageMode(CENTER);
    //image(polimg, ball.position.x, ball.position.y, 50, 45);

    //sling.display()    




}

