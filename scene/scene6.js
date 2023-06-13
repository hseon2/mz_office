// 에어팟 게임
function airpodsOpening() {
  background(0);
  fill(255);
  textSize(50);
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(30);
  text(
    "에어팟을 끼고 있어 내가 옆에 온 것조차 모르는 동료, \n그가 내 목소리를 들을 수 있게 큰 소리로 불러보자!",
    width/2,
    height/2-130
  );

  textSize(50);
  fill(255,100,100);
  text(
    "\n\n115 데시벨을 넘겨서 에어팟을 빼도록 하면 성공! ",
    width/2,
    height/2-130
  );

  fill(0);

  showStartButton();
  startButton.position(
    width / 2 - startButton.width / 2,
    height *3/ 5
  );
}

