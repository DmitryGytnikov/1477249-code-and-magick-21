'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_GAP = 10;
const CLOUD_PADDING = 15;
const CLOUD_WIDTH_CENTER = CLOUD_WIDTH / 2;
const CLOUD_HEIGHT_CENTER = CLOUD_HEIGHT / 2;
const CLOUD_TEXT_X = 120;
const CLOUD_TEXT_Y = 35;
const CLOUD_TEXT_HEIGHT = 20;

const FIRST_PLAYER_X = 160;
const PLAYER_NAME_Y = 260;
const BAR_WIDTH = 40;
const NAME_HEIGHT = 20;
const TIMES_GAP_Y = 10;
const COLUMN_GAP = 50;
const BAR_X_GAP = COLUMN_GAP + BAR_WIDTH;
const BAR_Y_BOTTOM = PLAYER_NAME_Y - NAME_HEIGHT;
const TIMES_Y_WITHOUTBAR = BAR_Y_BOTTOM - TIMES_GAP_Y;
const MAX_BAR_HEIGHT = 150;

const renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + CLOUD_PADDING, y + CLOUD_HEIGHT_CENTER);
  ctx.lineTo(x, y + CLOUD_HEIGHT);
  ctx.lineTo(x + CLOUD_WIDTH_CENTER, y + CLOUD_HEIGHT - CLOUD_PADDING);
  ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
  ctx.lineTo(x + CLOUD_WIDTH - CLOUD_PADDING, y + CLOUD_HEIGHT_CENTER);
  ctx.lineTo(x + CLOUD_WIDTH, y);
  ctx.lineTo(x + CLOUD_WIDTH_CENTER, y + CLOUD_PADDING);
  ctx.closePath();
  ctx.fill();
};

window.renderStatistics = (ctx, players, times) => {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);
  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.fillText(`Ура вы победили!`, CLOUD_TEXT_X, CLOUD_TEXT_Y);
  ctx.fillText(`Список результатов:`, CLOUD_TEXT_X, CLOUD_TEXT_Y + CLOUD_TEXT_HEIGHT);

  const getMaxElement = (arr) => {
    if (arr.length === 0) {
      return false;
    } else {
      let maxElement = arr[0];
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] > maxElement) {
          maxElement = arr[i + 1];
        }
      }
      return maxElement;
    }
  };

  const maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    const barHeight = Math.round(times[i] * MAX_BAR_HEIGHT / maxTime);
    ctx.fillStyle = `#000`;
    ctx.fillText(players[i], FIRST_PLAYER_X + BAR_X_GAP * i, PLAYER_NAME_Y);
    ctx.fillText(Math.round(times[i]), FIRST_PLAYER_X + BAR_X_GAP * i, TIMES_Y_WITHOUTBAR - barHeight);
    if (players[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      ctx.fillStyle = `hsl(240, ${Math.round(Math.random() * 100)}%, 50%)`;
    }
    ctx.fillRect(FIRST_PLAYER_X + BAR_X_GAP * i, BAR_Y_BOTTOM - barHeight, BAR_WIDTH, barHeight);
  }
};
