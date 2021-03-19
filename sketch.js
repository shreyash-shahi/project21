var bullet,wall;
var lBullet,lWall;
var weight , speed, thickness;

function setup() {
  createCanvas(1600,400);

   weight = random(30,52);   
   speed = random(223,321);
   thickness = random(22,83)

  bullet = createSprite(50, 200, 20, 20);
  bullet.shapeColor = "white",
  bullet.velocityX = speed;

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80) ;
}

function draw() {
  background("blue");

   if(hasCollided(bullet, wall)) {
     bullet.velocityX = 0;
     var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
      
      if(damage>10){
        bullet.shapeColor = "red";
      }
       
      if(damage<10){
        bullet.shapeColor = "green";
      }
   }
 
  
  drawSprites();
}

function hasCollided(lBullet, lWall){
  lBulletRightEdge = lBullet.x+lBullet.width/2;
  lWallLeftRdge = lWall.x;
    
     if(lBulletRightEdge>=lWallLeftRdge){
       return true;
     }
    return false; 
}