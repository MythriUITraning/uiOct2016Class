//IFFE Constructs
(function(angular){
// to define app module ,we write
  'use strict';
  angular.module('nehaApp', [
      'ngAnimate',
      'ngAria',
      'ngCookies',
      'ngMessages',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'nehaApp.controllers'
    ]);
  angular.module('nehaApp.controllers',[]);

})(window.angular || (window.angular = {}));

