(function () {
    var simpleNavController = function ($scope) {
        $scope.section = "index";
        $scope.onMenuClick = function (sectionName) {
            $scope.section = sectionName;
        }
    };
    mod = angular.module("ecknoModule");
    mod.controller("simpleNavController", ["$scope", simpleNavController]);
}());