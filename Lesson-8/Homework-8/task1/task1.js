var login = document.getElementById('login');
var password = document.getElementById('password');
var phone = document.getElementById('phone');
var btn = document.getElementById('contact-submit');

btn.onclick = function(e) {
	e.preventDefault();
	var loginReg = /^\D+$/;
  var passwordReg = /^[^\$]+$/;
  var phoneReg = /^\d+$/;

  login.className = (!loginReg.test(login.value)) ? 'wrong' : 'correct';
  password.className =  (!passwordReg.test(password.value)) ? 'wrong' : 'correct';
  phone.className = (!phoneReg.test(phone.value)) ? 'wrong' : 'correct';
}
