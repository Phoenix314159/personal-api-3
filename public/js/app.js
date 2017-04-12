angular.module('myApp', ['ui.router'])
    .config(function ($urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('home', {
                url:'/',
                templateUrl: '<home-comp></home-comp>',
                component: 'homeComp'
        })
            .state('me', {
                url:'/me',
                templateUrl: '<me-comp></me-comp>',
                component: 'meComp'
            })
            .state('skillz', {
                url: '/skillz',
                templateUrl: '<skillz-comp></skillz-comp>',
                component: 'skillzComp'
            });
        $urlRouterProvider.otherwise('/');
    })
