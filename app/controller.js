angular.module('boilerplate').
controller('MainController', ['LocalStorage', 'QueryService', '$scope', '$routeParams', function(LocalStorage, QueryService, $scope, $routeParams) {
    $scope.articles = {};

    QueryService.query('GET', 'GetArticles',{},{}).then(function (getArticles) {
        $scope.articles = getArticles.data;
    });

    if(!angular.isUndefined($routeParams.displayIndex)){
        $scope.currentArticleIndex = $routeParams.displayIndex;
    }
    else {
        $scope.currentArticleIndex = 0;
    }
}]);
