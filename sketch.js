var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = null;
var plinkos = [];
var divisions = [];
var points = [];

var divisionHeight=300;
var score = 0;
var turns = 5;

var gameState;

var pn1, pn2, pn3, pn4, pn5, pn6, pn7, pn8, pn9, pn10;

function setup() {
  gameState = "play";
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  pn1 = Math.round(random(1,10));
  pn1 = pn1*50;
  pn2 = Math.round(random(1,10));
  pn2 = pn2*50;
  pn3 = Math.round(random(1,10));
  pn3 = pn3*50;
  pn4 = Math.round(random(1,10));
  pn4 = pn4*50;
  pn5 = Math.round(random(1,10));
  pn5 = pn5*50;
  pn6 = Math.round(random(1,10));
  pn6 = pn6*50;
  pn7 = Math.round(random(1,10));
  pn7 = pn7*50;
  pn8 = Math.round(random(1,10));
  pn8 = pn8*50;
  pn9 = Math.round(random(1,10));
  pn9 = pn9*50;
  pn10 = Math.round(random(1,10));
  pn10 = pn10*50;
  


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/4, 10, divisionHeight));
   }


   //creates plinkos
    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 25; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 25; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  if(gameState==="end"){
    push();
    strokeWeight(1);
    stroke("red")
    textSize(60);
    fill("black")
    text("GAME OVER",200,250);
    textSize(50);
    stroke("yellow")
    text("Press Space Key to Restart",100,340)
    pop();
  }

  textSize(26)
  text("Score: "+score,20,30);
  text("Turns: "+turns,700,30);
  text(pn1,20,600);
  text(pn2,100,600);
  text(pn3,180,600);
  text(pn4,260,600);
  text(pn5,340,600);
  text(pn6,420,600);
  text(pn7,500,600);
  text(pn8,580,600);
  text(pn9,660,600);
  text(pn10,740,600);
  Engine.update(engine);
 
  //displays plinko
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 


   if(particles!=null)
   {
     particles.display();
     
    if(particles.body.position.y > 600){
      if(particles.body.position.x<divisions[1].body.position.x){
        score = score + pn1;
      }

      if(particles.body.position.x<divisions[2].body.position.x  &&  particles.body.position.x>divisions[1].body.position.x){
        score = score + pn2;
      }

      if(particles.body.position.x<divisions[3].body.position.x  &&  particles.body.position.x>divisions[2].body.position.x){
        score = score + pn3;
      }

      if(particles.body.position.x<divisions[4].body.position.x  &&  particles.body.position.x>divisions[3].body.position.x){
        score = score + pn4;
      }

      if(particles.body.position.x<divisions[5].body.position.x  &&  particles.body.position.x>divisions[4].body.position.x){
        score = score + pn5;
      }

      if(particles.body.position.x<divisions[6].body.position.x  &&  particles.body.position.x>divisions[5].body.position.x){
        score = score + pn6;
      }

      if(particles.body.position.x<divisions[7].body.position.x  &&  particles.body.position.x>divisions[6].body.position.x){
        score = score + pn7;
      }

      if(particles.body.position.x<divisions[8].body.position.x  &&  particles.body.position.x>divisions[7].body.position.x){
        score = score + pn8;
      }

      if(particles.body.position.x<divisions[9].body.position.x  &&  particles.body.position.x>divisions[8].body.position.x){
        score = score + pn9;
      }

      if(particles.body.position.x<divisions[10].body.position.x  &&  particles.body.position.x>divisions[9].body.position.x){
        score = score + pn10;
      }

      particles = null;
      if(turns === 0){
        gameState = "end";
      }
     }
   }



   //displays divisions
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   ground.display();
}



function mousePressed(){
  if(gameState!== "end" && turns !== 0 && particles === null){
    turns--;
    particles = new Particle(mouseX, 10, 10, 10);
  }
}

function keyPressed(){
  if(keyCode===32)
  {
    score=0;
    turns=5;
    gameState="play";
    pn1 = Math.round(random(1,10));
    pn1 = pn1*50;
    pn2 = Math.round(random(1,10));
    pn2 = pn2*50;
    pn3 = Math.round(random(1,10));
    pn3 = pn3*50;
    pn4 = Math.round(random(1,10));
    pn4 = pn4*50;
    pn5 = Math.round(random(1,10));
    pn5 = pn5*50;
    pn6 = Math.round(random(1,10));
    pn6 = pn6*50;
    pn7 = Math.round(random(1,10));
    pn7 = pn7*50;
    pn8 = Math.round(random(1,10));
    pn8 = pn8*50;
    pn9 = Math.round(random(1,10));
    pn9 = pn9*50;
    pn10 = Math.round(random(1,10));
    pn10 = pn10*50;
  }
}

