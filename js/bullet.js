'use strict';

let bullet = document.createElement('div');
bullet.className = 'bullet';
bullet.style.width = cellSize / 10 + 'px';
bullet.style.height = cellSize / 10 + 'px';
bullet.style.position = 'absolute';
let bulletCoords;

let bulletFly = function (direction) {
  //console.log(userTank.style.transform);

  let start = Date.now();
  let timer = setInterval(function () {
    let timePassed = Date.now() - start;

    if (timePassed >= 1050) {
      clearInterval(timer);
      bullet.remove();
      return;
    }

    draw(direction);
  }, 20);

  function draw (direction) {
    switch (direction) {
      case 'up':
      bulletCoords.y = Math.round(bulletCoords.y * 100) / 100 - 0.5;
      bullet.style.top = bulletCoords.y * cellSize / 2 + 'px';
      break

      case 'left':
      bulletCoords.x = Math.round(bulletCoords.x * 100) / 100 - 0.5;
      bullet.style.left = bulletCoords.x * cellSize / 2 + 'px';
      break

      case 'right':
      bulletCoords.x = Math.round(bulletCoords.x * 100) / 100 + 0.5;
      bullet.style.left = bulletCoords.x * cellSize / 2 + 'px';
      break

      case 'down':
      bulletCoords.y = Math.round(bulletCoords.y * 100) / 100 + 0.5;
      bullet.style.top = bulletCoords.y * cellSize / 2 + 'px';
      break
    }

  }
}

let shoot = function () {
  switch(userTank.style.transform) {
    case 'rotate(-90deg)':
    bulletCoords = {
      x: [userTankCoord.x - 1],
      y: [userTankCoord.y]
    }
    bullet.style.left = userTankCoord.x * cellSize / 2 + 'px';
    bullet.style.top = (userTankCoord.y + 1) * cellSize / 2 - 1 + 'px';
    field.after(bullet);
    bulletFly('left');
    break

    case 'rotate(90deg)':
    bulletCoords = {
      x: [userTankCoord.x + 1],
      y: [userTankCoord.y]
    }
    bullet.style.left = (userTankCoord.x + 1) * cellSize / 2 + 'px';
    bullet.style.top = (userTankCoord.y + 1) * cellSize / 2 - 1 + 'px';
    field.after(bullet);
    bulletFly('right');
    break

    case 'rotate(180deg)':
     bulletCoords = {
      x: [userTankCoord.x],
      y: [userTankCoord.y + 1]
    }
    bullet.style.left = (userTankCoord.x + 1) * cellSize / 2 - 1 + 'px';
    bullet.style.top = (userTankCoord.y + 2) * cellSize / 2 + 'px';
    field.after(bullet);
    bulletFly('down');
    break

    default:
     bulletCoords = {
      x: [userTankCoord.x],
      y: [userTankCoord.y - 1]
    }
    bullet.style.left = (userTankCoord.x + 1) * cellSize / 2 - 1 + 'px';
    bullet.style.top = userTankCoord.y * cellSize / 2 + 'px';
    field.after(bullet);
    bulletFly('up');
    break
  }
}
