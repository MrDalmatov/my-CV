const headerNav = document.querySelector('.header-nav');
const burgerBtn = document.querySelector('.burger-icon');
const closeBtn = document.querySelector('.close-icon');
const menuLinks = document.querySelectorAll('.header-link');

function openHeaderNav() {
  headerNav.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeHeaderNav() {
  headerNav.classList.remove('open');
  document.body.style.overflow = 'auto';
}

function isMobile() {
  return window.innerWidth < 768;
}

menuLinks.forEach(el => el.addEventListener('click', (e) => {
  if (isMobile()) {
    closeHeaderNav();
  }
}));

burgerBtn.addEventListener('click', openHeaderNav);
closeBtn.addEventListener('click', closeHeaderNav);

