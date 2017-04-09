(function () {

    module.controller('login', function ($scope, $location) {
        $scope.message= "My login controller sent this message";
        $scope.url = $location.url();
        $scope.imageSrc = "public/images/batman-logo-3.png";
    });
})();