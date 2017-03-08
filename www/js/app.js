// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services','ngCordova'])

.config(function($ionicConfigProvider, $sceDelegateProvider){
  
  $ionicConfigProvider.backButton.previousTitleText(false).text('');
  $sceDelegateProvider.resourceUrlWhitelist(['self', '*://www.youtube.com/**', '*://player.vimeo.com/video/**']);
  $ionicConfigProvider.views.maxCache(0);

})

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function () {

    window.plugins.nativepagetransitions.globalOptions.duration = 500;
    window.plugins.nativepagetransitions.globalOptions.iosdelay = 350;
    window.plugins.nativepagetransitions.globalOptions.androiddelay = 350;
    window.plugins.nativepagetransitions.globalOptions.winphonedelay = 350;
    window.plugins.nativepagetransitions.globalOptions.slowdownfactor = 4;
    // these are used for slide left/right only currently
    window.plugins.nativepagetransitions.globalOptions.fixedPixelsTop = 0;
    window.plugins.nativepagetransitions.globalOptions.fixedPixelsBottom = 0;

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

/*
  This directive is used to disable the "drag to open" functionality of the Side-Menu
  when you are dragging a Slider component.
*/
.directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function($ionicSideMenuDelegate, $rootScope) {
    return {
        restrict: "A",  
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

            function stopDrag(){
              $ionicSideMenuDelegate.canDragContent(false);
            }

            function allowDrag(){
              $ionicSideMenuDelegate.canDragContent(true);
            }

            $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
            $element.on('touchstart', stopDrag);
            $element.on('touchend', allowDrag);
            $element.on('mousedown', stopDrag);
            $element.on('mouseup', allowDrag);

        }]
    };
}])

/*
  This directive is used to open regular and dynamic href links inside of inappbrowser.
*/
.directive('hrefInappbrowser', function() {
  return {
    restrict: 'A',
    replace: false,
    transclude: false,
    link: function(scope, element, attrs) {
      var href = attrs['hrefInappbrowser'];

      attrs.$observe('hrefInappbrowser', function(val){
        href = val;
      });
      
      element.bind('click', function (event) {

        var name = event.target.innerHTML;

        var freqDocs;
        if (window.localStorage.getItem("fad") !== undefined && window.localStorage.getItem("fad") !== null)
        {
            freqDocs = JSON.parse(window.localStorage.getItem("fad"));
        }
        else
        {
            freqDocs = { 'docs': [] };
        }


        var clickedLink = { "href": href, "name": name, "count": 1 };
        var doesExist = false;

        freqDocs.docs.forEach(function (arrayElement) {
            if (arrayElement.href == clickedLink.href)
            {
                arrayElement.count = arrayElement.count + 1
                doesExist = true;
            }
        });
        if (doesExist == false && href!="https://twitter.com/UN?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" && href!="https://www.instagram.com/unitednations/")
        {
            freqDocs.docs.push(clickedLink);
        }

        var json = JSON.stringify(freqDocs);
        window.localStorage.setItem("fad", json);

        window.open(href, '_system', 'location=yes');

        event.preventDefault();
        event.stopPropagation();

      });
    }
  };
});