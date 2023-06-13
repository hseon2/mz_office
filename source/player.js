class Player {
  constructor(name) {
    this.name = name;
    this.stat_list = {
      체력: 100,
      정신: 30,
      능력: 30,
      인간관계: 30,
      금전: 30,
    };
    this.min_stat = 0;
    this.max_stat = 100;
  }

  changeStat(stat, number) {
    if (stat in this.stat_list) {
      this.stat_list[stat] += number;
      this.stat_list[stat] = constrain(
        this.stat_list[stat],
        this.min_stat,
        this.max_stat
      );
    } else {
      console.log("스텟 이름을 확인해주세요");
    }
  }
}

class Dialogue {
  constructor(contents, speaker) {
    this.contents = contents;
    this.speaker = speaker;
  }

  create() {
    let displayText = this.contents.substring(0, textCounter);

    dialogueTimer += deltaTime;
    isInConversation = true;
    loop();

    fill(0);
    rect(10, (height * 2) / 3 + 60, width-20, height / 3 - 25);
    fill(255);
    textSize(22);
    textStyle(NORMAL);
    textAlign(LEFT, TOP);
    text("[" + this.speaker + "]", 50, (height * 2) / 3 + 80);

    if (dialogueTimer >= 500) {
      textCounter++;
      fill(255);
      textSize(28);
      textAlign(LEFT, CENTER);
      text(displayText, width / 7, (height * 5) / 6 + 30);

      if (textCounter > this.contents.length) {
        isInConversation = false;
        noLoop();
      }
    }
  }
  showName() {
    textSize(22);
    textAlign(LEFT, TOP);
    text("[" + this.speaker + "]", 50, (height * 2) / 3 + 80);
  }
}

class Alert {
  constructor(contents) {
    this.contents = contents;
  }

  create() {
    fill(255);
    rectMode(CENTER);
    stroke(0);
    rect(width / 2, height / 2, (width * 2) / 5, height / 3);
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(this.contents, width / 2, height / 2);
    showAlertCloseButton();
    rectMode(CORNER);
  }
}

class SelectionModal {
  constructor(indicator) {
    this.indicator = indicator;
  }

  create() {
    rectMode(CENTER);
    fill(255);
    stroke(0);
    strokeWeight(2);
    rect(width / 2, height / 2, (width * 2) / 5, (height * 2) / 5);
    strokeWeight(1);
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(this.indicator, width / 2, height / 3);
    rectMode(CORNER);
  }
}
