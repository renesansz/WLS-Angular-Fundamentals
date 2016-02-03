(function () {

    'use strict';

    angular.module('app').config(AppRoutes);

    function AppRoutes($stateProvider, $urlRouterProvider, NG_PATH) {

        $stateProvider
            // Home
            .state({
                name: 'home',
                url: '/',
                controller: 'HomeController as vm',
                templateUrl: NG_PATH.MODULES + 'home/view.html'
            })
            // User Profile
            .state({
                name: 'user',
                url: 'user/:id',
                controller: 'UserController as user',
                templateUrl: NG_PATH.MODULES + 'user/view.html'
            })
            // About Page
            .state({
                name: 'about',
                url: '/about',
                templateUrl: NG_PATH.MODULES + 'about/view.html'
            });


        // If a url doesn't exist, we redirect the user to homepage.
        $urlRouterProvider.otherwise('/');

    }

}());