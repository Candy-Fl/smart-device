function popup() {
  const body = document.querySelector('body');
  const callBtn = document.querySelector('.page__header-call-btn');
  const popupContainer = document.querySelector('.popup');
  const sendBtn = document.querySelector('.popup__send-button');
  const closeBtn = document.querySelector('.popup__close');

  function sendData(data) {
    fetch('https://echo.htmlacademy.ru/', {
      method: 'POST',
      body: JSON.stringify(data),
    }
    );
  }

  closeBtn.addEventListener('click', () => {
    popupContainer.classList.add('visually-hidden');
    body.classList.remove('scroll-lock');
  });

  callBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      popupContainer.classList.remove('visually-hidden');
      body.classList.add('scroll-lock');
    }, (500));
  });

  sendBtn.addEventListener('click', () => {
    sendData({
      name: 123,
      phone: 123,
    });
  });


}

export {popup};
