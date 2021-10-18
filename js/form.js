'use strict';

(function () {
  const wizard = document.querySelector(`.setup-wizard-appearance`);
  const wizardCoat = wizard.querySelector(`.wizard-coat`);
  const wizardEyes = wizard.querySelector(`.wizard-eyes`);
  const wizardCoatColorInput = wizard.querySelector(`.coat-color-input`);
  const wizardEyesColorInput = wizard.querySelector(`.eyes-color-input`);
  const wizardFireball = document.querySelector(`.setup-fireball-wrap`);
  const fireballInput = wizardFireball.querySelector(`input`);
  const userDialog = document.querySelector(`.setup`);
  const form = userDialog.querySelector(`.setup-wizard-form`);

  wizardCoat.addEventListener(`click`, () => {
    const coatColor = window.data.getRandomArrElement(window.data.WIZARD_COAT_COLORS);
    wizardCoatColorInput.value = coatColor;
    wizardCoat.style.fill = coatColor;
  });
  wizardEyes.addEventListener(`click`, () => {
    const eyesColor = window.data.getRandomArrElement(window.data.WIZARD_EYES_COLORS);
    wizardEyesColorInput.value = eyesColor;
    wizardEyes.style.fill = eyesColor;
  });
  wizardFireball.addEventListener(`click`, () => {
    const fireballColor = window.data.getRandomArrElement(window.data.WIZARD_FIREBALL_COLORS);
    fireballInput.value = fireballColor;
    wizardFireball.style.background = fireballColor;
  });

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
})();
