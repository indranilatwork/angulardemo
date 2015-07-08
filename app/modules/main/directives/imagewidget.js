'use strict';
//Defination for the image widget.

module.exports = function() {
    return {
        template: require('../templates/imagewidget.html'),
        restrict: 'E',
        controller : "ImageWidgetController"
    };
};
