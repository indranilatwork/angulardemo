'use strict';
//Defination for the image widget.

module.exports = ['$compile',function($compile) {
    return {
        restrict: 'E',
        scope: {
            widget: '='
        },
        link : function(scope, el, attrs){
            var html = '<'+scope.widget.type+'></'+scope.widget.type+'>';
            el.html(html);
            $compile(el.contents())(scope)
        }
    };
}];
