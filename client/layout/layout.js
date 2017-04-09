(function () {
        var layout = module.controller('layout', function ($scope) {

                var links = [{
                        "href": "login",
                        "value": "Login"
                    },
                    {
                        "href": "about",
                        "value": "About Us"
                    },
                    {
                        "href": "registration",
                        "value": "User Registration"
                    },
                    {
                        "href": "/",
                        "value": "Home"
                    }]

                    $scope.links = links;

                    var imageSrc = "public/images/batman-logo-1.png";

                    $scope.imageSrc = imageSrc;

                });
        })();