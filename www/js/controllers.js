angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('sG6Ctrl', function($scope) {

})
   
.controller('sG5Ctrl', function($scope, $cordovaPrinter) {
         
    $scope.print = function () {
    // URI for the index.html
            
            /*
        $('form input').each(function()
                             {
                             this.setAttribute('value',this.value);
                             if (this.checked)
                             this.setAttribute('checked', 'checked');
                             else
                             this.removeAttribute('checked');
                             });
             */
            
        var page = document.getElementById('printme');

        $cordovaPrinter.print(page);
    };

    $scope.pdf = function () {
    var success = function(status) {
            
        cordova.plugins.email.open({
                           to:      'nick.moody@bluelabellabs.com',
                           subject: 'PDF',
                           body:    'TEST',
                           attachments: status
                           });
    }

    var error = function(status) {

    }
    
    angular.forEach($scope.myForm, function(value, key) {
                    if (typeof value === 'object' && value.hasOwnProperty('$modelValue'))
                        value.value = "TEST";
                        value.attr('value',"TEST");
                    });
            
            /*
    $('form input').each(function()
                         {
                         this.setAttribute('value',this.value);
                         if (this.checked)
                         this.setAttribute('checked', 'checked');
                         else
                         this.removeAttribute('checked');
                         });
             */
            
    var markup = "<html>" + document.getElementById('printme').innerHTML + "</html>";
    window.html2pdf.create(markup,
                           "~/Documents/test.pdf", // on iOS,
                           // "test.pdf", on Android (will be stored in /mnt/sdcard/at.modalog.cordova.plugin.html2pdf/test.pdf)
                           success,
                           error
                           );
    }

    
})
 