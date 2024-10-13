document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.holberton_school-icon-menu');

  function toggleNavVisibility() {
    const showNav = document.getElementById('show-nav');
    showNav.style.display = showNav.style.display === 'none' ? 'block' : 'none';
  }

  function rotateMenu() {
    const rotate = document.getElementById('.navi span');
    rotate.style.transform = rotate.style.transform === 'none' ? 'rotate(90deg)' : 'none'
  }

  menuIcon.addEventListener('touch', toggleNavVisibility, rotateMenu);

  if (window.innerWidth <= 768) {
    menuIcon.addEventListener('touchstart', toggleNavVisibility);
  }
});
