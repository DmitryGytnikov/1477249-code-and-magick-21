'use strict';

const setupOpen = document.querySelector(`.setup-open`);
const setupDialogElement = document.querySelector(`.setup`);
const userDialog = document.querySelector(`.setup`);
const setupClose = userDialog.querySelector(`.setup-close`);
const wizardCoat = userDialog.querySelector(`.wizard-coat`);
const wizardEyes = userDialog.querySelector(`.wizard-eyes`);
const wizardFireball = userDialog.querySelector(`.setup-fireball-wrap`);
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
  wizardCoat.addEventListener(`click`, window.form.onCoatClickChange);
  wizardEyes.addEventListener(`click`, window.form.onEyesClickChange);
  wizardFireball.addEventListener(`click`, window.form.onFireballClickChange);
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
  wizardCoat.removeEventListener(`click`, window.form.onCoatClickChange);
  wizardEyes.removeEventListener(`click`, window.form.onEyesClickChange);
  wizardFireball.removeEventListener(`click`, window.form.onFireballClickChange);
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
