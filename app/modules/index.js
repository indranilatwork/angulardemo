'use strict';
// This is a wrapper call for all the modules, we'll require all the modules from here
// As well  as we can define some common constacts/ services here
module.exports = angular.module('modules',
    [
        require('./main').name
    ]);

