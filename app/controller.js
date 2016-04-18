angular.module('textalkArbetsProv').
controller('MainController', ['QueryService', 'article', '$scope', '$routeParams',
function(QueryService, article, $scope, $routeParams) {
    $scope.article = {};
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


    article.currentDisplayIndex = $routeParams.displayIndex;

    QueryService.query('GET', 'GetArticles',{},{}).then(function (getArticles) {
        getArticle(getArticles.data);
    });

    $scope.themeSelect = function(theme) {
        if (theme.label === 'Light') {
            $scope.selectedTheme = 'Light';
        }
        else {
            $scope.selectedTheme = 'Dark';
        }
    }

    function getArticle(articles) {
        for (var i = 0; i < articles.length; i++) {
            if(articles[i].DisplayIndex == $routeParams.displayIndex) {
                $scope.article = articles[i];
            }
        }
    };
}]);
