// 팩맨게임

let player;
let items = [];
let villains = [];
let lives = 3;
//let startTime; // 게임 시작 시간
let timeLimit2 = 15; // 스테이지2 타임 어택 시간 제한 (초)

function setup() {
  createCanvas(980, 530);
  player = createPlayer();
  createItems(10); // 생성되는 아이템값
}

function PMGame() {
  background(123, 104, 90);
  handleGame();
  //drawLives();

  //라이프
  if (lives >= 3) {
    image(lifeheart,250,470,40,35);
  } 
  if (lives >= 2){
    image(lifeheart,200,470,40,35);
  } 
  if (lives >= 1){
    image(lifeheart,150,470,40,35);
  }

      if (!startTime && keyPressed) {
        startTime = millis(); // 게임 시작 시간 기록
      } 

      if (startTime !== undefined) {
        // 시간 경과 계산
        let elapsedTime = (millis() - startTime) / 1000; // 밀리초를 초로 변환

        // 타임 어택 내 목표 아이템값 못 채우면 실패
        if (elapsedTime >= timeLimit2 && items.length > 0) {
          gameStage = 12;
        } else {
          // 남은 시간을 소수점 이하 두 자리까지 표시
          let remainingTime = max(0, timeLimit2 - elapsedTime);
          fill(220);
          textSize(25);
          text("남은 시간: " + nf(floor(remainingTime), 0, 0) + " 초", 800, 40);
        }
      }

      fill(220);
      textSize(25);
      text("모인 동료: " + (10 - items.length) + "명/10명", 780, 500);

      fill(220);
      textSize(25);
      text("LIFE:", 100, 500);

  }

function createPlayer() {
  return {
    x: width / 2,
    y: height - 30,
    radius: 40,
    show: function () {
      //fill(0, 255, 0);
      //ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    
      if (keyIsDown(UP_ARROW)) {
        image(yspm_up,this.x, this.y, this.radius * 2, this.radius * 1.5);
      } else if (keyIsDown(DOWN_ARROW)) {
        image(yspm_down,this.x, this.y, this.radius * 2, this.radius * 1.5);
      } else if (keyIsDown(RIGHT_ARROW)) {
        image(yspm_right,this.x, this.y, this.radius * 2, this.radius * 1.5);
      } else if (keyIsDown(LEFT_ARROW)) {
        image(yspm_left,this.x, this.y, this.radius * 2, this.radius * 1.5);
      } else {
        image(yspm_up,this.x, this.y, this.radius * 2, this.radius * 1.5);
      }
      
      //image(yspm_up,this.x, this.y, this.radius * 2, this.radius * 1.5);
      //ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    },
    
    intersects: function (other) {
      let d = dist(this.x, this.y, other.x, other.y);
      return d <= this.radius + other.radius;
    },
    
    move: function (dirX, dirY) {
      this.x += dirX * 10;
      this.y += dirY * 10;
      this.x = constrain(this.x, this.radius, width - this.radius);
      this.y = constrain(this.y, 60 + this.radius, 430 - this.radius);
    },
  };
}

function createItems(count) {
  for (let i = 0; i < count; i++) {
    items.push({
      x: random(width),
      y: random(75, 425),
      radius: 20, // 아이템 크기
      show: function () {
        //fill(255, 0, 0);
        image(item,this.x, this.y, this.radius * 2, this.radius * 2.5);
        //ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
      },
    });
  }
}

function handleGame() {
  player.show();
  handlePlayerMovement();

  handleItems();
  handleVillains();
  
  if (items.length === 0) {
    gameStage = 14; // 성공 설명 페이지
    redraw(); // 성공 페이지에 도달하면 화면을 갱신하여 성공 메시지를 표시
  }

  if (lives <= 0) {
    gameStage = 12; // 실패 설명 페이지
    redraw(); // 실패 페이지에 도달하면 화면을 갱신하여 실패 메시지를 표시
  }
}

function handlePlayerMovement() {
  let dirX = 0;
  let dirY = 0;

  if (keyIsDown(LEFT_ARROW)) {
    dirX = -1;
  } else if (keyIsDown(RIGHT_ARROW)) {
    dirX = 1;
  }

  if (keyIsDown(UP_ARROW)) {
    dirY = -1;
  } else if (keyIsDown(DOWN_ARROW)) {
    dirY = 1;
  }
  
  player.move(dirX, dirY);
}

function handleItems() {
  for (let i = items.length - 1; i >= 0; i--) {
    items[i].show();
    if (player.intersects(items[i])) {
      items.splice(i, 1);
    }
  }
}

//function drawLives() {
  //textSize(25);
 // fill(220);
 // text(`Lives: ${lives}`, 100, 500);
//}

function createVillain() {
  return {
    x: width, // 오른쪽 끝에서 생성
    y: random(height - 50),
    radius: 30, // 빌런 크기
    show: function () {
      fill(0);
      ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
      this.y = constrain(this.y, 100, 330);
    },
    move: function () {
      this.x -= 15; // 왼쪽으로 이동
    },

  };
}

function handleVillains() {
  // 프레임당 2%의 확률로 빌런 생성
  if (random(0, 1) < 0.035) {
    villains.push(createVillain());
  }

  for (let i = villains.length - 1; i >= 0; i--) {
    villains[i].show();
    villains[i].move();

    if (player.intersects(villains[i])) {
      lives--;
      villains.splice(i, 1);
    }
  }
}