
var MouseCoords = {
	// X-координата
	getX: function(e)
	{
		if (e.pageX) return e.pageX;
		else if (e.clientX)
		  return e.clientX+(document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft;
	  return 0;
	},

	// Y-координата
	getY: function(e)
	{
		if (e.pageY) return e.pageY;
		else if (e.clientY)
			return e.clientY+(document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop;
		return 0;
	}
}

document.onmousemove = function(e)
{
	if (!e) e = window.event;

  var discount = document.getElementById('discount');
  var discountL = discount.getBoundingClientRect().left;
  var discountT = discount.getBoundingClientRect().top;
  var discountR = discount.getBoundingClientRect().right;
  var discountB = discount.getBoundingClientRect().bottom;
  var w = document.documentElement.clientWidth,
      h = document.documentElement.clientHeight;
			discount.style.transition = '0.2s';

	if (MouseCoords.getX(e) - discountL > -200 && MouseCoords.getX(e) - discountL < 10 &&
		 (MouseCoords.getY(e) > discountT && MouseCoords.getY(e) < discountB))
		 discount.style.left = discount.offsetLeft + 100 + 'px'; else
  if (MouseCoords.getX(e) - discountR > 0 && MouseCoords.getX(e) - discountR < 200 &&
		 (MouseCoords.getY(e) > discountT && MouseCoords.getY(e) < discountB))
		 discount.style.left = discount.offsetLeft - 100 + 'px'; else
  if (MouseCoords.getY(e) - discountT > -200 && MouseCoords.getY(e) - discountT < 10 &&
		 (MouseCoords.getX(e) > discountL && MouseCoords.getX(e) < discountR))
		 discount.style.top = discount.offsetTop + 100 + 'px'; else
  if (MouseCoords.getY(e) - discountB > 0 && MouseCoords.getY(e) - discountB < 200 &&
		 (MouseCoords.getX(e) > discountL && MouseCoords.getX(e) < discountR))
		 discount.style.top = discount.offsetTop - 100 + 'px'; else
	if (MouseCoords.getY(e) > discountT + 5  && MouseCoords.getY(e) < discountB - 5 &&
	 		MouseCoords.getX(e) > discountL + 5 && MouseCoords.getX(e) < discountR - 5)
			discount.style.top = discount.offsetTop + 100 + 'px';

  var prevTop = discount.offsetTop;
	var prevLeft = discount.offsetLeft;

	if (discount.offsetLeft > w) {
			discount.style.transition = '0s';
			discount.style.top = prevTop + 'px';
			discount.style.left = '100px';
  }

	if (discount.offsetLeft < 0) {
		discount.style.transition = '0s';
		discount.style.left = w - 100 + 'px';
		discount.style.top = prevTop + 'px';
	}

	if (discount.offsetTop > h) {
		discount.style.transition = '0s';
		discount.style.left = prevLeft + 'px';
		discount.style.top = '100px';
	}

	if (discount.offsetTop < 0) {
		discount.style.transition = '0s';
		discount.style.left = prevLeft + 'px';
		discount.style.top = h - 100 + 'px';
	}

}
