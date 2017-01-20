(function (angular){
  'use strict';
  function NehaController($scope){
    console.log($scope);
  }
  NehaController.$inject =['$scope']
  var newModule = angular.module('nehaApp.controllers');
  newModule.controller('nehaController',NehaController);
})
(window.angular || (window.angular ={}));
