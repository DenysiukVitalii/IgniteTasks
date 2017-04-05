var menuLinks = document.getElementsByClassName('menu-link');
    var collectionOffsetTop = {};
    var selector;
    var element;

    var scrolled = 0 || window.pageYOffset || document.documentElement.scrollTop;
    var SCROLL_DURATION = 200;

    for (var i = 0; i < menuLinks.length; i++) {
      selector = menuLinks[i].dataset.scrollTo;
      element = document.querySelectorAll(selector)[0];
      collectionOffsetTop[selector] = element.offsetTop;
      menuLinks[i].onclick = function() {
        toggleScroll(collectionOffsetTop[this.dataset.scrollTo], scrolled);
      }
    }

    document.addEventListener('scroll', function() {
      scrolled = window.pageYOffset || document.documentElement.scrollTop;
    });

    function toggleScroll(target, scrolled) {
      var distance = Math.abs(target - scrolled);
      var initialDistance = distance;
      var speed = 0;
      var step = 2 * distance / Math.pow(SCROLL_DURATION, 2) * 10;

      var scrollInterval = setInterval(function() {
        distance -= speed;
        if (distance >= initialDistance / 2) {
          speed += step;
        } else if (distance < initialDistance / 2) {
          speed = speed > step ? speed - step : speed;
        }
        var positionY = scrolled < target ? target - distance : target + distance;
        window.scrollTo(0, positionY);
        if (distance <= 0) {
          clearInterval(scrollInterval);
        }
      }, 10);
    }
