angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('sG6', {
    url: '/sg6',
    templateUrl: 'templates/sG6.html',
    controller: 'sG6Ctrl'
  })

  .state('sG5', {
    url: '/sg5',
    templateUrl: 'templates/sG5.html',
    controller: 'sG5Ctrl'
  })

$urlRouterProvider.otherwise('/home')

  

});