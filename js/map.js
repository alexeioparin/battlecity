'use strict';

// Tank's level
let field = document.querySelector('#map');
let ctxMap = field.getContext('2d');


    // Размер одной ячейки на карте
const cellSize = 64;
    // Массив карты поля боя
let map = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
        [2, 2, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 2, 2],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
field.width = 13 * cellSize;
field.height = 13 * cellSize;
ctxMap.fillStyle = '#ccc';
ctxMap.fillRect(0, 0, field.width, field.height);
ctxMap.fillStyle = '#000';
ctxMap.fillRect(0, 0, 13 * cellSize, 13 * cellSize)
// Цикл обрабатывающий массив в котором содержатся значения элементов карты
// если попадается 1 то рисуется кирпичный блок
// если 2, то бетонная стена
for (let j = 0; j < 26; j++)
for (let i = 0; i < 26; i++) {
    switch (map[j][i]) {
        case 1:
            DrawBrick(i * cellSize / 2, j * cellSize / 2);
            break;
        case 2:
            DrawHardBrick(i * cellSize / 2, j * cellSize / 2);
            break;
    }
}

// Рисуем часть кирпичной стены
function DrawBrick(x, y) {
    // Отрисовка основного цвета кирпича
    ctxMap.fillStyle = '#FFA500';
    ctxMap.fillRect(x, y, cellSize / 2, cellSize / 2);
    // Отрисовка теней
    ctxMap.fillStyle = '#CD8500';
    ctxMap.fillRect(x, y, cellSize / 2, cellSize / 16);
    ctxMap.fillRect(x, y + cellSize / 4, cellSize / 2, cellSize / 16);
    ctxMap.fillRect(x + cellSize / 4, y, cellSize / 16, cellSize / 4);
    ctxMap.fillRect(x + cellSize / 16, y + cellSize / 4, cellSize / 16, cellSize / 4);
    // Отрисовка раствора между кирпичами
    ctxMap.fillStyle = '#D3D3D3';
    ctxMap.fillRect(x, y + cellSize / 4 - cellSize / 16, cellSize / 2, cellSize / 16);
    ctxMap.fillRect(x, y + cellSize / 2 - cellSize / 16, cellSize / 2, cellSize / 16);
    ctxMap.fillRect(x + cellSize / 4 - cellSize / 16, y, cellSize / 16, cellSize / 4);
    ctxMap.fillRect(x, y + cellSize / 4 - cellSize / 16, cellSize / 16, cellSize / 4);
}

// Рисуем часть бетонного блока
function DrawHardBrick(x, y) {
    // Отрисовка основного фона
    ctxMap.fillStyle = '#cccccc';
    ctxMap.fillRect(x, y, cellSize / 2, cellSize / 2);
    // Отрисовка Тени
    ctxMap.fillStyle = '#909090';
    ctxMap.beginPath();
    ctxMap.moveTo(x, y + cellSize / 2);
    ctxMap.lineTo(x + cellSize / 2, y + cellSize / 2);
    ctxMap.lineTo(x + cellSize / 2, y);
    ctxMap.fill();
    // Отрисовка белого прямоугольника сверху
    ctxMap.fillStyle = '#eeeeee';
    ctxMap.fillRect(x + cellSize / 8, y + cellSize / 8, cellSize / 4, cellSize / 4);
}
