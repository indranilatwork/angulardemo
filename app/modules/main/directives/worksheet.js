'use strict';
//Work sheet directive defination
module.exports = function() {
    return {
        controller: 'WorkSheetController', // Called from worksheet.js controller
        template: require('../templates/worksheet.html'),
        restrict: 'A',
        scope: true
    };
};
