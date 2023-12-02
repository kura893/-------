

let powerMeter;
let arrowX;
let arrowSpeed = 5;
let currentScore = 0;
let totalScore = 0;
let stopButton;
let targetScore = 100;
let chances = 10;
let currentRectColor;
let redImages = [];
let blueImages = [];
let selectedMall;
let demandtype;

//function setup() {
  //createCanvas(980, 530);

  // Create power meter and stop button
  //powerMeter = createPowerMeter(width / 2, height - 50, 400, 40);
 // arrowX = width / 2;
  
  //currentRectColor = getRandomColor();
//}

function ASGame() {

  //땅
  fill(100,80,51);
  rect(0,360,980,170);

  //image(mall4,750,250,200,120);

  //캐릭터
  //image(item,120,270,80,100);
  
  image(ys3_1,40,230,330,150); //영수
  image(sc3_1,630,235,100,150); //사측


  // Draw power meter
  powerMeter.display();

  // Draw arrow
  drawArrow();

  // Display score only when the arrow is stopped
  displayScore();

  // Display random rectangle only when the arrow is moving
  if (arrowSpeed !== 0) {
    displayRandomRectangle();
  }


  // Check for game clear
  if (totalScore >= targetScore) {
    gameClear();
  }

  // Check for game over
  if (chances === 0) {
    gameOver();
  }

  // Draw the custom stop button
  drawStopButton();

  //if (arrowSpeed === 15){
    //image(mall4,100,100,100,100);
  //}

  demand();
  createMall()

  fill(193,99,63);
  textSize(17);
  text("+20%",width/2,490)

  fill(38, 33, 32);
  textSize(17);
  text("+10%",width/2 -50,490);
  text("+10%",width/2 +50,490);

  fill(225);
  textSize(17);
  text("+0%",width/2 -100,490);
  text("+0%",width/2 +100,490);


  if(demandtype === 1 && arrowSpeed !== 0 && chances < 10){
    image(mall4,750,180,200,150);
  }


  if(demandtype === 1 && arrowSpeed !== 0 && chances < 10 && chances > 8){ 
    image(redImages[0],380,180,200,150);
    fill(0);
    textSize(20);
    text("이 요구조건은",858,225);
    text("정치파업에 해당되니",858,255);
    text("받아주기 어렵군!",858,285);
  } else if (demandtype === 1 && arrowSpeed !== 0 && chances < 9 &&  chances > 6){
    image(redImages[1],380,180,200,150);
    fill(0);
    textSize(20);
    text("이건 회사가 결정할",858,230);
    text("일이야.경영상 이유지",858,250);
    text("노동 조건이랑",858,270);
    text("무슨 관련이 있어?",858,290);
  } else if (demandtype === 1 && arrowSpeed !== 0 && chances < 7 && chances > 3){
    image(redImages[2],380,180,200,150);
    fill(0);
    textSize(20);
    text("이건 회사가 결정할",858,230);
    text("일이야.경영상 이유지",858,250);
    text("노동 조건이랑",858,270);
    text("무슨 관련이 있어?",858,290);
  } else if (demandtype === 1 && arrowSpeed !== 0 && chances < 4 && chances > 0){
    image(redImages[3],380,180,200,150);
    fill(0);
    textSize(20);
    text("이 요구조건은",858,225);
    text("정치파업에 해당되니",858,255);
    text("받아주기 어렵군!",858,285);
  } // 빨강색일 때 요구사항들


  if(demandtype === 2 && arrowSpeed !== 0 && chances < 10 && chances > 8){ 
    image(blueImages[1],380,180,200,150);
  } else if (demandtype === 2 && arrowSpeed !== 0 && chances < 9 &&  chances > 6){
    image(blueImages[2],380,180,200,150);
  } else if (demandtype === 2 && arrowSpeed !== 0 && chances < 7 && chances > 3){
    image(blueImages[3],380,180,200,150);
  } else if (demandtype === 2 && arrowSpeed !== 0 && chances < 4 && chances > 0){
    image(blueImages[4],380,180,200,150);
  } //파랑색일 때 요구사항들

  if(arrowSpeed !== 0 && chances == 10){
    image(blueImages[0],380,180,200,150);
  }

}

