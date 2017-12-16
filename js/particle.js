
window.onload = init;



//declare basic variable
var CANVAS_WIDTH = window.innerWidth,
    CANVAS_HEIGHT = window.innerHeight,
    NUM_OF_PARTICLES = 100,
    VELOCITY = 3,
    MIN_DIST = 300,
    RUBBERBAND_FORCE = 0.0001,
    particles = [];

//original particle object
function Particle(){
  this.radius = 2;
  this.x = Math.random() * (CANVAS_WIDTH - 2*this.radius) + this.radius; //x
  this.y = Math.random() * (CANVAS_HEIGHT- 2*this.radius) + this.radius; //y
  this.vx = Math.random() * VELOCITY; //velocity of x
  this.vy = Math.random() * VELOCITY; //velocity of y
  this.color = '#fff';

  // if you want more colorful particle-
  // this.color = 'rgb('+Math.floor(Math.random() * 255)+','
  //                    +Math.floor(Math.random() * 255)+','
  //                    +Math.floor(Math.random() * 255)+')'; //color
}

function DrawPaticle(context,particle){
  context.fillStyle = particle.color;
  context.beginPath();

  context.arc(particle.x, particle.y, particle.radius, 0, Math.PI*2, true);
  context.closePath();
  context.fill();01
}

function init(){
  var canvas = document.getElementById('myCanvas'),
      context = canvas.getContext('2d');
      canvas.width = CANVAS_WIDTH;
      canvas.height = CANVAS_HEIGHT;

  //make full screen canvas
  $(window).resize(function(event) {
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
  });

  for (var i = 0; i < NUM_OF_PARTICLES; i++) {
      particles[i] = new Particle();
      }

  setInterval(function(){
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    run(context);
  }, 10)
}

function run(context){
  var i, particle;
  for (var i = 0; i < NUM_OF_PARTICLES; i++) {
    particle = particles[i];
    DrawPaticle(context, particle);
    particle.x += particle.vx;
    particle.y += particle.vy;

    detectWall(particle);
  }
}

function detectWall(particle){
  var r = particle.radius;
  if(particle.x < 0+r || particle.x > CANVAS_WIDTH-r){
    particle.vx *= -1;
  }
  if(particle.y < 0+r || particle.y > CANVAS_HEIGHT-r){
    particle.vy *= -1;
  }

}





// draw circle
// function drawCircle(){

  var circle = document.getElementById("circle");
  context = circle.getContext("2d");
  // circle.width = 400;
  // circle.height = 400;
  context.beginPath();
  context.lineWidth = 1;
  context.strokeStyle = "#e1e1e1";
  context.arc(100,100,100,0,Math.PI*2,true);
  context.stroke();


  // }
