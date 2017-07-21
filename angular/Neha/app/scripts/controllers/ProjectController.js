//IFFE Construct
(function(angular){
  'use strict';
  function ProjectController($scope){
    $scope.user ={
    firstName: 'Neha',
    lastName: 'Parnerkar'
    };
  }
  ProjectController.$inject = ['$scope'];
angular.module('nehaApp.controllers').controller('projectController', ProjectController);
})(window.angular || (window.angular = {}));
