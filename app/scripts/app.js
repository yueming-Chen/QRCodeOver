var app = angular.module('myApp', ['ui.router'])
.run(function($rootScope){

})
.config(function($stateProvider,$urlRouterProvider){
	
	$stateProvider
        .state('tab', {
            url: "/tab",
            abstract: true,
            templateUrl: "view/tab.html"
        })
        .state('tab.home', {
            url: "/home",
            templateUrl: "view/bullitien.html",
            controller: "mainCtrl"
        })
        .state('tab.record',{
            //未建置完
            url: "/record",
            templateUrl:"view/record.html",
            controller: "recordCtrl"
        })
        .state('tab-car', {
            url: "/tab-car",
            templateUrl: "view/tab-car.html"
        })
        .state('tab-car.home', {
            url: "/home",
            templateUrl: "view/cardetail.html",
            controller: "carDetailCtrl"
        })
        .state('login',{
            //未建置完
            url: "/login",
            templateUrl:"view/login.html",
            controller: "loginCtrl"
        });

        
        
    $urlRouterProvider.otherwise('/login');
});
