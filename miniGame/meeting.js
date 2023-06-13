let keys = {
  a: false,
  s: false,
  d: false,
  f: false,
};
let rate = 0;
let stoprate;
let mySound;

let aimg1;
let aimg2;
let aimg3;

let aimg1Duration = 30;
let aimg1DurationS = 30;
let aimg1DurationD = 30;
let aimg1DurationF = 30;

let presstimeA = false;
let presstimeS = false;
let presstimeD = false;
let presstimeF = false;

let decg3;

function Meeting() {
  image(bg_single, width / 2, height / 2);
  image(meeting_desk, width / 2, height / 2);
  image(meeting_boss1, width / 2, height / 2);
  image(aimg1, width / 2, height / 2);
  image(aimg2, width / 2, height / 2);
  image(aimg3, width / 2, height / 2);
  image(aimg4, width / 2, height / 2);
  fill(0);
  textStyle(BOLD);
  textSize(30);
  textAlign(CENTER, CENTER);
  text(
    "게임 로직 보완 중..다음 장면으로 넘어가주세요 ㅜㅅㅜ",
    width / 2,
    height / 4
  );
}
