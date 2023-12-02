let gameStage = 0; // 스테이지 0로 시작
//let playerName;

function preload(){
  
    //배경이미지 프리로드
    start = loadImage("images/start.jpg");
    cleaneyes = loadImage("images/cleaneyes.jpeg");
    introduce = loadImage("images/introduce.jpeg");
    //nameinput = loadImage("images/nameinput.jpg");
    angry = loadImage("images/angry.jpeg");
    stage1rule = loadImage('images/stage1rule.jpeg');
    stage1fail = loadImage('images/stage1fail.jpeg');
    stage1true = loadImage('images/stage1true.jpeg');
    stage1comment = loadImage('images/stage1comment.jpeg');
    stage2rule = loadImage('images/stage2rule.jpeg');
    stage2fail = loadImage('images/stage2fail.jpeg');
    stage2true = loadImage('images/stage2true.jpeg');
    stage2comment = loadImage('images/stage2comment.jpeg');
    stage3rule = loadImage('images/stage3rule.jpeg');
    stage3fail = loadImage('images/stage3fail.jpeg');
    stage3true = loadImage('images/stage3true.jpeg');
    outro = loadImage('images/outro.jpeg');

    //스테이지1 이미지 프리로드
    mall1 = loadImage("images/mall1.png");
    mall2 = loadImage("images/mall2.png");
    mall3 = loadImage("images/mall3.png");
    ys1_1 = loadImage("images/ys1_1.png");
    ys1_2 = loadImage("images/ys1_2.png");
    sc1_1 = loadImage("images/sc1_1.png");
    sc1_2 = loadImage("images/sc1_2.png");

    //스테이지2 프리로드
    yspm_up = loadImage("images/YSPMup.png");
    yspm_down = loadImage("images/YSPMdown.png");
    yspm_left = loadImage("images/YSPMleft.png");
    yspm_right = loadImage("images/YSPMright.png");
    yspm_smile = loadImage("images/YSPMsmile.png");
    lifeheart = loadImage("images/life.png");
    item = loadImage("images/item.png");

    //스테이지3 프리로드
    redImages[0] = loadImage('images/redtalk1.png');
    redImages[1] = loadImage('images/redtalk2.png');
    redImages[2] = loadImage('images/redtalk3.png');
    redImages[3] = loadImage('images/redtalk4.png');
    blueImages[0] = loadImage('images/bluetalk1.png')
    blueImages[1] = loadImage('images/bluetalk2.png')
    blueImages[2] = loadImage('images/bluetalk3.png')
    blueImages[3] = loadImage('images/bluetalk4.png')
    blueImages[4] = loadImage('images/bluetalk5.png')
    ys3_1 = loadImage("images/ys3_1.png");
    sc3_1 = loadImage("images/sc3_1.png");
    mall4 = loadImage("images/mall4.png");

    
    }

function setup() {
  createCanvas(980, 530);

  powerMeter = createPowerMeter(width / 2, height - 80, 400, 40);
  arrowX = width / 2;
  
  currentRectColor = getRandomColor();

  player = createPlayer();
  createItems(10); // 생성되는 아이템값

  //selectRandomImage();

}

function draw() {
  background(123, 104, 90);

  switch (gameStage) {
    
    case 0:
      //시작화면
      image(start,0,0,980,530);
      //PMGame();
      //ASGame();
      //BPGame();
      //NIstage();
      break;
    
    case 1:
      image(cleaneyes,0,0,980,530);
      break;  
    
    case 2:
      image(introduce,0,0,980,530);
      break;

    //case 'nameinput':
      //image(nameinput,0,0,980,530);
      //break;

    case 3:
      image(angry,0,0,980,530);
      break;

    case 4:
      image(stage1rule,0,0,980,530);
      break;
  
    case 5:
      // 스테이지 1: 연타 게임
      BPGame();
      break;
      
    case 6:
      // 실패-설명
      image(stage1fail,0,0,980,530);
      break;

    case 7:
      // 실패-연결대사
      image(stage1comment,0,0,980,530);
      break;

    case 8:
      // 성공-설명
      image(stage1true,0,0,980,530);
      break;
      
    case 9:
      // 성공-연결대사
      image(stage1comment,0,0,980,530);
      break;
      
    case 10:
      image(stage2rule,0,0,980,530);
      break;
    
    case 11:
      //스테이지2 : 팩맨게임
      PMGame();
      break;
      
    case 12:
      // 실패-설명2
      image(stage2fail,0,0,980,530);
      break;
      
    case 13:
      // 실패-연결대사2
      image(stage2comment,0,0,980,530);
      break;
      
    case 14:
      // 성공-설명2
      image(stage2true,0,0,980,530);
      break;
      
    case 15:
      // 성공-연결대사2
      image(stage2comment,0,0,980,530);
      break;
      
    case 16:
      image(stage3rule,0,0,980,530);
      break;

    case 17:
      // 스테이지3 : 화살표멈추기 게임
      ASGame();
      break;
      
    case 18:
      // 실패-설명3
      image(stage3fail,0,0,980,530);
      break;
      
    case 19:
      // 성공-설명3
      image(stage3true,0,0,980,530);
      break;
      
    case 20:
      // 아웃트로
      image(outro,0,0,980,530);
      break;
      
  }
}

  function keyPressed() {
    if (keyCode === ENTER) {
        // 현재 스테이지에 따라 다음 스테이지로 이동
        switch (gameStage) {
            case 0:
                gameStage = 1;
                break;
            case 1:
                gameStage = 2;
                break;
            // 필요한 만큼 계속해서 추가
            case 2:
                gameStage = 3;
              removeInput();
              break;
            // 필요한 만큼 계속해서 추가
            case 3:
                gameStage = 4;
                break;
            case 4:
                gameStage = 5;
                break;
            // 필요한 만큼 계속해서 추가
            case 6:
                gameStage = 7;
                break;
            // 필요한 만큼 계속해서 추가
            case 7:
                gameStage = 10;
                break;
            // 필요한 만큼 계속해서 추가
            case 8:
                gameStage = 9;
                break;
            case 9:
                gameStage = 10;
                break;
            case 10:
                gameStage = 11;
                break;
            // 필요한 만큼 계속해서 추가
            case 12:
                gameStage = 13;
                break;
            // 필요한 만큼 계속해서 추가
            case 13:
                gameStage = 16;
                break;
            // 필요한 만큼 계속해서 추가
            case 14:
                gameStage = 15;
                break;
            case 15:
                gameStage = 16;
                break;
            // 필요한 만큼 계속해서 추가
            case 16:
                gameStage = 17;
                break;
            // 필요한 만큼 계속해서 추가
            case 18:
                gameStage = 20;
                break;
            // 필요한 만큼 계속해서 추가
            case 19:
                gameStage = 20;
                break;
            // 더 이상 진행할 스테이지가 없으면 추가하지 않아도 됨
            case 20:
                gameStage = 0;
                break;
            default:
        }

        redraw(); // draw() 함수를 한 번 더 호출하여 이미지 갱신
    }
}
