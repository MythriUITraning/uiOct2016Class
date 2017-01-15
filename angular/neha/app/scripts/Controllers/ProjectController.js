//IIFE Construct
(function(angular){
  'use strict';
    function ProjectController($scope){
      console.log($scope);
    }
    ProjectController.$inject = ['$scope'];
  // let's create a custom module
  angular.module('projectApp').controller('projectController',ProjectController);
})
(window.angular || (window.angular = {}));
