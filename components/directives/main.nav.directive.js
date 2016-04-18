angular.module('textalkArbetsProv').
directive('mainNav', ['article', function(article) {
    // Definition of directive
    var directiveDefinitionObject = {
        restrict: 'E',
        templateUrl: 'components/directives/main-nav.html',
        link: function($scope, element, attr) {
            $scope.articleNumber = article.currentDisplayIndex;

            $scope.next = function () {
              var routeString = "#/reader/";
              if (article.currentDisplayIndex != 5) {
                  routeString += parseInt(article.currentDisplayIndex, 10)+1;
              }
              else {
                  routeString += 1;
              }

              return routeString;
            }

            $scope.previous = function () {
                var routeString = "#/reader/";
                if (article.currentDisplayIndex != 1) {
                    routeString += parseInt(article.currentDisplayIndex, 10) - 1;
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
