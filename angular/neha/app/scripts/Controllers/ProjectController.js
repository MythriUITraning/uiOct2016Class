//IIFE Construct
(function(angular){
  'use strict';
  function ProjectController($scope){
    //$scope.firstName = 'Neha';
    //$scope.lastName ='Parnerkar';
    $scope.user = {
      firstName: 'Neha';
      lastName: 'Parnerkar';
    };
  }
  ProjectController.$inject = ['$scope'];
  // let's create a custom module
  angular.module('nehaApp.controllers').controller('projectController',ProjectController);
})
(window.angular || (window.angular = {}));
