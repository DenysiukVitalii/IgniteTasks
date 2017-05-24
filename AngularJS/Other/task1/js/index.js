
angular.module('MyApp',['ngMaterial'])

.controller('AppCtrl', function($scope) {
  $scope.items = ['checkbox1','checkbox2','checkbox3','checkbox4','checkbox5'];
  $scope.selected = [];
  $scope.toggle = function (item, list) {
    var idx = list.indexOf(item);
    if (idx > -1) {
      list.splice(idx, 1);
    }
    else {
      list.push(item);
    }
  };

  $scope.exists = function (item, list) {
    return list.indexOf(item) > -1;
  };

  $scope.isIndeterminate = function() {
    return ($scope.selected.length !== 0 &&
        $scope.selected.length !== $scope.items.length);
  };

  $scope.isChecked = function() {
    return $scope.selected.length === $scope.items.length;
  };

  $scope.toggleAll = function() {
    if ($scope.selected.length === $scope.items.length) {
      $scope.selected = [];
    } else if ($scope.selected.length === 0 || $scope.selected.length > 0) {
      $scope.selected = $scope.items.slice(0);
    }
  };

  $scope.createJSON = function () {
    var arrayObj = [];
    var obj = {};
    var model = $scope.items;
    var selected = $scope.selected;

    model.forEach((checkbox) => {
        !~selected.indexOf(checkbox) ? arrayObj.push({name: checkbox, data: "false"}) :
                                       arrayObj.push({name: checkbox, data: "true"});
    })

    arrayObj.forEach((e) => {
      obj[e.name] = e.data;
    });

    alert("Data sent! Check console.");
    console.log(JSON.stringify(obj, "", 2));
  }
});
