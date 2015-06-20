'use strict';
//Defination for the input widget.
// This directive is maintaing the actions on both widget, like saving, canceling, removing actions on each widget.
//This widget don't have any scope, it's using it's parent's scope.
module.exports = function() {
    return {
        controller: 'InputWidgetController', // Called from inputwidget.js controller
        template: require('../templates/inputwidget.html'),
        restrict: 'E'
    };
};
