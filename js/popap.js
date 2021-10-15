'use strict';

(function () {
  const setupOpen = document.querySelector(`.setup-open`);
  const setupDialogElement = document.querySelector(`.setup`);
  const userDialog = document.querySelector(`.setup`);
  const setupClose = userDialog.querySelector(`.setup-close`);
  const defaultDialogPosition = {
    x: setupDialogElement.style.left,
    y: setupDialogElement.style.top
  };
  const resetDialog = () => {
    setupDialogElement.style.left = defaultDialogPosition.x;
    setupDialogElement.style.top = defaultDialogPosition.y;
  };
  const openPopup = () => {
    resetDialog();
    userDialog.classList.remove(`hidden`);
    document.addEventListener(`keydown`, onPopupEscPress);
  };
  const onPopupEscPress = (evt) => {
    if (evt.key === `Escape`) {
      evt.preventDefault();
      closePopup();
    }
  };
  const closePopup = () => {
    userDialog.classList.add(`hidden`);
    document.removeEventListener(`keydown`, onPopupEscPress);
  };
  setupOpen.addEventListener(`click`, () => {
    openPopup();
  });
  setupOpen.addEventListener(`keydown`, (evt) => {
    if (evt.key === `Enter`) {
      openPopup();
    }
  });
  setupClose.addEventListener(`click`, () => {
    closePopup();
  });
  setupClose.addEventListener(`keydown`, (evt) => {
    if (evt.key === `Enter`) {
      closePopup();
    }
  });
})();
