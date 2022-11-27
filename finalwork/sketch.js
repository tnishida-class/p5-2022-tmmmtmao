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
  stroke(0, 0, 0)
  fill(225, 225, 225)
  rect(mouseX - 50, mouseY - 20, 100, 40);
  
  noFill(0)
  stroke(0, 0, 0)
  rect(4 * windowWidth / 5, windowHeight / 5, 100, 60)
  
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

 if(y > windowHeight / 5 + 55 && y < windowHeight / 5 + 60){
  if(x > 4 * windowWidth / 5 && x < 4 * windowWidth / 5 + 100){
  vy = -1 * vy}
  }

 if(y > windowHeight / 5 && y < windowHeight / 5 + 60){
  if(x > 4 * windowWidth / 5 && x < 4 * windowWidth / 5 + 100){
  vx = 0
  vy = 0
  stroke(0, 0, 0)
  fill(0, 0, 0)
  
  text("おめでとう！大成功！！", windowWidth / 2 - 50, windowHeight / 2)
  text("リセットボタンを押してもう一度挑戦してみよう!", windowWidth / 2 - 120, windowHeight / 2 + 15)
  
 }

}
}



  



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
