function toggle() {
  const companyButton = document.querySelector('.info__company-more-btn');
  const accordion = document.querySelector('.info__company-description--accordion');
  const mobileText = document.querySelector('.info__company-text--mobile');
  const footerButtonSections = document.querySelector('.site__show-more');
  const footer = document.querySelector('.footer');
  const footerContainerSections = document.querySelector('.footer__sections-list');
  const footerButtonPhones = document.querySelector('.phones__show-more');
  const footerContainerPhones = document.querySelector('.footer__contacts-list');
  const adress = document.querySelector('.footer__contacts-adress');
  footerButtonPhones.classList.remove('phones__show-more--opened');
  footerContainerPhones.classList.remove('footer__contacts-list--opened');
  adress.classList.remove('footer__contacts-adress--opened');
  footerButtonSections.classList.remove('site__show-more--opened');
  footerContainerSections.classList.remove('footer__sections-list--opened');
  footer.classList.add('footer--js');
  accordion.classList.remove('info__company-description--opened');
  accordion.classList.add('info__company-description--hidden');
  companyButton.classList.remove('info__company-more-btn--hidden');
  mobileText.classList.remove('info__company-text--mobile--opened');

  companyButton.addEventListener('click', () => {
    mobileText.classList.toggle('info__company-text--mobile--opened');
    accordion.classList.toggle('info__company-description--opened');
  });

  footerButtonSections.addEventListener('click', () => {
    if (footerContainerPhones.classList.contains('footer__contacts-list--opened')) {
      footerButtonPhones.classList.remove('phones__show-more--opened');
      footerContainerPhones.classList.remove('footer__contacts-list--opened');
      adress.classList.remove('footer__contacts-adress--opened');
    }
    footerButtonSections.classList.toggle('site__show-more--opened');
    footerContainerSections.classList.toggle('footer__sections-list--opened');
  });

  footerButtonPhones.addEventListener('click', () => {
    if (footerContainerSections.classList.contains('footer__sections-list--opened')) {
      footerButtonSections.classList.remove('site__show-more--opened');
      footerContainerSections.classList.remove('footer__sections-list--opened');
    }
    adress.classList.toggle('footer__contacts-adress--opened');
    footerContainerPhones.classList.toggle('footer__contacts-list--opened');
    footerButtonPhones.classList.toggle('phones__show-more--opened');
  });
}

export {toggle};
