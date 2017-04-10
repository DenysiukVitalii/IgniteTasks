var user = {
  firstName: "Вася",
  sayHi: function() {
    console.log( this.firstName );
  }
};

var g = user.sayHi.bind(user);
g();
