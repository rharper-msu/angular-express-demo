var module = angular.module('demo', ['ngRoute']);

(function () {


    module.config(function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'home/home.html',
                controller: 'home'
            })
            .when("/about", {
                templateUrl: "about/about.html",
                controller: "about"
            })
            .when("/login", {
                templateUrl: "login/login.html",
                controller: "login"
            })
            .when("/registration", {
                templateUrl: "registration/registration.html",
                controller: "registration"
            })
            .otherwise({
                templateUrl: "errors/404.html",
                controller: 'home'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });

    });


})();