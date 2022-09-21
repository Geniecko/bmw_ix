

window.addEventListener('DOMContentLoaded', () => {
  const mobileTriggerOpen = document.getElementById('navTrigger--open');
  const mobileTriggerClose = document.getElementById('navTrigger--close');
  const mobileMenu = document.querySelector('.navigation__mobile');
  const mobileNavLinks = document.querySelectorAll('.navigation__mobile__link');
  const mobileButton = document.querySelector('.navigation__mobile__button');

  function showMobileMenu() {
    mobileMenu.classList.add('is-open');
    document.body.classList.add('disable-scroll');
  }

  function hideMobileMenu() {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('disable-scroll');

    mobileNavLinks.forEach(link => link.removeEventListener('click', hideMobileMenu));
    mobileButton.removeEventListener('click', hideMobileMenu);
  }

  mobileTriggerOpen.addEventListener('click', () => {
    showMobileMenu();

    mobileNavLinks.forEach(link => link.addEventListener('click', hideMobileMenu));
    mobileButton.addEventListener('click', hideMobileMenu);
  });

  mobileTriggerClose.addEventListener('click', hideMobileMenu);
});
