'use strict';

const DEBOUNCE_INTERVAL = 500;
const wizard = document.querySelector(`.setup-wizard-appearance`);
const wizardCoat = wizard.querySelector(`.wizard-coat`);
const wizardEyes = wizard.querySelector(`.wizard-eyes`);
const wizardCoatColorInput = wizard.querySelector(`.coat-color-input`);
const wizardEyesColorInput = wizard.querySelector(`.eyes-color-input`);
const wizardFireball = document.querySelector(`.setup-fireball-wrap`);
const fireballInput = wizardFireball.querySelector(`input`);
const userDialog = document.querySelector(`.setup`);
const form = userDialog.querySelector(`.setup-wizard-form`);

const debounce = (cb) => {
  let lastTimeout = null;
  return (...args) => {
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }
    lastTimeout = setTimeout(() => {
      cb(...args);
    }, DEBOUNCE_INTERVAL);
  };
};
const onCoatChange = debounce(() => {
  window.updateWizards();
});
const onCoatClickChange = () => {
  const newColor = window.data.getRandomArrElement(window.data.WIZARD_COAT_COLORS);
  wizardCoatColorInput.value = newColor;
  wizardCoat.style.fill = newColor;
  window.form.coatColor = newColor;
  onCoatChange();
};
const onEyesChange = debounce(() => {
  window.updateWizards();
});
const onEyesClickChange = () => {
  const newColor = window.data.getRandomArrElement(window.data.WIZARD_EYES_COLORS);
  wizardEyesColorInput.value = newColor;
  wizardEyes.style.fill = newColor;
  window.form.eyesColor = newColor;
  onEyesChange();
};
const onFireballClickChange = () => {
  const newColor = window.data.getRandomArrElement(window.data.WIZARD_FIREBALL_COLORS);
  fireballInput.value = newColor;
  wizardFireball.style.background = newColor;
};
window.form = {
  coatColor: `rgb(101, 137, 164)`,
  eyesColor: `black`,
  onCoatClickChange,
  onEyesClickChange,
  onFireballClickChange
};
const successHandler = () => {
  userDialog.classList.add(`hidden`);
};
const errorHandler = function (errorMessage) {
  const node = document.createElement(`div`);
  node.style = `z-index: 200; margin: 0 auto; text-align: center; background-color: green; position: absolute; left: 0; right: 0; font-size: 40px; color: black;`;
  node.textContent = errorMessage;
  document.body.insertAdjacentElement(`afterbegin`, node);
};
const submitHandler = (evt) => {
  window.backend.save(new FormData(form), successHandler, errorHandler);
  evt.preventDefault();
};
form.addEventListener(`submit`, submitHandler);
