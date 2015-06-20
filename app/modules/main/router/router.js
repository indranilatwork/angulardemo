//Defination for the state
module.exports = function($stateProvider, $injector, $urlRouterProvider) {
    $stateProvider
    .state('main', {
        url: '/main',
        template: require('../templates/main.html')
    })

//Defination for the default state
    $urlRouterProvider.otherwise(function($injector) {
        var $state = $injector.get('$state');  
            $state.go('main');
    });
     
}

