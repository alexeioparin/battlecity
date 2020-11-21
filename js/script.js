'use strict';

let userTankCoord = {
  x: 8,
  y: 24
};
let userTank = document.createElement('div');
let bodyWrapper = document.querySelector('.wrapper');
let eagle = document.createElement('div');
const mapBorder = 24;
userTank.className = 'userTank';
userTank.style.width = cellSize + 'px';
userTank.style.height = cellSize + 'px';
userTank.style.position = 'absolute';
userTank.style.left = userTankCoord.x * cellSize / 2 + 'px';
userTank.style.top = userTankCoord.y * cellSize / 2 + 'px';
field.after(userTank);
eagle.className = 'eagle';
eagle.style.width = cellSize + 'px';
eagle.style.height = cellSize + 'px';
eagle.style.position = 'absolute';
eagle.style.left = 6 * cellSize + 'px';
eagle.style.bottom = '0';
field.after(eagle);

let tankRide = function(direction) {
  let start = Date.now();
  let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    if (timePassed >= 440) {
      clearInterval(timer);
      return;
    }

    draw(direction);
  }, 40);

  function draw(direction) {
    switch (direction) {
      case 'left':
      if (userTankCoord.x > 0.01) {
        if (map[Math.ceil(userTankCoord.y)][Math.ceil(userTankCoord.x) - 1] <= 0 && map[Math.ceil(userTankCoord.y) + 1][Math.ceil(userTankCoord.x) - 1] <= 0 && map[Math.floor(userTankCoord.y)][Math.ceil(userTankCoord.x) - 1] <= 0) {
          userTankCoord.x = Math.round(userTankCoord.x * 100) / 100 - 0.05;
          userTank.style.left = userTankCoord.x * cellSize / 2 + 'px';
        }
      }
      break

      case 'up':
      if (userTankCoord.y > 0.01) {
        if (map[Math.ceil(userTankCoord.y) - 1][Math.ceil(userTankCoord.x)] <= 0 && map[Math.ceil(userTankCoord.y) - 1][Math.ceil(userTankCoord.x) + 1] <= 0 && map[Math.ceil(userTankCoord.y) - 1][Math.floor(userTankCoord.x)] <= 0) {
          userTankCoord.y = Math.round(userTankCoord.y * 100) / 100 - 0.05;
          userTank.style.top = userTankCoord.y * cellSize / 2 + 'px';
        }
      }
      break

      case 'right':
      if (userTankCoord.x < mapBorder) {
        if (map[Math.ceil(userTankCoord.y)][Math.floor(userTankCoord.x) + 2] <= 0 && map[Math.ceil(userTankCoord.y) + 1][Math.floor(userTankCoord.x) + 2] <= 0 && map[Math.floor(userTankCoord.y)][Math.floor(userTankCoord.x) + 2] <= 0) {
          userTankCoord.x = Math.round(userTankCoord.x * 100) / 100 + 0.05;
          userTank.style.left = userTankCoord.x * cellSize / 2 + 'px';
        }
      }
      break

      case 'down':
      if (userTankCoord.y < mapBorder) {
        if (map[Math.floor(userTankCoord.y) + 2][Math.ceil(userTankCoord.x)] <= 0 && map[Math.floor(userTankCoord.y) + 2][Math.ceil(userTankCoord.x) + 1] <= 0 && map[Math.floor(userTankCoord.y) + 2][Math.floor(userTankCoord.x)] <= 0) {
          userTankCoord.y = Math.round(userTankCoord.y * 100) / 100 + 0.05;
          userTank.style.top = userTankCoord.y * cellSize / 2 + 'px';
        }
      }
      break
    }
  }
}

document.addEventListener('keydown', function(evt) {
  evt.preventDefault;
  switch (evt.code) {
    case 'ArrowLeft':
    userTank.style.transform = 'rotate(-90deg)';
    tankRide('left');
    break

    case 'ArrowUp':
    userTank.style.transform = 'rotate(0deg)';
    tankRide('up');
    break

    case 'ArrowRight':
    userTank.style.transform = 'rotate(90deg)';
    tankRide('right');
    break

    case 'ArrowDown':
    userTank.style.transform = 'rotate(180deg)';
    tankRide('down');
    break

    case 'Space':
    shoot();
    break
  }
})
