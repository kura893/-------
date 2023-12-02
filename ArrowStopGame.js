

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
let selectedImage;

//function setup() {
  //createCanvas(980, 530);

  // Create power meter and stop button
  //powerMeter = createPowerMeter(width / 2, height - 50, 400, 40);
 // arrowX = width / 2;
  
  //currentRectColor = getRandomColor();
//}

function ASGame() {

  //땅
  fill(80,71,61);
  rect(0,360,980,170);

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
  rect(800 - 60, 505 - 45, 120, 40);

  // Style the text
  fill(225);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("멈추기!", 800, 505 - 25);

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
  fill(0);
  triangle(arrowX, height - 70, arrowX - 15, height - 90, arrowX + 15, height - 90);

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
    fill(0);
    textSize(24);
    textAlign(CENTER, TOP);
    text("+" + currentScore + "%", width / 2, 300);
  }

  if (arrowSpeed === 15) { // 화살표가 멈췄을 때만 표시
    fill(193,99,63);
    textSize(24);
    textAlign(CENTER, TOP);
    text("SPEED UP!", width / 2, 400);
  }

  // 항상 표시되는 내용들
  fill(0);
  textSize(24);
  textAlign(CENTER, TOP);
  text("교섭 진행률: " + totalScore + "%", width / 2, 250);
  text("남은 기회: " + chances + '회', width / 2, 80);
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

function getRandomColor() {
  return random() > 0.5 ? color(255, 0, 0) : color(0, 0, 255);
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

