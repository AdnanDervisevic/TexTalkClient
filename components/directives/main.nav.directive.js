angular.module('textalkArbetsProv').
directive('mainNav', ['articleService', function(articleService) {
    // Definition of directive
    var directiveDefinitionObject = {
        restrict: 'E',
        templateUrl: 'components/directives/main-nav.html',
        link: function($scope, element, attr) {
            $scope.articleNumber = "";

            $scope.next = function () {
              var routeString = "#/reader/";
              $scope.articleNumber = articleService.currentDisplayIndex;
              if (articleService.currentDisplayIndex != 5) {
                  routeString += parseInt(articleService.currentDisplayIndex, 10)+1;
              }
              else {
                  routeString += 1;
              }

              return routeString;
            }

            $scope.previous = function () {
                var routeString = "#/reader/";
                if (articleService.currentDisplayIndex != 1) {
                    routeString += parseInt(articleService.currentDisplayIndex, 10) - 1;
                }
                else {
                    routeString += 5;
                }

                return routeString;
            }
        }
    };

    return directiveDefinitionObject;
}])
