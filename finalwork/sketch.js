// 最終課題を制作しよう


let x, y, vx, vy, p, q 
const g = 0.7;
const vyMax = 30; 

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = 30;
  y = height / 2;
  vx = 5;
  vy = 5
  
  
}


function draw(){ 
  background(160, 192, 255);
  text("スペースキーを押してスタート！！", windowWidth / 2 - 50, 50)
  text("バーでボールを跳ね返そう！!", windowWidth / 2 - 50, 100)
  stroke(0, 0, 0)
  fill(225, 225, 225)
  rect(mouseX - 50, mouseY - 20, 100, 40);
  
  noFill(0) 
  stroke(0, 0, 0)
   
 if(keyIsDown(" ".charCodeAt(0))){

  p = random(20, windowWidth - 100)
  q = random(20, windowHeight - 100)
  x = 30;
  y = height / 2;
  vx = 5;
  vy = 5
 }
  rect( p, q, 100, 60)
  text("この四角をねらって！", p - 10, q - 10)
  
  stroke(255, 0, 0)
  fill(225, 225, 225)

  ellipse(x, y, 30)

  x += vx
  y += vy
  vy = constrain(vy + g, -vyMax, vyMax)

  if(x < 0 || x > width){ vx = -1 * vx; }
   x = constrain(x, 0, width);
  if(y < 0 || y > height){ vy = -1 * vy; }
  y = constrain(y, 0, height);

 if(y > mouseY - 45 && y < mouseY - 25){ 
  if(x > mouseX -50 && x < mouseX + 50 )
    vy = -1 * vy;
 }

 if(y > q + 55 && y < q + 60){
  if(x > p && x < p + 100){
  vy = -1 * vy}
  }

 if(y > q + 15 && y < q + 45){
  if(x > p + 15 && x < p + 85){
  vx = 0
  vy = 0
  stroke(255, 212, 0)
  fill(255, 212, 0)
  congratulation(windowWidth / 2, windowHeight / 2, random(100, 300))
  for(let i = 0; i < 7; i++){
    congratulation(random(50, windowWidth), random(50, windowHeight ), random(10, 50))
  }

      
  stroke(0, 0, 0)
  fill(0, 0, 0)
  text("おめでとう！大成功！！", windowWidth / 2 - 50, windowHeight / 2)
  text("スペースキーを押してもう一度挑戦してみよう!", windowWidth / 2 - 120, windowHeight / 2 + 15)
  
  
  }
 }
}

function congratulation(cx, cy, r){
  beginShape();    
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const t = cx + cos(theta) * r;
    const u = cy + sin(theta) * r;
    vertex(t, u); 
    
  }
  endShape(CLOSE); //
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
