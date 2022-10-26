// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;

function setup(){
  createCanvas(windowWidth, windowHeight);
  count = 0;
  cycle = 100;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  size = count 
  fill(225,0,0)
  ellipse(width / 2, height / 2, size + 50);
  count = (count + 1) % cycle;
  if(keyIsDown(" ".charCodeAt(0)))
  {count = (count + 1.5) % cycle }                      
  // BLANK[1]
  stroke(0)
  text("my heart", width / 2 - 30, height / 2 - 50 )
  

}                       
         