function createPowerMeter(x, y, w, h) {
  return {
    x: x,
    y: y,
    width: w,
    height: h,
    display: function () {
      // Draw power meter background
      noStroke();
      fill(38, 33, 32);
      rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);

      // Draw red center
      fill(193, 99, 63);
      rect(this.x - 5, this.y - this.height / 2, 10, this.height);

      // Draw white on both sides
      fill(255);
      rect(this.x - this.width / 2, this.y - this.height / 2, 150, this.height);
      rect(this.x + this.width / 2 - 150, this.y - this.height / 2, 150, this.height);
    },
  };
}

function drawStopButton() {
  // Draw a custom stop button (a rectangle with text)
  fill(38, 33, 32);
  rect(800 - 60, 505 - 75, 120, 40);

  // Style the text
  fill(225);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("멈추기!", 800, 505 - 53);

  // Check if the mouse is over the button
  const isMouseOverButton =
    mouseX > 740 - 120 &&
    mouseX < 740 + 120 &&
    mouseY > 460 - 40 &&
    mouseY < 460 + 40;

  // Check if the mouse is clicked and over the button
  if (mouseIsPressed && isMouseOverButton) {
    // Call the stopArrow function when the button is clicked
    stopArrow();
  }
}

function drawArrow() {
  // Draw arrow
  fill(193,99,63);
  triangle(arrowX, height - 100, arrowX - 15, height - 120, arrowX + 15, height - 120);

  // Move arrow within the power meter's range
    arrowX += arrowSpeed;

  // Check arrow bounds within the power meter's range
  if (arrowX < powerMeter.x - powerMeter.width / 2 || arrowX > powerMeter.x + powerMeter.width / 2) {
    arrowSpeed *= -1; // Reverse direction if the arrow is out of bounds
  }

  // Check if arrow is inside the power meter and arrow is moving
  if (
    arrowSpeed !== 0 &&
    arrowX > powerMeter.x - powerMeter.width / 2 &&
    arrowX < powerMeter.x + powerMeter.width / 2
  ) {
    // Calculate score based on the arrow's position in the power meter
    let distanceFromCenter = abs(arrowX - powerMeter.x);
    if (distanceFromCenter <= 5) {
      currentScore = 20; // Red area
    } else if (distanceFromCenter <= 50) {
      currentScore = 10; // Blue area
    } else {
      currentScore = 0; // White area
    }
  }
}

function displayScore() {
  if (arrowSpeed === 0) { // 화살표가 멈췄을 때만 표시
    fill(255,222,95);
    textSize(24);
    textAlign(CENTER, TOP);
    text("+" + currentScore + "%", width / 2, 300);
  }

  if (arrowSpeed === 15) { // 화살표가 멈췄을 때만 표시
    fill(193,99,63);
    textSize(24);
    textAlign(CENTER, TOP);
    text("SPEED UP!", width / 2, 370);
  }

  // 항상 표시되는 내용들
  fill(255);
  textSize(24);
  textAlign(CENTER, TOP);
  text("교섭 진행률: " + totalScore + "%", width / 2, 140);
  text("남은 기회: " + chances + '회', width / 2, 100);
}

function stopArrow() {
  if (arrowSpeed !== 0) {
    // Stop the arrow
    arrowSpeed = 0;

    // Accumulate total score
    totalScore += currentScore;

    // Decrease chances
    chances--;

    setTimeout(() => {
      // After 2 seconds, reset arrow movement
      arrowSpeed = getRandomSpeed(); // Use the new function to get random speed
      // Reset current score and move the arrow back to the center
      currentScore = 0;
      arrowX = width / 2;

    }, 2000);

    currentRectColor = getRandomColor();
  }
}

function getRandomSpeed() {
  return currentRectColor.levels[0] === 255 ? 15 : 10; // If red, speed is 10; if blue, speed is 5
}

function getRandomDemand(){
  return currentRectColor.levels[0] === 255 ? 1 : 2;
}

function getRandomColor() {
  return random() > 0.5 ? color(255, 0, 0) : color(0, 0, 255);
}

function selectMall(){
 return  currentRectColor.levels[0] === 255 ? int(random(0,4)) : int(random(0,5));
}

function displayRandomRectangle() {
  
  if (chances < 10) {
  fill(currentRectColor);
  rect(width / 2 - 30, 300, 60, 20); //랜덤 색깔이 부여된 사각형 생성
  } else {
  fill(0,0,255);
  rect(width / 2 - 30, 300, 60, 20); //첫 번째는 무조건 파랑색
  }
}

function gameClear() {
  gameStage = 19;
}

function gameOver() {
  gameStage = 18;
}

function demand() {
  demandtype = getRandomDemand();
}

function createMall() {
  selectedMall = selectMall();
}
