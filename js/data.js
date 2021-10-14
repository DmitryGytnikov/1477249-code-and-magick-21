'use strict';

(function () {
  const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
  const WIZARDS_LENGTH = 4;

  const getRandomInt = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min;
  };
  const getRandomBoolean = () => {
    return Boolean(Math.round(Math.random()));
  };

  window.data = {
    WIZARD_COAT_COLORS: [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`],
    WIZARD_EYES_COLORS: [`black`, `red`, `blue`, `yellow`, `green`],
    WIZARD_FIREBALL_COLORS: [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`],
    getRandomArrElement: (arr) => {
      return arr[getRandomInt(0, arr.length - 1)];
    }
  };

  const similarListElement = document.querySelector(`.setup-similar-list`);
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

  const getNewWizard = () => {
    let nameSwap = `${window.data.getRandomArrElement(WIZARD_NAMES)} ${window.data.getRandomArrElement(WIZARD_SURNAMES)}`;
    if (getRandomBoolean()) {
      nameSwap = `${window.data.getRandomArrElement(WIZARD_SURNAMES)} ${window.data.getRandomArrElement(WIZARD_NAMES)}`;
    }
    return {
      name: nameSwap,
      coatColor: window.data.getRandomArrElement(window.data.WIZARD_COAT_COLORS),
      eyesColor: window.data.getRandomArrElement(window.data.WIZARD_EYES_COLORS)
    };
  };

  const wizards = [];
  for (let i = 0; i < WIZARDS_LENGTH; i++) {
    wizards[i] = getNewWizard();
  }

  const renderWizard = (wizard) => {
    const wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
    return wizardElement;
  };

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  document.querySelector(`.setup-similar`).classList.remove(`hidden`);
})();
