angular.module('textalkArbetsProv').
controller('MainController', ['QueryService', 'article', '$scope', '$routeParams',
function(QueryService, article, $scope, $routeParams) {
    $scope.article = {};
    $scope.articles = {};

    var selectedTheme = 'Light';
    $scope.themes =
    [
        {  label: 'Light' },
        {  label: 'Dark' }
    ];

    $scope.style = function () {
        var stylePath = 'styles/light/style.css';

        if (selectedTheme === 'Dark') {
            stylePath = 'styles/dark/style.css';
        }

        return stylePath;
    }

    function initialize (data){
        if (angular.isUndefined($scope.articles.count)) {
            $scope.articles = data;
            console.warn($scope.articles.length);
        }
        console.console.warn($scope.articles.length);
        getArticle();
    }

    article.currentDisplayIndex = $routeParams.displayIndex;

    QueryService.query('GET', 'GetArticles',{},{}).then(function (getArticles) {
            initialize(getArticles.data)
    });

    $scope.themeSelect = function(theme) {
        if (theme.label === 'Light') {
            $scope.selectedTheme = 'Light';
        }
        else {
            $scope.selectedTheme = 'Dark';
        }
    }

    function getArticle() {
        for (var i = 0; i < $scope.articles.length; i++) {
            if($scope.articles[i].DisplayIndex == $routeParams.displayIndex) {
                $scope.article = $scope.articles[i];
            }
        }
    };
}]);
