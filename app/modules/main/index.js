'use strict';
// Module defination as well as defination for all the directives, controllers for this module
module.exports = angular.module('modules.home', ['ui.router'])
    .controller('ImageWidgetController', require('./controllers/imagewidget'))
    .controller('TextWidgetController', require('./controllers/textwidget'))
    .controller('TagWidgetController', require('./controllers/tagwidget'))
    .controller('WorkSheetController', require('./controllers/worksheet'))
    .directive('workSheet', require('./directives/worksheet'))
    .directive('widgetWrapper', require('./directives/widgetwrapper'))
    .directive('textWidget', require('./directives/textwidget'))
    .directive('imageWidget', require('./directives/imagewidget'))
    .directive('tagWidget', require('./directives/tagwidget'))
    .config(require('./router/router'));

