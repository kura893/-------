//연타게임

let gaugeValue = 0; // 게이지의 초기값
let targetGaugeValue = 450; // 특정 값 넘을 때의 목표 게이지 값
let decreaseRate = 2.5; // 게이지 감소 속도
let timeLimit = 10; // 타임 어택 시간 제한 (초)
let startTime; // 게임 시작 시간
let buttonPressed = false; // 버튼이 눌렸는지 여부

// 버튼 색상 관련 변수
let buttonColor = [38, 33, 32]; // 진한 갈색
let buttonPressedColor = [193, 99, 63]; // 주황색 (눌렸을 때의 색상)

function BPGame() {
  background(123, 104, 90);
  
  if (!startTime && buttonPressed) {
        startTime = millis(); // 게임 시작 시간 기록
      }

      let isButtonPressed = isMouseOverButton(650, 400, 240, 60);

      // 버튼 색상 설정
      let currentButtonColor = isButtonPressed ? buttonPressedColor : buttonColor;
            
      noStroke();

      //땅
      fill(80,71,61);
      rect(0,360,980,170);

      fill(220);
      textSize(25);
      text("min",100,490);
      text("MAX",550,490);

      drawButton(650, 400, 240, 60, currentButtonColor);

      //캐릭터들
      //image(ys1_1,150,230,110,150); //영수
      //image(sc1_1,730,235,130,150); //사측

      //게이지 바
      fill(220);
      rect(97, 400, 456, 60);
      
      fill(38, 33, 32);
      rect(100, 403, gaugeValue, 54);
      

      if (startTime !== undefined) {
      
      // 시간 경과 계산
      let elapsedTime = (millis() - startTime) / 1000; // 밀리초를 초로 변환

      // 타임 어택 실패 조건
      if (elapsedTime >= timeLimit && gaugeValue <= targetGaugeValue) {
        gameStage = 6;
        // 스테이지 2에 대한 초기화 또는 화면 갱신 로직을 추가할 수 있습니다.
      } else {
        // 남은 시간을 소수점 이하 두 자리까지 표시
        let remainingTime = max(0, timeLimit - elapsedTime);
        fill(220);
        textSize(40);
        textAlign(CENTER);
        text("남은 시간 : " + nf(floor(remainingTime), 0, 0) + " 초",  width / 2, height / 2 - 100);
      }
      } else {
        fill(220);
        textSize(25);
        text("버튼을 연타해서 상사를 설득하세요!",width/2,height/2);
      }
      
      // 게이지 감소 로직
      if (buttonPressed) {
        gaugeValue = max(0, gaugeValue - decreaseRate*0.5);
      }

      if (buttonPressed == true) {
        image(ys1_2,150,230,110,150); //영수
      }
      else {
        image(ys1_1,150,230,110,150); //영수
      }

      if (gaugeValue >= 100){
        image(mall1,250,230,130,100);
    }
      if (gaugeValue >= 250){
        image(mall2,350,220,160,130);
    }
      if (gaugeValue >= 400){
        image(mall3,470,200,230,150);
    }

      if (gaugeValue >= 400){
        image(sc1_2,730,235,130,150); //사측
    }
        else {
            image(sc1_1,730,235,130,150); //사측
        }


}

function mousePressed() {
  if (isMouseOverButton(650, 400, 240, 60)) {
    // 연타 게임 버튼 클릭 시 게이지 증가
    gaugeValue += 12;
    // 특정 게이지 값을 넘으면 다음 스테이지로 전환
    
    if (gaugeValue >= targetGaugeValue) {
      gameStage = 8;
    }

    buttonPressed = true;
  }
}

function drawButton(x, y, width, height, color) {
  fill(color);
  rect(x, y, width, height);
  fill(220);
  textSize(40);
  textAlign(CENTER);
  text("설득하기!", x + 120, y + 43);
}

function isMouseOverButton(x, y, width, height) {
  return mouseX >= x && mouseX <= x + width && mouseY >= y && mouseY <= y + height;
}
