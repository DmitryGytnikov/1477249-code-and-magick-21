'use strict';

const CLOUD = {
  WIDTH: 420,
  HEIGHT: 270,
  X: 100,
  Y: 10
};

const GAP = 20;
const BAR = {
  WIDTH: 40,
  HEIGHT_MAX: 150,
  GAP: 50
};
const ColorBarYou = `rgba(255, 0, 0, 1)`;

const renderCloud = function (ctx, x, y, colorCloud, colorShadow) {
  ctx.fillStyle = colorShadow;
  ctx.fillRect(x + 0.5 * GAP, y + 0.5 * GAP, CLOUD.WIDTH, CLOUD.HEIGHT);
  ctx.fillStyle = colorCloud;
  ctx.fillRect(x, y, CLOUD.WIDTH, CLOUD.HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {

  const maxTime = Math.max(...times);

  renderCloud(
      ctx,
      CLOUD.X,
      CLOUD.Y,
      `#fff`,
      `rgba(0, 0, 0, 0.7)`
  );

  ctx.fillStyle = `#000`;
  ctx.font = `16px "PT Mono"`;

  ctx.fillText(
      `Ура вы победили!`,
      CLOUD.X + GAP,
      CLOUD.Y + 1.5 * GAP
  );
  ctx.fillText(
      `Список результатов:`,
      CLOUD.X + GAP,
      CLOUD.Y + 2.5 * GAP
  );

  for (let i = 0; i < names.length; i++) {

    const calcPlayerX = CLOUD.X + 2 * GAP + (BAR.WIDTH + BAR.GAP) * i;
    const calcBarHeight = (BAR.HEIGHT_MAX * times[i]) / maxTime;
    const getColorBar = `hsl(240, ` + Math.random() * 100 + `%` + `, 50%)`;

    ctx.fillStyle = `#000`;
    ctx.fillText(
        names[i],
        calcPlayerX,
        CLOUD.Y + CLOUD.HEIGHT - GAP
    );
    ctx.fillText(
        Math.round(times[i]),
        calcPlayerX,
        CLOUD.Y + CLOUD.HEIGHT - 2 * GAP - calcBarHeight - 0.5 * GAP
    );

    ctx.fillStyle = (names[i] === `Вы`) ? ColorBarYou : getColorBar;

    ctx.fillRect(
        calcPlayerX,
        CLOUD.Y + CLOUD.HEIGHT - 2 * GAP,
        BAR.WIDTH,
        -calcBarHeight
    );
  }
};

// Я пока не представляю, как исправить последние два замечания
// ("отрисовку колонок гистограммы лучше вынести в отдельную функцию" и
//  "изначально в ТЗ текст идёт одной строкой. Хорошо бы создать метод,
//  который сам сможет делить текст на строки при наличии разделителей").
// Пожалуйста, сделай мердж этого пулреквеста (пусть и с ошибками): чтобы
//  я смог забрать изменения из репозитория Академии в свою локальную
//  ветку master, и доделать проект уже в своей локальной ветке master.
