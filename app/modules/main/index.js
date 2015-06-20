'use strict';
// Module defination as well as defination for all the directives, controllers for this module
module.exports = angular.module('modules.home', ['ui.router'])
.controller('InputWidgetController', require('./controllers/inputwidget'))
.controller('WorkSheetController', require('./controllers/worksheet'))
.directive('workSheet', require('./directives/worksheet'))
.directive('textWidget', require('./directives/textwidget'))
.directive('imageWidget', require('./directives/imagewidget'))
.directive('inputWidget', require('./directives/inputwidget'))
.config(require('./router/router'));

