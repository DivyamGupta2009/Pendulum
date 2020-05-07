const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.constraint;

var engine, world;
var box;
var costrainedString;
function setup() {
  createCanvas(400,400);
engine = Engine.create();
world = engine.world;
box = createSprite(200, 200, 50, 30);
box.shapeColor = "red";
pendulum = new Pendulum(300, 200, 100, 100);
chain = new constrainedBody(box.body, pendulum.body);
}

function draw() {
background(255,255,255);

Engine.update(engine)

if (keyDown("space")){
  pendulum.body.position.y = mouseX;
  pendulum.body.position.y = mouseY;
}

pendulum.display();
string1.display();
chain.display();
drawSprites();
}