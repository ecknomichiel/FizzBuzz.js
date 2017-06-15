(function () {
    var FizzBuzzController = function ($scope) {

        function showFizzBuzzDiv(begin, end, fizzNumber, buzzNumber) {
            var resultText = "";
            if (begin > end) {
                resultText += "Vänligen lägga in en startnummer som är <em>mindre</em> än slutnummret.<br/>";
            }
            if (fizzNumber == buzzNumber) {
                resultText += "Vänligen lägga in en fizz som är <em>inte</em> lika med buzz.<br/>";
            }
            if (fizzNumber == 0 || buzzNumber == 0) {
                resultText += "Fizz och buzz får inte vara lika med 0<br/>";
            }
            if (resultText == "") {
                var results = GetFizzBuzz(begin, end, fizzNumber, buzzNumber);
                var fizzClass = "empty";
                for (i = 0; i < results.length; i++) {
                    switch (results[i])
                    {
                        case "fizz": {
                            fizzClass = "fizz";
                        }
                        case "buzz": {
                            fizzClass = "buzz";
                        }
                        case "fizzbuzz": {
                            fizzClass = "fizzbuzz";
                        }
                        default: {
                            fizzClass = "empty";
                        }
                            
                    }
                    resultText += "<div class='" + fizzClass + "'>" + results[i] + "</div>";
                }
            }
           return resultText;
        }

        function showFizzBuzzComma(begin, end, fizzNumber, buzzNumber) {
            var resultText = "";
            if (begin > end) {
                resultText += "Vänligen lägga in en startnummer som är <em>mindre</em> än slutnummret.<br/>";
            }
            if (fizzNumber == buzzNumber) {
                resultText += "Vänligen lägga in en fizz som är <em>inte</em> lika med buzz.<br/>";
            }
            if (fizzNumber == 0 || buzzNumber == 0) {
                resultText += "Fizz och buzz får inte vara lika med 0<br/>";
            }
            if (resultText == "") {
                var results = GetFizzBuzz(begin, end, fizzNumber, buzzNumber);
                for (i = 0; i < results.length; i++) {
                    resultText += results[i] + ",";
                }
            }
            return resultText;
        }

        function GetFizzBuzz(begin, end, fizzNumber, buzzNumber) {
            var dividableByFizz, dividableByBuzz;
            var result;
            var results = new Array(end - begin);
            var divText = "";
            var idx = 0;
            for (i = begin; i < end; i++) {
                dividableByFizz = i % fizzNumber == 0;
                dividableByBuzz = i % buzzNumber == 0;
                if (dividableByFizz && dividableByBuzz) {
                    result = "fizz-buzz";
                }
                else if (dividableByFizz) {
                    result = "fizz";
                }
                else if (dividableByBuzz) {
                    result = "buzz";
                }
                else {
                    result =  i;
                }
                results[idx++] = result;

            }
            return results;
        }
        $scope.start = 0;
        $scope.end = 100;
        $scope.fizz = 7;
        $scope.buzz = 13;
        $scope.fizzText = showFizzBuzzComma;
    }
    mod = angular.module("ecknoModule");
    mod.controller("FizzBuzzController", ["$scope", FizzBuzzController]);
}());


/*
window.onload = function () {
    document.getElementById("btnWelcome").onclick = showFizzBuzz();
}


function showFizzBuzz()
{
    document.getElementById("message").innerHTML = GetFizzBuzz(0, 100);
}

function GetFizzBuzz(begin, end)
{
    var dividableBy3, dividableBy4;
    var result;
    var divText = "";
    for (i = begin; i <= end; i++) {
        dividableBy3 = i % 3 == 0;
        dividableBy4 = i % 4 == 0;
        if (dividableBy3 && dividableBy4) {
            result = "fizz-buzz";
        }
        else if (dividableBy3) {
            result = "fizz";
        }
        else if (dividableBy4) {
            result = "buzz";
        }
        else {
            result = i;
        }
        divText += result + ",";

    }
    return divText;
}

*/
