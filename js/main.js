
(function() {
    'use strict';
    angular
        .module('flowers', ['ui.router','backand'])

        .config(function($stateProvider, $urlRouterProvider, BackandProvider) {

            //maybe don't need this:
            $urlRouterProvider.otherwise('/');

            $stateProvider
            .state('home', {
                    url: '/',
                    templateUrl: '/views/partials/imageSearch.html',
                    controller: 'mainController',
                    controllerAs: 'controller'
            })
            .state('results', {
                url: '/results/:country',
                templateUrl: '/views/partials/results.html',
                controller: 'resultsController',
                controllerAs: 'controller'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '/views/partials/contact.html',
                controller: 'contactController',
                controllerAs: 'controller'
            })
            .state('chart', {
                url: '/chart',
                templateUrl: '/views/partials/chart.html',
                controller: 'chartController',
                controllerAs: 'controller'
            });
        })
    })();
            