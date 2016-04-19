angular.module('textalkArbetsProv').
directive('themeSelection', ['articleService', function(articleService) {
    return {
        restrict: 'EA',
        transclude: true,
        templateUrl: 'components/directives/theme-selection.html',
        link: function($scope, element, attr) {
            $scope.style = articleService;
        }
    };
}])
