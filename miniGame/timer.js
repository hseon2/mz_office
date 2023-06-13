let startTimer = 5500;

function showTimer() {
  background(0);
  
  if (startTimer >= 0 ){
    startTimer -= deltaTime;
  } else {
    startTimer = 5500;
  }
  fill(255);
  textAlign(CENTER);
  textSize(30);
  text("5초 뒤 게임 시작!", width/2, height/2-150);
  textStyle(BOLD);
  textSize(300);
  text(round(startTimer / 1000), width / 2, height / 2 + 50);
}

function displayTimer(remainingTime) {
  stroke(0);
  strokeWeight(3);
  fill(0, 0, 255);
  circle(80, 80, 120);
  fill(255);
  noStroke();
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(18);
  text("Time", 80, 50);
  textSize(28);
  text(Math.ceil(remainingTime) + "초", 80, 90);
}