var app = angular.module('myApp',['ngRoute']);


app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{
        controller: 'mainController',
        controllerAs: 'main',
        templateUrl: 'main.html'})
    .when('/meat',{
        controller: 'meatController',
        controllerAs: 'meat',
        templateUrl: 'meat.html'})
    .when('/dairy',{
        controller: 'dairyController',
        controllerAs: 'dairy',
        templateUrl: 'dairy.html'})
    .otherwise({
        templateUrl:'main.html'
    });
}]);

app.controller('mainController', function($scope){
    this.body = 'We gurantee for the best prices';
});

app.controller('meatController', function($scope){
    this.items = [{
        name: 'Beef',
        quantity: 57,
        price: 20
    }, {
        name: 'Steak',
        quantity: 22,
        price: 70
    },{
        name: 'Veal',
        quantity: 30,
        price: 55
    },{
        name: 'Sirloin',
        quantity: 17,
        price: 90
    },{
        name: 'Whole Chicken',
        quantity: 80,
        price: 15
    },{
        name: 'Minced Meat',
        quantity: 102,
        price: 5
    }];
});

app.controller('dairyController', function($scope){
    this.items = [{
        name: 'White Cheese',
        quantity: 78,
        price: 2.5
    },{
        name: 'Cottage',
        quantity: 53,
        price: 3.5
    },{
        name: 'Yogurt',
        quantity: 37,
        price: 4
    },{
        name: 'Milk',
        quantity: 90,
        price: 1.5
    },{
        name: 'Chocolate Milk',
        quantity: 68,
        price: 2.5
    },{
        name: 'Yellow Cheese',
        quantity: 77,
        price: 2.5
    }];
});