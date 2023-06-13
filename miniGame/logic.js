function keyPressed() {
  if (miniGame === 1) {
    remainingTime = 5000;
    if (stage == 2) {
      if (keyCode == 72) {
        // h를 눌렀을 때 (ctrl+h는 한 번에 바꾸기)
        timer = 0;
        stage = 3;
        score += 5;
      } else {
        stage = 3;
      }
    } else if (stage == 3) {
      // d을 눌렀을 때 (ctrl+d은 아래쪽 채우기)
      if (keyCode == 68) {
        timer = 0;
        stage = 4;
        score += 5;
      } else {
        stage = 4;
      }
    } else if (stage == 4) {
      if (keyCode == 82) {
        // r를 눌렀을 때 (ctrl + r은 우측 자동 채우기)
        timer = 0;
        stage = 5;
        score += 5;
      } else {
        stage = 5;
      }
    } else if (stage == 5) {
      if (keyCode == 70) {
        // f를 눌렀을 때 (ctrl + f은 찾기)
        timer = 0;
        stage = 6;
        score += 5;
      } else {
        stage = 6;
      }
    } else if (stage == 6) {
      if (keyCode == 65) {
        // a를 눌렀을 때 (ctrl + a는 전체 선택)
        timer = 0;
        stage = 7;
        score += 5;
      } else {
        stage = 7;
      }
    }
  } else if (miniGame === 3) {
    if (keyCode == 65) {
      keys.a = true;
      mySound.play();
    }
    if (keyCode == 83) {
      keys.s = true;
      mySound.play();
    }

    if (keyCode == 68) {
      keys.d = true;
      mySound.play();
    }

    if (keyCode == 70) {
      keys.f = true;
      mySound.play();
    }
  } else if (miniGame === 4) {
    if (key === " ") {
      isSpacebarPressed = true;
    }
  }
}

function keyReleased() {
  if (miniGame === 3) {
    if (keyCode == 65) {
      keys.a = false;
    }

    if (keyCode == 83) {
      keys.s = false;
    }

    if (keyCode == 68) {
      keys.d = false;
    }

    if (keyCode == 70) {
      keys.f = false;
    }
  } else if (miniGame === 4) {
    if (key === " ") {
      if (miniGame === 4) {
        isSpacebarPressed = false;
        paying = map(arrowAngle, 270, 450, 0, 20);
        money = int(paying);
      }
    }
  }
}


