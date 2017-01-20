//IIFE Construct
(function(angular){
  'use strict';

  //to define the app module we write
  angular.module('nehaApp', ['ngAnimate',
                              'ngCookies',
                              'ngMessages',
                              'ngResource',
                              'ngRoute',
                              'ngSanitize',
                              'ngTouch',
                              'nehaApp.controllers']);
  angular.module('nehaApp.controllers',[]);
    //this config is the actual configuration of our application
    //.confic()
})(window.angular || (window.angular = {}));//then (window.angular is an empty object)
