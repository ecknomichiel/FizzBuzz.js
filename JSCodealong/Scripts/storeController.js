(function(){
    var CreateProduct = function () {
        return {
            Name: "productName",
            Price: 0,
            Description: "<Description>"
        };
    };

    var storeController = function ($scope) {
        $scope.product = CreateProduct();


    }
    mod = angular.module("ecknoModule");
    mod.controller("storeController", ["$scope", storeController]);
}());