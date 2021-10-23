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
  const render = (wizards) => {
    const takeNumber = wizards.length > MAX_SIMILAR_WIZARD_COUNT ? MAX_SIMILAR_WIZARD_COUNT : wizards.length;
    similarListElement.innerHTML = ``;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
  };
  const getRank = function (wizard) {
    let rank = 0;
    if (wizard.colorCoat === window.form.coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.form.eyesColor) {
      rank += 1;
    }
    return rank;
  };
  const namesComparator = (left, right) => {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };
  window.updateWizards = () => {
    const sameCoatWizards = wizards.sort((left, right) => {
      let rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    });
    render(sameCoatWizards);
  };
  let wizards = [];
  const successHandler = (data) => {
    wizards = data;
    window.updateWizards();
  };
  const errorHandler = (errorMessage) => {
    const node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red; position: absolute; left: 0; right: 0; font-size: 30px;`;
    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };
  window.backend.load(successHandler, errorHandler);
})();
