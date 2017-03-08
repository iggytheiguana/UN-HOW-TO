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

  .state('rEFERENCEDOCUMENTS', {
    url: '/rEFERENCEDOCUMENTS',
    templateUrl: 'templates/rEFERENCEDOCUMENTS.html',
    controller: 'rEFERENCEDOCUMENTSCtrl'
  })

  .state('cOREUNBODIES', {
    url: '/cOREUNBODIES',
    templateUrl: 'templates/cOREUNBODIES.html',
    controller: 'cOREUNBODIESCtrl'
  })

  .state('rESOURCEGUIDE', {
    url: '/rESOURCEGUIDE',
    templateUrl: 'templates/rESOURCEGUIDE.html',
    controller: 'rESOURCEGUIDECtrl'
  })

  .state('fORMSFORDELEGATES', {
    url: '/fORMSFORDELEGATES',
    templateUrl: 'templates/fORMSFORDELEGATES.html',
    controller: 'fORMSFORDELEGATESCtrl'
  })

  .state('sAVEDDOCS', {
    url: '/sAVEDDOCS',
    templateUrl: 'templates/sAVEDDOCS.html',
    controller: 'sAVEDDOCSCtrl'
  })

  .state('pORTALS', {
    url: '/pORTALS',
    templateUrl: 'templates/pORTALS.html',
    controller: 'pORTALSCtrl'
  })

  .state('help', {
    url: '/help',
    templateUrl: 'templates/help.html',
    controller: 'helpCtrl'
  })

  .state('formSG35', {
    url: '/sg35?id',
    templateUrl: 'templates/formSG35.html',
    controller: 'formSG35Ctrl'
  })

  .state('formSG38', {
    url: '/sg38?id',
    templateUrl: 'templates/formSG38.html',
    controller: 'formSG38Ctrl'
  })

  .state('formSG32', {
    url: '/sg32?id',
    templateUrl: 'templates/formSG32.html',
    controller: 'formSG32Ctrl'
  })

  .state('formSG5', {
    url: '/sg5?id',
    templateUrl: 'templates/formSG5.html',
    controller: 'formSG5Ctrl'
  })

  .state('formSG8', {
    url: '/sg8?id',
    templateUrl: 'templates/formSG8.html',
    controller: 'formSG8Ctrl'
  })

  .state('formSG39', {
    url: '/sg39?id',
    templateUrl: 'templates/formSG39.html',
    controller: 'formSG39Ctrl'
  })

    .state('sCLetter', {
        url: '/scLetter?id',
        templateUrl: 'templates/sCLetter.html',
        controller: 'sCLetterCtrl'
    })

$urlRouterProvider.otherwise('/help')

  

});