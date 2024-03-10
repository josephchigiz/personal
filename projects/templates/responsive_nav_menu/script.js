const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const topNavMenu = document.querySelector('#topNavMenu');
const body = document.querySelectorAll('body');

topNavMenu.style.transition = 'none'; //fix menu showing while resizing

function openMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'true');
  topNavMenu.removeAttribute('style');
  bodyScrollUpgrade.disableBodyScroll(body); //prevents accidental body scroll while in menu
  btnClose.focus(); //auto focus on close button when menu opened
}

function closeMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'false');
  bodyScrollUpgrade.enableBodyScroll(body); //enables body scroll again
  btnOpen.focus(); //focus on open btn by default when menu closed

  setTimeout(() => {
    topNavMenu.style.transition = 'none';
  }, 500);
}

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);