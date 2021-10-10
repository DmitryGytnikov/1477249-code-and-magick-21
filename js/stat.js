'use strict';

const Cloud = {
  WIDTH: 420,
  HEIGHT: 270,
  X: 100,
  Y: 10
};

const GAP = 20;
const Bar = {
  WIDTH: 40,
  HEIGHT_MAX: 150,
  GAP: 50
};
const COLOR_BAR_YOU = `rgba(255, 0, 0, 1)`;

const renderCloud = function (ctx, x, y, colorCloud, colorShadow) {
  ctx.fillStyle = colorShadow;
  ctx.fillRect(x + 0.5 * GAP, y + 0.5 * GAP, Cloud.WIDTH, Cloud.HEIGHT);
  ctx.fillStyle = colorCloud;
  ctx.fillRect(x, y, Cloud.WIDTH, Cloud.HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {

  const maxTime = Math.max(...times);
  // console.log(times);
  renderCloud(
      ctx,
      Cloud.X,
      Cloud.Y,
      `#fff`,
      `rgba(0, 0, 0, 0.7)`
  );

  ctx.fillStyle = `#000`;
  ctx.font = `16px "PT Mono"`;

  ctx.fillText(
      `Ура вы победили!`,
      Cloud.X + GAP,
      Cloud.Y + 1.5 * GAP
  );
  ctx.fillText(
      `Список результатов:`,
      Cloud.X + GAP,
      Cloud.Y + 2.5 * GAP
  );

  for (let i = 0; i < names.length; i++) {

    const calcPlayerX = Cloud.X + 2 * GAP + (Bar.WIDTH + Bar.GAP) * i;
    const calcBarHeight = (Bar.HEIGHT_MAX * times[i]) / maxTime;
    const getColorBar = `hsl(240, ` + Math.random() * 100 + `%` + `, 50%)`;

    ctx.fillStyle = `#000`;
    ctx.fillText(
        names[i],
        calcPlayerX,
        Cloud.Y + Cloud.HEIGHT - GAP
    );
    ctx.fillText(
        Math.round(times[i]),
        calcPlayerX,
        Cloud.Y + Cloud.HEIGHT - 2 * GAP - calcBarHeight - 0.5 * GAP
    );

    ctx.fillStyle = (names[i] === `Вы`) ? COLOR_BAR_YOU : getColorBar;

    ctx.fillRect(
        calcPlayerX,
        Cloud.Y + Cloud.HEIGHT - 2 * GAP,
        Bar.WIDTH,
        -calcBarHeight
    );
  }
};
