window.onload = function() {
  var windowHeight = window.innerHeight;
  var scrolled = 0;
  var totop = document.getElementById('to-top');
  var title = document.getElementById('title-to-top');
  var isTotop = true;
  var wasClick = false;

  document.addEventListener('scroll', function() {
      scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (!wasClick) hideTodown();
      (scrolled >= windowHeight) ? showTotop() : showTodown();
      // if (scrolled > 0 && title.innerHTML === ' Вниз ') hideTodown();
  });

  totop.addEventListener('click', function () {
    wasClick = true;
    if (isTotop) {
      this.prevPosition = scrolled;
      window.scrollTo( 0, 0 );
      isTotop = false;
    } else window.scrollTo( 0, this.prevPosition );
  });

  function showTotop() {
    totop.classList.remove('hidden');
    totop.classList.add('active');
    totop.classList.remove('down');
    title.innerHTML = ' Вверх ';
    isTotop = true;
  }

  function showTodown() {
     totop.classList.add('down');
     title.innerHTML = ' Вниз ';
     isTotop = false;
  }

  function hideTodown() {
    totop.classList.remove('active');
    totop.classList.add('hidden');
  }
}
