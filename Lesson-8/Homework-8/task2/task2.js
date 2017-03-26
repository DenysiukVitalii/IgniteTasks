var buttons =  document.body.querySelectorAll('button');


function allEventListeners(){
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].dataset.tooltip) {
      buttons[i].addEventListener('mouseover', showTip, false);
      buttons[i].addEventListener('mouseout', hideTip, false);
    }
  }
}


function showTip() {
  var tip = document.createElement('span');
  tip.id = 'tip';
  tip.innerHTML = this.dataset.tooltip;
  tip.style.left = this.getBoundingClientRect().left + 'px';
  tip.style.top = (~tip.innerHTML.indexOf('<br>')) ? this.getBoundingClientRect().top - this.offsetHeight * 2 + 'px' :
   this.getBoundingClientRect().top - this.offsetHeight - 5 + 'px';
  this.insertAdjacentElement('beforeBegin', tip);
};


function hideTip() {
  var tip = document.getElementById('tip');
  tip.remove();
};

allEventListeners();
