(function () {
  'use strict';
  angular
  .module('chipsApp', ['ngMaterial', 'ngMessages'])

  .controller('chipsCtrl', function($scope) {
    $scope.items = ['Apple', 'Banana', 'Orange'];
    $scope.createJSON = function () {
      var arrayObj = [];
      var model = $scope.items;

      model.forEach((chip) => {
          arrayObj.push({name: chip});
      })

      var objJSON = arrayObj.reduce((prev, cur, i) => {
        prev[i] = cur;
        return prev;
      }, {});

      setTimeout(function() {alert("Data sent! Check console.")}, 500);

      var elementsOfJSON = JSON.stringify(objJSON, "", 2);
      console.log(elementsOfJSON);
    }
  });
})();
