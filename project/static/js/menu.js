
  var header = document.getElementsByTagName('header')[0];
  var iconMenu = document.getElementById('icon-menu');
  var menuList = document.getElementById('menu-list');

  menuList.style.top = header.offsetHeight + 'px';
  iconMenu.addEventListener('click', function () {
    menuList.classList.toggle('show-menu');
  });
