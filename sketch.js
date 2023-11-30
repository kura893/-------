let gameStage = 0; // 스테이지 0로 시작

function preload(){
  
    //배경이미지 프리로드
    start = loadImage("images/start.jpeg");
    cleaneyes = loadImage("images/cleaneyes.jpeg");
    introduce = loadImage("images/introduce.jpeg");
    angry = loadImage("images/angry.jpeg");
    stage1rule = loadImage('images/stage1rule.jpeg');
    stage1fail = loadImage('images/stage1fail.jpeg');
    stage1true = loadImage('images/stage1true.jpeg');
    stage1comment = loadImage('images/stage1comment.jpeg');
    stage2rule = loadImage('images/stage2rule.jpg');
    stage2fail = loadImage('images/stage2fail.jpeg');
    stage2true = loadImage('images/stage2true.jpeg');
    stage2comment = loadImage('images/stage2comment.jpeg');
    stage3fail = loadImage('images/stage3fail.jpeg');
    stage3true = loadImage('images/stage3true.jpeg');

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

    }

function setup() {
  createCanvas(980, 530);
}

function draw() {
  background(123, 104, 90);

  switch (gameStage) {
    
    case 0:
      //시작화면
      image(start,0,0,980,530);
      break;
    
    case 1:
        image(cleaneyes,0,0,980,530);
        break;  

    case 2:
      image(introduce,0,0,980,530);
      break;

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
      // 스테이지3 : 공떨어뜨리기 게임
      //BDGame();
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
      fill(0);
      textSize(30);
      text("과연 이 정도 인원만으로 교섭을 성공시킬 수 있을까? 걱정되지만 최선을 다하자!", width / 2, height / 2);
      break;
      
  }
}

//function keyPressed() {
    //if (gamestage = 7,13 && keyCode === ENTER) {
      //gameStage += 3; // 실패 메시지 페이지로 이동
     // redraw(); // 실패 페이지에 도달하면 화면을 갱신하여 실패 메시지를 표시
    //} else {
      //gameStage += 1;
      //redraw(); // 실패 페이지에 도달하면 화면을 갱신하여 실패 메시지를 표시
   // } 
  //}

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
            default:
        }

        redraw(); // draw() 함수를 한 번 더 호출하여 이미지 갱신
    }
}