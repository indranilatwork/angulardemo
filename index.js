window.name = "NG_DEFER_BOOTSTRAP!";

//require all the library files
require('angular');
require('angularRouter');
require('jquery');
var App = require('./app/app');

angular.element().ready(function() {
  // pause the load of the modules until all the libraries are loaded https://docs.angularjs.org/guide/bootstrap
  angular.resumeBootstrap([App['name']]);
});
