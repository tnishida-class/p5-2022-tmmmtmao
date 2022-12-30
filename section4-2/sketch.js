//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;
let r;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
      ellipse(b.x, b.y, b.size); //baiis[i]のキー(x,y,size)で指定された円を書く
    b.x += b.vx; // 円の中心座標を動かす→円が動く、進んで見える
    b.y += b.vy;

  }
}

function mouseDragged(){
  const dx = mouseX - pmouseX;　// 少し前の座標との差を速度とすることで一定の速度で進む
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: r, vx: dx, vy: dy };
    r = random(20, 100) // ボールのサイズをランダムで指定する
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
