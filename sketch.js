let startButton;
let resetButton;
let endingButton;
let nextButton;
let dialogueNextButton;
let alertCloseButton;
let nameInput;
let gameStarted = false;
let player;
let scene = -1;
let miniGame = 0;
let detail = 0;
let dialogueTimer = 0;
let selection1_1;
let selection1_2;
let selection1_3;
let selection2_1;
let selection2_2;
let alert;
let textCounter = 0;
let speedText = 30;
let isInConversation;
let mic;

function preload() {
  excel = loadImage("assets/excel.png");
  soundFormats("mp3", "ogg");
  mySound = loadSound("assets/tube2.mp3");

  img_start = loadImage("assets/startpage.png");
  img_airpods1 = loadImage("assets/airpods1.png");
  img_airpods2 = loadImage("assets/airpods2.png");
  img_airpods3 = loadImage("assets/airpods3.png");
  bg_single = loadImage("assets/singleColor.png");
  bg_room_morning = loadImage("assets/playerRoomMorning.png");
  bg_room_noon = loadImage("assets/playerRoomNoon.png");
  bg_office = loadImage("assets/office.png");
  aimg1 = loadImage("assets/meeting1.png");
  meeting11 = loadImage("assets/meeting11.png");
  aimg2 = loadImage("assets/meeting2.png");
  meeting22 = loadImage("assets/meeting22.png");
  aimg3 = loadImage("assets/meeting3.png");
  meeting33 = loadImage("assets/meeting33.png");
  aimg4 = loadImage("assets/meeting4.png");
  meeting44 = loadImage("assets/meeting44.png");
  meeting_boss1 = loadImage("assets/meeting_boss1.png");
  meeting_boss2 = loadImage("assets/meeting_boss2.png");
  meeting_boss3 = loadImage("assets/meeting_boss3.png");
  meeting_boss4 = loadImage("assets/meeting_boss4.png");
  meeting_desk = loadImage("assets/meeting_desk.png");
}

function setup() {
  createCanvas(1280, 720);
  // 버튼 생성
  createStartButton();
  createNextButton();
  createResetButton();
  createEndingButton();
  createDialogueNextButton();
  createAlertCloseButton();

  //분기점 버튼 생성
  createSelection1();
  createSelection2();
  createSelection3();
  createSelection4();

  // input 요소 생성
  createNameInput();
  angleMode(DEGREES);
  // player = new Player("임시");
  setupAirpods();

  // 텍스트 생성 속도
  frameRate(speedText);
}

function draw() {
  // console.log(scene);
  if (gameStarted) {
    switch (scene) {
      case -1:
        showOpening();
        break;
      case 0:
        startGame();
        break;
      case 1:
        scene1();
        break;
      case 2:
        scene2();
        break;
      case 3:
        scene3();
        break;
      case 4:
        scene4();
        break;
      case 5:
        scene5();
        break;
      case 6:
        scene6();
        break;
      case 7:
        scene7();
        break;
      case 8:
        scene8();
        break;
      case 9:
        scene9();
        break;
      case 10:
        scene10();
        break;
      case 11:
        scene11();
        break;
      case 12:
        scene12();
        break;
      case 13:
        scene13();
        break;
      case 100:
        ending();
        resetButton.show();
        break;
    }
  } else {
    showStartPage();
  }
}
