angular.module('DraggableApp', ['ngDraggable'])

.controller('MainCtrl', function ($scope) {
    $scope.centerAnchor = true;
    $scope.toggleCenterAnchor = function () {$scope.centerAnchor = !$scope.centerAnchor}
    $scope.draggableObjects = [{name:'one', id: '0'}, {name:'two', id: '1'}, {name:'three', id:'2'}];
    $scope.droppedObjects1 = [];
    $scope.droppedObjects2= [];

    $scope.onDropComplete1=function(data,evt){
        var dragObjects = $scope.draggableObjects;
        var index = $scope.droppedObjects1.indexOf(data);
        if (index == -1)
        $scope.droppedObjects1.push(data);
        dragObjects.forEach((e,i) => {
          if (e.id == data.id) dragObjects.splice(i, 1);
        })
    }

    $scope.onDragSuccess1=function(data,evt){
        var index = $scope.droppedObjects1.indexOf(data);
        if (index > -1) {
            $scope.droppedObjects1.splice(index, 1);
        }
    }

    $scope.onDragSuccess2=function(data,evt){
        var index = $scope.droppedObjects2.indexOf(data);
        if (index > -1) {
            $scope.droppedObjects2.splice(index, 1);
        }
    }

    $scope.onDropComplete2=function(data,evt){
        var index = $scope.droppedObjects2.indexOf(data);
        var dragObjects = $scope.draggableObjects;
        if (index == -1) {
            $scope.droppedObjects2.push(data);
        }

        dragObjects.forEach((e,i) => {
          if (e.id == data.id) dragObjects.splice(i, 1);
        })
    }

    $scope.createJSON = function () {
      var arrayObj = $scope.droppedObjects2;
      var obj = {};

      arrayObj.forEach((e) => {
        obj[e.name] = e;
      });

      alert("Data sent! Check console.");
      console.log(JSON.stringify(obj, "", 2));
    }
});
