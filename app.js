(function() {
    'use strict';

angular.module('myFirstApp', [])
.controller('MyFirstController', function ($scope) {
    $scope.name = "Olha";
    $scope.sayHello = function () {
        return "Hello Coursera!"
    };
});
})()