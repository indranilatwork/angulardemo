'use strict';
//Defination for the image widget.

module.exports = function() {
    return {
        template: require('../templates/tagwidget.html'),
        restrict: 'E',
         scope: {
                edit: '=' , 
                tag : "=",
                parentRemoveTag : "&"
            },
        controller : "TagWidgetController"
    };
};
