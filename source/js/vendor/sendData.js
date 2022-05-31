import {popupSuccess} from './popup';

function sendData() {
  const sendBtn = document.querySelector('.popup__send-button');
  const inputName = document.getElementById('popup__name');
  const inputPhone = document.getElementById('popup__phone');
  const inputCheckbox = document.getElementById('checkbox-popup');
  const alertWrapper = document.querySelector('.alert');
  const alertError = document.querySelector('.alert__error');
  const questionButton = document.getElementById('questions__button');
  const questionName = document.getElementById('questions__name');
  const questionPhone = document.getElementById('questions__phone');
  const questionCheckbox = document.getElementById('checkbox-form');
  const questionText = document.getElementById('questions__text');
  const popupText = document.getElementById('popup__text');
  const regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  let newName = '';
  let newPhone = '';

  function send(data) {
    fetch('https://echo.htmlacademy.ru/', {
      method: 'POST',
      body: JSON.stringify(data),
    }
    );
  }

  sendBtn.addEventListener('click', () => {
    if (regex.test(inputPhone.value)) {
      newPhone = inputPhone.value;
    } else {
      newPhone = '';
    }
    if (inputName.value) {
      newName = inputName.value;
    } else {
      newName = '';
    }
    if (newName && newPhone && inputCheckbox.checked) {
      send({
        name: newName,
        phone: newPhone,
      });
      popupSuccess();
      inputPhone.value = '';
      inputName.value = '';
      inputCheckbox.checked = false;
      popupText.value = '';
      alertWrapper.style.display = 'block';
      setTimeout(() => {
        alertWrapper.style.display = 'none';
      }, 1000);
    } else {
      alertError.style.display = 'block';
      setTimeout(() => {
        alertError.style.display = 'none';
      }, 1000);
    }
  });

  questionButton.addEventListener('click', () => {
    if (regex.test(questionPhone.value)) {
      newPhone = questionPhone.value;
    } else {
      newPhone = '';
    }
    if (questionName.value) {
      newName = questionName.value;
    } else {
      newName = '';
    }
    if (newName && newPhone && questionCheckbox.checked) {
      send({
        name: newName,
        phone: newPhone,
      });
      popupSuccess();
      alertWrapper.style.display = 'block';
      questionPhone.value = '';
      questionName.value = '';
      questionText.value = '';
      questionCheckbox.checked = false;
      setTimeout(() => {
        alertWrapper.style.display = 'none';
      }, 1000);
    } else {
      alertError.style.display = 'block';
      setTimeout(() => {
        alertError.style.display = 'none';
      }, 1000);
    }
  });
}

export {sendData};
