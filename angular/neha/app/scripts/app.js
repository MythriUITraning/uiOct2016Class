//IIFE Construct

(function(angular){
  'use strict';
  //Callback function to be executed ONCE
  function AppRun($rootScope){
    console.log($rootScope);
  }
  //Injecting a Dependency
  AppRun.$inject = ['$rootScope'];
  //to define the app module we write
  angular.module('nehaApp', ['ngAnimate',
                              'ngCookies',
                              'ngMessages',
                              'ngResource',
                              'ngRoute',
                              'ngSanitize',
                              'ngTouch'])
    //this config is the actual configuration of our application
    //.confic()
    .run(AppRun);
})(window.angular || (window.angular = {}));//then (window.angular is an empty object)
