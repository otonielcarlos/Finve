var app = angular.module("amort", []);

app.controller("MainCtrl", ["$scope", function ($scope) {

    $scope.loan_amount = null;
    $scope.interest_rate = null;
    $scope.months = null;
    $scope.pmt = null;
    $scope.selected = null;
    $scope.output= null;

    $scope.calculate = function (rate, nper, pv) {

        var pvif = Math.pow(1 + rate, nper);
        var result = rate / (pvif - 1) * -(pv * pvif);
        $scope.pmt = result.toFixed(2);
            $scope.output = $scope.pmt * $scope.months;

    };

    }]);