
// Create AngularJS application
var app = angular.module("startupApp", []);

// Create controller
app.controller("StartupController", function($scope) {

    // Welcome message
    $scope.message = "";

    $scope.welcome = function() {
        $scope.message = "Welcome to our Startup!";
    };


    // Array of services
    $scope.services = [
        {
            name: "Web Development",
            description: "Creating modern websites."
        },
        {
            name: "Digital Marketing",
            description: "Growing businesses online."
        },
        {
            name: "Business Solutions",
            description: "Providing smart ideas."
        }
    ];


    // Calculator
    $scope.a = 0;
    $scope.b = 0;
    $scope.operator = "+";

    $scope.calculate = function() {

        if ($scope.operator == "+") {
            return $scope.a + $scope.b;
        }

        if ($scope.operator == "-") {
            return $scope.a - $scope.b;
        }

        if ($scope.operator == "*") {
            return $scope.a * $scope.b;
        }

        if ($scope.operator == "/") {

            if ($scope.b == 0) {
                return "Cannot divide by zero";
            }

            return $scope.a / $scope.b;
        }
    };


    // To-do list
    $scope.tasks = ["Plan Startup", "Develop Website"];

    $scope.newTask = "";

    $scope.addTask = function() {

        if ($scope.newTask.trim() != "") {

            $scope.tasks.push($scope.newTask);

            $scope.newTask = "";
        }
    };

    $scope.removeTask = function(index) {
        $scope.tasks.splice(index, 1);
    };


    // Comment box
    $scope.comments = [];

    $scope.comment = "";

    $scope.addComment = function() {

        if ($scope.comment.trim() != "") {

            $scope.comments.push($scope.comment);

            $scope.comment = "";
        }
    };

    $scope.removeComment = function(index) {
        $scope.comments.splice(index, 1);
    };

});
