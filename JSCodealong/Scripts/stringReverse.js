(function () {
    var stringReverseController = function ($scope) {
        $scope.value = "";
        $scope.reverseValue = function () {
            var i = 0;
            var result = "";
            for (i = $scope.value.length -1; i > -1; i--) {
                result += $scope.value[i];
            }
            return result;
        };
    };
    mod = angular.module("ecknoModule");
    mod.controller("srController", ["$scope", stringReverseController]);
}());