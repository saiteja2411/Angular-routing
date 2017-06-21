var app = angular.module("app", ['ngRoute'])
        .config(function ($routeProvider,$locationProvider) {
            $routeProvider
            .when('/index.html',{
                controller:'homeController'
            })
                .when('/students', {
                    templateUrl: 'students.html'
                    //controller: 'studentController'
                })
                .when('/courses', {
                    templateUrl: 'courses.html',
                    controller: 'courseController'
                })
                .when('/courses/:id', {
                    templateUrl: 'student.html',
                    controller: 'studentDetailsController'
                })
                .otherwise({
                    redirectTo: '/students'
                });
             //$locationProvider.html5Mode(true);   
        });
        
app.controller("homeController", function ($scope) {
    $scope.homeText = 'Hi we are in home';
});
app.controller("studentController", function ($scope) {
    $scope.studentText = 'Hi we are in Students menu';
});
app.controller("courseController", function ($scope) {
    $scope.courseText = 'Hi we are in Cources menu';
});
app.controller("studentDetailsController", function ($scope,$routeParams) {
    $scope.model=$routeParams.id;
});
