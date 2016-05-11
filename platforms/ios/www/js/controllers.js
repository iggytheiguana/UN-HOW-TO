angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('sG6Ctrl', function($scope) {

})
   
.controller('sG5Ctrl', function($scope, $cordovaPrinter) {
         
    $scope.print = function () {
    // URI for the index.html
            
    var elems = document.getElementById('printme').getElementsByTagName("input");
    
    for(var i = 0; i < elems.length; i++)
    {
    // set attribute to property value
    elems[i].setAttribute("value", elems[i].value);
    }
    
    var markup = '<html><head><link rel="stylesheet" href="printstyles.css"></head>' + document.getElementById('printme').innerHTML + '</html>';

        
    var page = document.getElementById('printme');
    $cordovaPrinter.print(markup);
    };

    $scope.pdf = function () {
            
    var success = function(status) {
            
        cordova.plugins.email.open({
                           to:      'nick.moody@bluelabellabs.com',
                           subject: 'Form SG.5',
                           body:    'This is a test of form SG.5, sent as a PDF via email.',
                           attachments: status
                           });
            };

    var error = function(status) {

            };
            
    var elems = document.getElementById('printme').getElementsByTagName("input");

    for(var i = 0; i < elems.length; i++)
    {
    // set attribute to property value
    elems[i].setAttribute("value", elems[i].value);
    }
    
    var markup = '<html><head><link rel="stylesheet" href="printstyles.css"></head>' + document.getElementById('printme').innerHTML + '</html>';
     
    window.html2pdf.create(markup,
                            "~/Documents/test.pdf", // on iOS,
                            // "test.pdf", on Android (will be stored in /mnt/sdcard/at.modalog.cordova.plugin.html2pdf/test.pdf)
                            success,
                            error
                            );
            
     
    
    
            };

    
})
 