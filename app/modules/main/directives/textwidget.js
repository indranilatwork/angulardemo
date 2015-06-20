'use strict';
//Defination for the text widget.
//This directive is inheriting widget model and removeFromParent, moveUpFromParent & moveDownFromParent method from parent controller.
// This directive is showing the title for the text widget.
module.exports = function() {
    return {
        template: require('../templates/textwidget.html'),
        restrict: 'E',
        scope: { widget: '=' , removeFromParent: '&',moveUpFromParent: '&',moveDownFromParent: '&'}
    };
};
