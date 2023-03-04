// Получаем ссылки на элементы страницы
const headerNav = document.querySelector('.header-nav');
const burgerBtn = document.querySelector('.burger-icon');
const closeBtn = document.querySelector('.close-icon');
const menuLinks = document.querySelectorAll('.header-link');
const switchToggle = document.querySelector('.switch input[type="checkbox"]');
const body = document.body;
const upBtn = document.querySelector('.up-btn');

// Функция для открытия меню
function openHeaderNav() {
  headerNav.classList.add('open');
  body.style.overflow = 'hidden'; // устанавливаем стиль для body
}

// Функция для закрытия меню
function closeHeaderNav() {
  headerNav.classList.remove('open');
  body.style.overflow = ''; // удаляем стиль для body
}

// Функция для проверки мобильного устройства
function isMobile() {
  return window.innerWidth < 992;
}

// Добавляем обработчик клика для каждой ссылки в меню
menuLinks.forEach(link => link.addEventListener('click', () => {
  if (isMobile()) {
    closeHeaderNav(); // закрываем меню на мобильном устройстве при клике на ссылку
  }
}));

// Функция для переключения темы страницы
function toggleDarkTheme() {
  const isDark = switchToggle.checked;
  body.classList.toggle('dark', isDark); // добавляем/удаляем класс 'dark' в зависимости от значения переключателя
  localStorage.setItem('darkTheme', isDark ? 'on' : 'off'); // сохраняем состояние темной темы в Local Storage
}

// Добавляем обработчик изменения состояния переключателя темы
switchToggle.addEventListener('change', toggleDarkTheme);

// Устанавливаем тему страницы при загрузке
window.addEventListener('load', () => {
  const isDark = localStorage.getItem('darkTheme') === 'on';
  body.classList.toggle('dark', isDark); // добавляем/удаляем класс 'dark' в зависимости от значения из Local Storage
  switchToggle.checked = isDark; // устанавливаем состояние переключателя
});

// Функция для прокрутки страницы вверх
function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Добавляем обработчик клика для кнопки прокрутки страницы вверх
upBtn.addEventListener('click', scrollTop);

// Добавляем обработчики клика для кнопок открытия/закрытия меню
burgerBtn.addEventListener('click', openHeaderNav);
closeBtn.addEventListener('click', closeHeaderNav);


