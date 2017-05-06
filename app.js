var app = angular.module('materializeApp', ['ui.materialize'])
    .controller('BodyController', ["$scope", function ($scope) {

        $scope.languages = [
            {
                icon: 'assets/java.png',
                description: 'Java',
                proficiency: 80
            },
            {
                icon: 'assets/python.png',
                description: 'Python',
                proficiency: 65
            },
            {
                icon: 'assets/kotlin.png',
                description: 'Kotlin',
                proficiency: 65
            },
            {
                icon: 'assets/js.png',
                description: 'Javascript',
                proficiency: 50
            },
            {
                icon: 'assets/golang.png',
                description: 'Golang',
                proficiency: 45
            }
           
        ];

}]);