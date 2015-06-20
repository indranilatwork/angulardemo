'use strict';
//Defination for the image widget.
//This directive is inheriting widget model and removeFromParent, moveUpFromParent & moveDownFromParent method from parent controller.
// This directive is showing the title & the image for the image widget.
module.exports = function() {
    return {
        template: require('../templates/imagewidget.html'),
        restrict: 'E',
        scope: { widget: '=' , removeFromParent: '&',moveUpFromParent: '&',moveDownFromParent: '&'}
    };
};
