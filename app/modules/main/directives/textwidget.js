'use strict';
//Defination for the text widget.
module.exports = function() {
    return {
        template: require('../templates/textwidget.html'),
        restrict: 'E',
        controller : "TextWidgetController"
    };
};
