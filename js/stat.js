'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 20;
const BAR_WIDTH = 40;
const BAR_HEIGHT_MAX = 150;
const BAR_GAP = 50;

let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  let maxTime = getMaxElement(times);

  renderCloud(
      ctx,
      CLOUD_X + 0.5 * GAP,
      CLOUD_Y + 0.5 * GAP,
      `rgba(0, 0, 0, 0.7)`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );

  ctx.fillStyle = `#000`;
  ctx.font = `16px "PT Mono"`;

  ctx.fillText(
      `Ура вы победили!`,
      CLOUD_X + GAP,
      CLOUD_Y + 1.5 * GAP
  );
  ctx.fillText(
      `Список результатов:`,
      CLOUD_X + GAP,
      CLOUD_Y + 2.5 * GAP
  );

  for (let i = 0; i < names.length; i++) {
    let calcPlayerX = CLOUD_X + 2 * GAP + (BAR_WIDTH + BAR_GAP) * i;
    let calcBarHeight = (BAR_HEIGHT_MAX * times[i]) / maxTime;
    //   maxTime     times[i]
    // ----------- = --------
    //  BAR_HEIGHT        X
    //  X = (BAR_HEIGHT * times[i]) / maxTime

    let colorBar = `hsl(240, ` + Math.random() * 100 + `%` + `, 50%)`;

    ctx.fillStyle = `#000`;
    ctx.fillText(
        names[i],
        calcPlayerX,
        CLOUD_Y + CLOUD_HEIGHT - GAP
    );
    ctx.fillText(
        Math.round(times[i]),
        calcPlayerX,
        CLOUD_Y + CLOUD_HEIGHT - 2 * GAP - calcBarHeight - 0.5 * GAP
    );

    ctx.fillStyle = (names[i] === `Вы`) ? `rgba(255, 0, 0, 1)` : colorBar;
    // Синий цвет: rgba(0, 0, 255, 1) или hsl(240, 100%, 50%)

    ctx.fillRect(
        calcPlayerX,
        CLOUD_Y + CLOUD_HEIGHT - 2 * GAP,
        BAR_WIDTH,
        -calcBarHeight
    );
  }
};
