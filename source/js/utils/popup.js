const body = document.querySelector('body');
const callBtn = document.querySelector('.page__header-call-btn');
const popupContainer = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__close');

function popup() {
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
}

function popupSuccess() {
  popupContainer.classList.add('visually-hidden');
  body.classList.remove('scroll-lock');
}

export {popup};
export {popupSuccess};
