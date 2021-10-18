'use strict';

(function () {
  const MAX_SIMILAR_WIZARD_COUNT = 4;
  const getRandomInt = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min;
  };
  window.data = {
    WIZARD_COAT_COLORS: [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`],
    WIZARD_EYES_COLORS: [`black`, `red`, `blue`, `yellow`, `green`],
    WIZARD_FIREBALL_COLORS: [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`],
    getRandomArrElement: (arr) => {
      return arr[getRandomInt(0, arr.length - 1)];
    }
  };
  const userDialog = document.querySelector(`.setup`);
  const similarListElement = userDialog.querySelector(`.setup-similar-list`);
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content;
  const renderWizard = (wizard) => {
    const wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
    return wizardElement;
  };
  const successHandler = (wizards) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(window.data.getRandomArrElement(wizards)));
    }
    similarListElement.appendChild(fragment);
    userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
  };
  const errorHandler = (errorMessage) => {
    const node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red; position: absolute; left: 0; right: 0; font-size: 30px;`;
    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };
  window.backend.load(successHandler, errorHandler);
})();
