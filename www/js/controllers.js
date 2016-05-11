angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('sG6Ctrl', function($scope) {

})
   
.controller('sG5Ctrl', function($scope, $cordovaPrinter) {
         
    $scope.print = function () {
    
    //commit any user input to the "value" attribute (thus making it show up in the html markup)
    var elems = document.getElementById('printme').getElementsByTagName("input");
    for(var i = 0; i < elems.length; i++)
    {
        //set current value to default value
        elems[i].setAttribute("value", elems[i].value);
    }
    
    //extract markup, add css
    var markup = '<html><head><link rel="stylesheet" href="printstyles.css"></head>' + document.getElementById('printme').innerHTML + '</html>';

    //print page
    $cordovaPrinter.print(markup);
    };

    $scope.pdf = function () {
    
    //PDF creation successful--send email
    var success = function(status) {
            
        cordova.plugins.email.open({
                           to:      'nick.moody@bluelabellabs.com',
                           subject: 'Form SG.5',
                           body:    'This is a test of form SG.5, sent as a PDF via email.',
                           attachments: status
                           });
            };

    //pdf creation failed, throw error (eventually)
    var error = function(status) {

            };
          
    //commit any user input to the "value" attribute (thus making it show up in the html markup)
            var elems = document.getElementById('printme').getElementsByTagName("input");
    for(var i = 0; i < elems.length; i++)
    {
        // set attribute to property value
        elems[i].setAttribute("value", elems[i].value);
    }
    
    //get html markup
    var markup = '<html><head><link rel="stylesheet" href="printstyles.css"></head>' + document.getElementById('printme').innerHTML + '</html>';
     
    //create pdf
    window.html2pdf.create(markup,
                            "~/Documents/test.pdf", // on iOS,
                            // "test.pdf", on Android (will be stored in /mnt/sdcard/at.modalog.cordova.plugin.html2pdf/test.pdf)
                            success, //email it if successful
                            error //throw error if not
                            );
            
     
    
    
            };

    
})
 