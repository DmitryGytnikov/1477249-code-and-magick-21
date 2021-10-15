'use strict';

// const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
// const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
// const WIZARD_COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
// const WIZARD_EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
// const WIZARD_FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
// const WIZARDS_LENGTH = 4;
// const MIN_NAME_LENGTH = 2;
// const MAX_NAME_LENGTH = 23;

// const setupOpen = document.querySelector(`.setup-open`);
// const userDialog = document.querySelector(`.setup`);
// userDialog.classList.remove(`hidden`);
// const setupClose = userDialog.querySelector(`.setup-close`);

// const onPopupEscPress = (evt) => {
//   if (evt.key === `Escape`) {
//     evt.preventDefault();
//     closePopup();
//   }
// };
// const openPopup = () => {
//   userDialog.classList.remove(`hidden`);
//   document.addEventListener(`keydown`, onPopupEscPress);
// };

// const closePopup = () => {
//   userDialog.classList.add(`hidden`);
//   document.removeEventListener(`keydown`, onPopupEscPress);
// };
// setupOpen.addEventListener(`click`, () => {
//   openPopup();
// });
// setupOpen.addEventListener(`keydown`, (evt) => {
//   if (evt.key === `Enter`) {
//     openPopup();
//   }
// });
// setupClose.addEventListener(`click`, () => {
//   closePopup();
// });
// setupClose.addEventListener(`keydown`, (evt) => {
//   if (evt.key === `Enter`) {
//     closePopup();
//   }
// });


// const similarListElement = document.querySelector(`.setup-similar-list`);
// const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

// const getRandomInt = (min, max) => {
//   return Math.round(Math.random() * (max - min)) + min;
// };

// const getRandomBoolean = () => {
//   return Boolean(Math.round(Math.random()));
// };

// const getRandomArrElement = (arr) => {
//   return arr[getRandomInt(0, arr.length - 1)];
// };

// const getNewWizard = () => {
//   let nameSwap = getRandomArrElement(WIZARD_NAMES) + ` ` + getRandomArrElement(WIZARD_SURNAMES);
//   if (getRandomBoolean()) {
//     nameSwap = getRandomArrElement(WIZARD_SURNAMES) + ` ` + getRandomArrElement(WIZARD_NAMES);
//   }
//   return {
//     name: nameSwap,
//     coatColor: getRandomArrElement(WIZARD_COAT_COLORS),
//     eyesColor: getRandomArrElement(WIZARD_EYES_COLORS)
//   };
// };

// const wizards = [];
// for (let i = 0; i < WIZARDS_LENGTH; i++) {
//   wizards[i] = getNewWizard();
// }

// console.log(wizards);

// const renderWizard = (wizard) => {
//   const wizardElement = similarWizardTemplate.cloneNode(true);

//   wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
//   wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
//   wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

//   return wizardElement;
// };

// const fragment = document.createDocumentFragment();

// for (let i = 0; i < wizards.length; i++) {
//   fragment.appendChild(renderWizard(wizards[i]));
// }
// // console.log(fragment);

// similarListElement.appendChild(fragment);
// // console.log(similarListElement);

// document.querySelector(`.setup-similar`).classList.remove(`hidden`);

// const userNameInput = document.querySelector(`.setup-user-name`);
// userNameInput.addEventListener(`input`, () => {
//   const valueLength = userNameInput.value.length;
//   if (valueLength < MIN_NAME_LENGTH) {
//     userNameInput.setCustomValidity(`Ещё ${MIN_NAME_LENGTH - valueLength} симв.`);
//   } else if (valueLength > MAX_NAME_LENGTH) {
//     userNameInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_NAME_LENGTH} симв.`);
//   } else {
//     userNameInput.setCustomValidity(``);
//   }
//   userNameInput.reportValidity();
// });

// const wizard = document.querySelector(`.setup-wizard-appearance`);
// const wizardCoat = wizard.querySelector(`.wizard-coat`);
// const wizardEyes = wizard.querySelector(`.wizard-eyes`);
// const wizardCoatColorInput = wizard.querySelector(`.coat-color-input`);
// const wizardEyesColorInput = wizard.querySelector(`.eyes-color-input`);
// const wizardFireball = document.querySelector(`.setup-fireball-wrap`);
// const fireballInput = wizardFireball.querySelector(`input`);

// wizardCoat.addEventListener(`click`, () => {
//   const coatColor = getRandomArrElement(WIZARD_COAT_COLORS);
//   wizardCoatColorInput.value = coatColor;
//   wizardCoat.style.fill = coatColor;
// });
// wizardEyes.addEventListener(`click`, () => {
//   const eyesColor = getRandomArrElement(WIZARD_EYES_COLORS);
//   wizardEyesColorInput.value = eyesColor;
//   wizardEyes.style.fill = eyesColor;
// });
// wizardFireball.addEventListener(`click`, () => {
//   const fireballColor = getRandomArrElement(WIZARD_FIREBALL_COLORS);
//   fireballInput.value = fireballColor;
//   wizardFireball.style.background = fireballColor;
// });
