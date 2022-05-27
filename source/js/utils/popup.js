function popup() {
  const body = document.querySelector('body');
  const callBtn = document.querySelector('.page__header-call-btn');
  const popupContainer = document.querySelector('.popup');
  const sendBtn = document.querySelector('.popup__send-button');

  function sendData(data) {
    fetch('https://echo.htmlacademy.ru/', {
      method: 'POST',
      body: JSON.stringify(data),
    }
    );
  }

  callBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
    popupContainer.classList.remove('visually-hidden');
    body.classList.add('scroll-lock');
  });

  sendBtn.addEventListener('click', () => {
    sendData({
      name: 123,
      phone: 123,
    });
  });


}

export {popup};
