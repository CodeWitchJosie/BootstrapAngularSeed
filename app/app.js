'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.view2',
  'myApp.version',
  'myApp.hello'
]).
config(['$locationProvider', '$routeProvider', 'toastrConfig', function($locationProvider, $routeProvider, toastrConfig) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});

  angular.extend(toastrConfig,  {
    "closeButton": true,
    "debug": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "onclick": null,
    "showDuration": "500",
    "hideDuration": "500",
    "timeOut": "3000",
    "extendedTimeOut": "0",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  })
}])
.controller('HeaderCtrl', ['$scope', '$location', function($scope, $location){
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };

}])
